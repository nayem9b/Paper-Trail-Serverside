export interface IBooks {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  postedBy?: string;
  image: string;
  reviews?: string[];
}
export type IBookFilters = {
  searchTerm?: string;
};
