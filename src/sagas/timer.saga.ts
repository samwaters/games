import { put, takeEvery } from '@redux-saga/core/effects'

import { timerDisableAction, timerEnableAction, timerIncrementAction } from 'store/timer.store'
import { EventChannel, eventChannel } from "redux-saga";

let timerRef: EventChannel<{}> = null

function * disableTimer() {
    timerRef.close()
}

function getTimer() {
    return eventChannel(emitter => {
            const iv = setInterval(() => {
                emitter({})
            }, 1000);
            // The subscriber must return an unsubscribe function
            return () => {
                clearInterval(iv)
            }
        }
    )
}

function * enableTimer() {
    console.log("ET")
    timerRef = getTimer()
    console.log("ET2")
    yield takeEvery(timerRef, incrementTimer)
}

function * incrementTimer() {
    yield put(timerIncrementAction())
    console.log("IT")
}

export function * timerSaga() {
    yield takeEvery(timerDisableAction, disableTimer)
    yield takeEvery(timerEnableAction, enableTimer)
}
