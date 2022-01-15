import { combineReducers } from '@reduxjs/toolkit';
import fileSlice from '../slice/fileSlice';

const rootReducer = combineReducers({
  files: fileSlice,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
