import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'
import logger from 'redux-logger'
import bootstrapReducer from 'store/bootstrap.store'
import gameReducer from 'store/game.store'
import timerReducer from 'store/timer.store'
export const sagaMiddleware = createSagaMiddleware()


export const store = configureStore({
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        thunk: false
    }).concat(sagaMiddleware, logger),
    reducer: {
        bootstrap: bootstrapReducer,
        game: gameReducer,
        timer: timerReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
