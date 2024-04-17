export type TRegisterOutput = {
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
  };
  message: string;
  success: boolean;
};

export type TRegisterInput = {
  email: string;
  password: string;
  role: string;
  username: string;
};
