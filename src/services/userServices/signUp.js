import bcrypt from 'bcryptjs';

import User from '../../db/models/user';

const signUp = async (req) => {
  try {
    const {
      body: { email, password },
      body,
    } = req;
    const user = await User.findOne({ email });

    if (user) {
      return {
        status: 400,
        message: 'Email already exists',
      };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const usr = Object.assign(body, { password: hashedPassword });
    const newUser = await User.create(usr);

    return {
      status: 200,
      message: 'User created successfully',

      user: newUser,
    };
  } catch (error) {
    return {
      status: 401,
      result: {
        message: error.details[0].message,
      },
    };
  }
};

export default signUp;
