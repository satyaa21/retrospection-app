// Create a store with the root reducer

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers';

const store = configureStore({
  reducer: rootReducer
});
export default store;
