import * as React from 'react'
import { Header } from 'components/Header/header'
import styled from "styled-components";
import {useSelector} from "react-redux";
import {gameGetConfig} from "store/game.store";

const S = {
    Container: styled.div<{width: number}>`
      border: 3px solid blue;
      border-radius: 5px;
      margin: 0 auto;
      width: ${props => `${props.width * 30 + 6}px`}
    `
}

export const Game = () => {
    const gameConfig = useSelector(gameGetConfig)
    return <S.Container width={gameConfig.width}>
        <Header />
    </S.Container>
}