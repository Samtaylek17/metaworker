import { createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';
import { io } from 'socket.io-client';
import { convertFile, fetchFile, getAllFiles } from '../api/endpoints';

interface FileInitialState {
  currentFile: any;
  fileList: any[];
  isLoading: boolean;
  error: Record<string, any> | null;
}

const fileInitialState = {
  currentFile: {},
  fileList: [],
  isLoading: false,
  error: null,
};

function startLoading(state: FileInitialState) {
  state.isLoading = true;
}

function loadingFailed(state: FileInitialState, action: { payload: Record<string, any> | null }) {
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
      state.fileList.unshift(action.payload.data);
      state.currentFile = action.payload.data;
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
    // const socket = io('https://metaworker.herokuapp.com');
    // socket.on('connect', (): void => {
    //   console.log('Connected!');

    //   socket.on('completed', (arg) => {
    //     console.log('status: ', arg);
    //   });
    // });

    dispatch(convertFileStart());
    // socket.on('connect', async () => {
    const result = await convertFile(url);
    if (result.data) {
      setTimeout(async () => {
        const response = await fetchFile(result.data.uuid);
        dispatch(convertFileSuccess(response.data));
      }, 5000);
    }
    // });

    // socket.on('completed', async () => {
    //   const response = await fetchFile(result.data.uuid);
    // });
    // // const result = await convertFile(url);
    // // console.log(result);
    // if (result.data) {
    //   const response = await fetchFile(result.data.uuid);
    //   dispatch(convertFileSuccess(response.data));
    // }
  } catch (err: any) {
    message.error(err.toString());
    dispatch(convertFileFailure(err.response.data.toString()));
  }
};

// export const;
