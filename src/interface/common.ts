export type IGenericresponse<T> = {
  meta: {
    page?: number;
    limit?: number;
    total?: number;
  };
  data: T;
};
