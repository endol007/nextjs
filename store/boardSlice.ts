import { createSlice } from '@reduxjs/toolkit';

interface boardType {
    id: number;
    name: string;
    title: string;
    comment: string;
}

interface boardState {
    loading: boolean,
    data: boardType[]
    error: any;
}

const initialState: boardState = {
  loading: false,
  data: [],
  error: null,
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    getBoards: (state) => {
      state.loading = true;
    },
    getBoardsSuccess: (state, { payload }) => {
      state.data = payload;
      state.loading = false;
    },
    getBoardsError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    createBoards: (state, payload) => {
      state.loading = true;
    },
    createBoardsSuccess: (state, { payload }) => {
      state.data = [...state.data, payload];
      state.loading = false;
    },
    createBoardsError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    deleteBoard: (state, payload) => {
      state.loading = true;
    },
    deleteBoardSuccess: (state, {payload}) => {
      const index = state.data.findIndex((p) => p.id === payload);
      state.data.splice(index, 1);
      state.loading = false;
    },
    deleteBoardError: (state, payload) => {
      state.loading = false;
    },
    updateBoard: (state, payload) => {
      state.loading = true;
    },
    updateBoardSuccess: (state, {payload}) => {
      const index = state.data.findIndex((p) => p.id === payload.id);
      state.data[index] = payload;
      state.loading = false;
    },
    updateBoardError: (state, payload) => {
      state.loading = false;
    },
  },
});

export const boardDataActions = boardSlice.actions;
export default boardSlice;
