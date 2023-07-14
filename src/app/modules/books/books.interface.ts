export interface IBooks {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  postedBy?: string;
}
export type IBookFilters = {
  searchTerm?: string;
};
