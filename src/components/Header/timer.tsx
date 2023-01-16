import * as React from 'react'
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {timerDisableAction, timerEnableAction, timerGetValue} from "store/timer.store";

const S = {
    TimerContainer: styled.div``,
    TimerDigit: styled.div``
}

export const Timer = () => {
    const dispatch = useDispatch()
    const timerValue = useSelector(timerGetValue)
    return <S.TimerContainer>
        {timerValue}
        <button onClick={() => dispatch(timerEnableAction())}>BANG</button>
        <button onClick={() => dispatch(timerDisableAction())}>BONG</button>
    </S.TimerContainer>
}