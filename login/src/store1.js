import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authentication';

export default configureStore({
reducer:{
   authentication:authSlice
}
});