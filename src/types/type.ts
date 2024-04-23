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

export type TRoleChangeOutput = {
  data:object;
  message: string;
  statusCode: 200;
  success: boolean;
};

export type TRoleChangeInput = {
  role:string;
}
