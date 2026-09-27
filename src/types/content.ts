export type CategorySlug =
  | "musica"
  | "cine"
  | "libros"
  | "ideas"
  | "cultura"
  | "play"
  | "tech";

export interface Category {
  slug: CategorySlug;
  label: string;
}

export interface ArticleImage {
  src: string;
  alt: string;
  credit?: string;
}

export interface Article {
  slug: string;
  category: CategorySlug;
  index: string;
  title: string;
  dek: string;
  body: string[];
  featured?: boolean;
  image?: ArticleImage;
}

export interface ListItem {
  order: string;
  action: string;
  title: string;
  creator: string;
  image?: ArticleImage;
}
