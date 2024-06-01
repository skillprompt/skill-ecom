type TCreateProductOutput = {
  data: {
    __v: number;
    _id: string;
    category: string;
    createdAt: string;
    description: string;
    mainImage: string;
    name: string;
    owner: string;
    price: number;
    stock: number;
    subImages: [string, string];
    updatedAt: string;
  };
  message: string;
  statusCode: 201;
  success: boolean;
};

type TCreateProductInput = {
  category: string;
  description: string;
  mainImage: string;
  name: string;
  price: string;
  stock: string;
  subImages: string;
};

export type { TCreateProductInput, TCreateProductOutput };
