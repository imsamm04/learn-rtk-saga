import { PayloadAction } from "@reduxjs/toolkit";
import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import { increment, incrementSaga, incrementSagaSuccess } from "./counterSlice";

// export function* log(action: PayloadAction) {
//     console.log(action);
    
// }

function* handleIncrementSaga(action : PayloadAction<Number>) {
    console.log('waiting 2s');
    //wait 2s
    yield delay(2000)
    //Dispatch action success
    console.log('waiting done, dispatch action');

    // yield put(incrementSagaSuccess(action.payload));
}

export default function* counterSaga() {
    console.log('counterSaga');

    yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
    // yield takeLatest(incrementSaga.toString(), handleIncrementSaga)
}