export interface authors {
  first_name: string;
  last_name: string;
}
export interface blogs {
  id: string;
  title: string;
  intro: string;
  created_at: string;
  author: authors;
  image: string;
  //url: string;
}
export interface blogItem extends blogs {
  content: string;
}
