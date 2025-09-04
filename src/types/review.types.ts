type TUser = {
  name: string;
  image: string;
};
export type TReview = {
  _id: string;
  comment: string;
  rating: string;
  user: TUser;
};
