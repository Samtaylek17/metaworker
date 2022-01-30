import { createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';
import { convertFile, fetchFile, getAllFiles } from '../api/endpoints';

interface FormatState {
  filename: string;
  nb_streams: number;
  nb_programs: number;
  format_name: string;
  format_long_name: string;
  start_time: string;
  duration: string;
  probe_score: number;
  tags: any;
}

interface FileInitialState {
  currentFile: any;
  streams: any | null;
  format: Record<string, any> | null;
  fileList: any[];
  isLoading: boolean;
  error: Record<string, any> | null;
}

const fileInitialState = {
  currentFile: {},
  fileList: [],
  isLoading: false,
  error: null,
  streams: [],
  format: {} as FormatState,
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
      state.streams = payload.data.result.streams;
      state.format = payload.data.result.format;
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
    dispatch(convertFileStart());
    const result = await convertFile(url);
    if (result.data) {
      setTimeout(async () => {
        const response = await fetchFile(result.data.uuid);
        dispatch(convertFileSuccess(response.data));
      }, 5000);
    }
  } catch (error: any) {
    message.error(error.toString());
    dispatch(convertFileFailure(error.response.data.toString()));
  }
};

export const getCurrentFile = (uuid: string) => async (dispatch: (arg: IAction) => void) => {
  try {
    dispatch(getFileStart());

    const file = await fetchFile(uuid);
    dispatch(getFileSuccess(file.data));
  } catch (error: any) {
    message.error(error.toString());
    dispatch(getFileFailure(error.response.data.toString()));
  }
};

export const getTotalFiles = () => async (dispatch: (arg: IAction) => void) => {
  try {
    dispatch(getFilesStart());

    const response = await getAllFiles();
    console.log(response);

    dispatch(getFilesSuccess(response.data));
  } catch (error: any) {
    message.error(error.toString());
    dispatch(getFilesFailure(error.response.data.toString()));
  }
};
