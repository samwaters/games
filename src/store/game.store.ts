import { createAction, createSlice } from '@reduxjs/toolkit'
import {RootState} from "../store";

export interface GameState {
    height: number
    mines: number
    width: number
}

const initialState: GameState = {
    height: 10,
    mines: 10,
    width: 10
}

const gameSlice = createSlice({
    initialState,
    name: 'game',
    reducers: {
        create: (state) => { state.height = 10 }
    }
})

interface GameCreateAction {
    height: number
    mines: number
    width: number
}
export const gameCreateAction = createAction<GameCreateAction>("game/create")
export const gameGetConfig = (state: RootState) => state.game
export const { create } = gameSlice.actions
export default gameSlice.reducer
