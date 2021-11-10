import { takeLatest, all, put } from 'redux-saga/effects';
import { boardDataActions } from '../store/boardSlice';
import { getData, postData, deleteData, updateData } from './boardApi';

interface createBoardType {
    type: string;
    payload:{
        id: number;
        name: string;
        title: string;
        comment: string;
    }
}
interface getBoardType {
    id: number;
    name: string;
    title: string;
    comment: string;
}

function* getBoards() {
  try {
    const data: getBoardType[] = yield getData();
    yield put(boardDataActions.getBoardsSuccess(data));
  } catch (err) {
    yield put(boardDataActions.getBoardsError(err));
  }
}

function* createBoards(board: createBoardType) {
  try {
    const response: getBoardType = yield postData(board.payload);
    yield put(boardDataActions.createBoardsSuccess(response));
  } catch (err) {
    yield put(boardDataActions.createBoardsError(err));
  }
}

function* deleteBoard(data: {type: string, payload: number}) {
  try{
    yield deleteData(data.payload);
    yield put(boardDataActions.deleteBoardSuccess(data.payload));
  } catch(err){
    yield put(boardDataActions.deleteBoardError(err));
  }
}

function* updateBoard(data: createBoardType) {
  try {
    const response: getBoardType = yield updateData(data.payload);
    yield put(boardDataActions.updateBoardSuccess(response));
  } catch (err) {
    yield put(boardDataActions.updateBoardError(err));
  }
}

function* watchgetBoards() {
  yield takeLatest(boardDataActions.getBoards, getBoards);
}

function* watchcreateBoards() {
  yield takeLatest<createBoardType>(boardDataActions.createBoards, createBoards);
}

function* watchDeleteBoard() {
  yield takeLatest<any>(boardDataActions.deleteBoard, deleteBoard);
}

function* watchUpdateBoard() {
  yield takeLatest<createBoardType>(boardDataActions.updateBoard, updateBoard);
}

export function* rootSaga() {
    yield all([watchgetBoards(), watchcreateBoards(), watchDeleteBoard(), watchUpdateBoard()]);
}