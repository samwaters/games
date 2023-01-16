import { createAction, createSlice } from '@reduxjs/toolkit'
import {RootState} from "../store";

export interface TimerState {
    enabled: boolean
    value: number
}

const initialState: TimerState = {
    enabled: false,
    value: 0
}

const timerSlice = createSlice({
    initialState,
    name: 'timer',
    reducers: {
        disable: (state) => { state.enabled = false },
        enable: (state) => { state.enabled = true },
        increment: (state) => { state.value++ },
        reset: (state) => { state.value = 0 },
    }
})

export const timerDisableAction = createAction("timer/disable")
export const timerEnableAction = createAction("timer/enable")
export const timerIncrementAction = createAction("timer/increment")
export const timerResetAction = createAction("timer/reset")
export const { disable, enable, increment, reset } = timerSlice.actions
export const timerGetEnabled = (state: RootState) => state.timer.enabled
export const timerGetValue = (state: RootState) => state.timer.value
export default timerSlice.reducer
