import {takeEvery,put,delay} from  "redux-saga/effects";

function* incCount(){
    yield delay(4000);
    console.log('Async Saga Called')
    yield put({type:'COUNT_INCREMENT_ASYNC',value:1})
}
export function* watchCountInc(){
    console.log('Saga Called');
    yield takeEvery("COUNTER_INCREMENT",incCount)
}
