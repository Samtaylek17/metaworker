import { combineReducers } from '@reduxjs/toolkit';
// import fileSlice from '../slices/fileSlice';

const rootReducer = combineReducers({});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
