//  Type for logging in user mutation

export type TLoginUserOutput = {
  statusCode: 200;
  data: {
    user: {
      _id: string;
      avatar: {
        url: string;
        localPath: string;
        _id: string;
      };
      username: string;
      email: string;
      role: string;
      loginType: string;
      isEmailVerified: boolean;
      createdAt: string;
      updatedAt: string;
      __v: number;
    };
    accessToken: string;
    refreshToken: string;
  };
  message: string;
  success: boolean;
};

export type TLoginUserInput = {
  username: string;
  password: string;
};

// Type for forgot password mutation

export type TForgotPasswordInput = string;

export type TForgotPasswordOutput = {
  statusCode: 200;
  data: object;
  message: string;
  success: boolean;
};

//  Type for reset password mutation

export type TNewPasswordOutput = {
  data: object;
  message: string;
  statusCode: 200;
  success: boolean;
};

export type TNewPasswordInput = string;

export type TRoleChangeOutput = {
  data: object;
  message: string;
  statusCode: 200;
  success: boolean;
};

export type TRoleChangeInput = {
  role: string;
};

export type TUser = {
  userName: string;
  password: string;
};
