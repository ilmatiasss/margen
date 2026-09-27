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

export interface Article {
  slug: string;
  category: CategorySlug;
  index: string;
  title: string;
  dek: string;
  body: string[];
  featured?: boolean;
}

export interface ListItem {
  order: string;
  action: string;
  title: string;
  creator: string;
}
