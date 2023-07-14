export interface IBooks {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
}
export type IBookFilters = {
  searchTerm?: string;
};
