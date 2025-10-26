import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './reducers/CartSlice';
import userslice from './reducers/userSlice';
import productSlice from './reducers/productSlice';

export const store = configureStore({
  reducer: {
    userReducer : userslice,
    productReducer: productSlice,
    cartReducer : cartSlice
  },
});

// import { configureStore } from '@reduxjs/toolkit'
// import userReducer from './reducers/userSlice';
// import productReducer from './reducers/productSlice'
// import cartReducer from './reducers/CartSlice';

// export const store = configureStore({
//   reducer: {
//     userReducer: userReducer,
//     productReducer: productReducer,
//     cartReducer: cartReducer
//   },
// });