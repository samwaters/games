import { all, put } from '@redux-saga/core/effects'

import { bootstrapAction, ready } from 'store/bootstrap.store'
import { bootstrapSaga } from './bootstrap.saga'
import { loggerSaga } from "sagas/logger.saga";
import { timerSaga } from "sagas/timer.saga";

function * rootSaga() {
    yield all([
        bootstrapSaga(),
        loggerSaga(),
        timerSaga(),
        put(bootstrapAction()),
        put(ready())
    ])
}

export { rootSaga }
