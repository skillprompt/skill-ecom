export type TUserOutput = {
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

export type TUserInput = {
  username: string,
  password: string
};
