const { createSlice } = require("@reduxjs/toolkit");


const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(initialState,action)=>{
            initialState.push(action.payload);
        },
        removeFromCart:(initialState,action)=>{
            return initialState.filter(eachCartItem=>eachCartItem.id!==action.payload);
        }
    }
});

export default cartSlice.reducer;
export const {addToCart,removeFromCart}=cartSlice.actions;