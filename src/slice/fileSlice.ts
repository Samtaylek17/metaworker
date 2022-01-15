import { createSlice } from '@reduxjs/toolkit';

import { convertFile, fetchFile, getAllFiles } from '../api/endpoints';

interface FileInitialState {
  currentFile: Record<string, unknown> | null;
  fileList: Record<string, any>[];
  isLoading: boolean;
  error: Record<string, unknown> | null;
}

const fileInitialState = {
  currentFile: null,
  fileList: [],
  isLoading: false,
  error: null,
};

function startLoading(state: FileInitialState) {
  state.isLoading = true;
}

function loadingFailed(
  state: FileInitialState,
  action: { payload: Record<string, unknown> | null }
) {
  state.isLoading = false;
  state.error = action.payload;
}

const files = createSlice({
  name: 'files',
  initialState: fileInitialState,
  reducers: {
    getFileStart: startLoading,
    getFilesStart: startLoading,
    getFileSuccess(state, { payload }) {
      state.currentFile = payload;
      state.isLoading = false;
      state.error = null;
    },
    getFilesSuccess(state: FileInitialState, { payload }) {
      state.fileList = payload;
      state.isLoading = false;
      state.error = null;
    },
    getFileFailure: loadingFailed,
    getFilesFailure: loadingFailed,
    convertFileStart: startLoading,
    convertFileSuccess(state: FileInitialState, action) {
      state.fileList.unshift(action.payload.data.file);
      state.currentFile = action.payload.data.file;
      state.isLoading = false;
      state.error = null;
    },
    convertFileFailure: loadingFailed,
  },
});

export const {
  getFileStart,
  getFilesStart,
  getFileSuccess,
  getFilesSuccess,
  getFileFailure,
  getFilesFailure,
  convertFileStart,
  convertFileSuccess,
  convertFileFailure,
} = files.actions;

export default files.reducer;

interface IAction {
  type: string;
  payload?: Record<string, unknown> | null;
}

export const addFile = (url: string) => async (dispatch: (arg: IAction) => void) => {
  try {
    dispatch(convertFileStart());
  } catch (err: any) {
    dispatch(convertFileFailure(err.toString()));
  }
};
