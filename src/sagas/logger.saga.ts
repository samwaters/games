import { takeEvery } from "@redux-saga/core/effects";
import { logAction } from "store/logger.store";
import { logEvent } from "firebase/analytics";
import { firebaseAnalytics } from "../firebase";

function * logger(action: ReturnType<typeof logAction>) {
    logEvent(firebaseAnalytics, action.payload)
}

export function * loggerSaga() {
    yield takeEvery(logAction, logger)
}