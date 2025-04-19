import { toast } from "react-toastify";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items: localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')) : [],
    totalAmount: 0,
    totalPrice: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.items.findIndex((item) => item?.id === action.payload?.id);
            if (itemIndex >= 0) {
                state.items[itemIndex].quantity += 1;
                toast.info(`${action.payload?.title} quantity increased`, {
                    position: "bottom-left",
                });
            } else {
                const tempProduct = { ...action.payload, quantity: 1 };
                state.items.push(tempProduct);
                toast.success(`${action.payload?.title} added to cart`, {
                    position: "bottom-left",
                });
            }
            state.totalAmount += 1;
            state.totalPrice += action.payload?.price;
            localStorage.setItem('cartItems',JSON.stringify(state.items));
        },
        removeFromCart: (state, action) => {
            const nextCartItems = state.items.filter((item) => item?.id !== action.payload?.id);
            const itemPrice = state.items.find((item) => item.id === action.payload.id).price;
            state.totalAmount -= 1;
            state.totalPrice -= itemPrice * action.payload.quantity;
            state.items = nextCartItems;
           
            localStorage.setItem('cartItems',JSON.stringify(state.items));
            toast.error(`${action.payload.title} removed from cart`, {
                position: "bottom-left",
            });

        },
        clearCart: (state) => {
            state.items = [];
            state.totalAmount = 0;
            state.totalPrice = 0; 
            localStorage.setItem('cartItems',JSON.stringify(state.items));
            if(state.items.length === 0){
                toast.error(`Cart is empty`, {
                    position: "bottom-left",
                });
            }else{
                toast.error(`Cart cleared`, {
                    position: "bottom-left",
                });
                
            }
           
        },
    },
})
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
