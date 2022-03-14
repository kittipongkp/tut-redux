// const action = {
//   type: "",
//   payload: {
//     id: "",
//     title: "",
//     price: "20",
//     quantity: "1",
//   },
// };

export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_CART = "DELETE_CART";



// Action Creators
export function addToCart(addedProduct) {
  return {
    type: ADD_TO_CART,
    payload: addedProduct,
  };
}

export function deleteCart(id) {
  return {
    type: DELETE_CART,
    payload: id,
  };
}


