export type ArticleType = {
  id : number;
  name: string;
  description: string;
  category : string;
  featured : boolean;
  homepage: boolean;
  rating : number;
  price: number;
  picture: string;
  picture_resized: string;
  created_at: Date | null;
  updated_at: Date | null;
}