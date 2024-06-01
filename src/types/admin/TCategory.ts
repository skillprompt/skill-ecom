type TCategory = {
  statusCode: 200;
  data: {
    categories: [
      {
        _id: string;
        name: string;
        owner: string;
        createdAt: string;
        updatedAt: string;
        __v: number;
      }
    ];
    totalCategories: number;
    limit: number;
    page: number;
    totalPages: number;
    serialNumberStartFrom: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: null | number;
    nextPage: null | number;
  };
  message: string;
  success: boolean;
};

export default TCategory;

type TCreateCategoryOutput = {
  data: {
    __v: 0;
    _id: string;
    createdAt: string;
    name: string;
    owner: string;
    updatedAt: string;
  };
  message: string;
  statusCode: 200;
  success: boolean;
};

type TCreateCategoryInput = {
  name: string;
};

export type { TCreateCategoryOutput, TCreateCategoryInput };

type TDeleteCategoryOutput = {
  statusCode: 200;
  data: {
    deletedCategory: {
      _id: string;
      name: string;
      owner: string;
      createdAt: string;
      updatedAt: string;
      __v: 0;
    };
  };
  message: string;
  success: boolean;
};

type TDeleteCategoryInput = {
  name: string;
  id: string;
};

export type { TDeleteCategoryOutput, TDeleteCategoryInput };

type TEditCategoryInput = {
  name: string;
  id: string;
};

type TEditCategoryOutput = {
  statusCode: 200;
  data: {
    _id: string;
    name: string;
    owner: string;
    createdAt: string;
    updatedAt: string;
    __v: 0;
  };
  message: string;
  success: boolean;
};

export type { TEditCategoryOutput, TEditCategoryInput };
