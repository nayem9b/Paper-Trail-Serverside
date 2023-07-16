import { IWishlist } from "./wishlist.interface";
import { Wishlist } from "./wishlist.model";

export const createWishlistToDB = async (
  payload: IWishlist
): Promise<IWishlist> => {
  const wishlist = new Wishlist(payload);
  await wishlist.save();
  console.log(wishlist);
  return wishlist;
};

export const getUserWishlistFromDB = async (
  payload: string
): Promise<IWishlist[]> => {
  const wishlist = await Wishlist.find({ user: payload });
  return wishlist;
};
