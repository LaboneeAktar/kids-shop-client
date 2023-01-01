import { fetchCart } from "../utilities/fetchLSData";

const cartInfo = fetchCart();

export const initialState = {
  cartShow: false,
  cartItems: cartInfo,
};
