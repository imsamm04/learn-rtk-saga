import counterSaga from 'features/counter/counterSaga';
import {all} from 'redux-saga/effects';

function* helloSaga() {
    console.log('hello saga');
    
}

export default function* rootSaga(){
    console.log('rootSaga');
    yield all([helloSaga(), counterSaga()]);
}