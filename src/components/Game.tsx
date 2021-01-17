import * as React from 'react';
import {BoardState, useGameState, Value} from "./GameState";
import {Button, Column, Main, Row, StyledSquare} from "./GameStyled";

export type LayoutProps = {
    gap: number
}

type BoardProps = {
    board: BoardState,
    onClick: (square: number) => void
}

type SquareProps = {
    value: Value,
    onClick: () => void
}

type LogProps = {
    startNew: () => void
}


const Board = ({board, onClick}: BoardProps) => {
    const createProps = (square: number): SquareProps => {
        return {
            value: board[square],
            onClick: () => onClick(square)
        }
    };
    return (
        <Column gap={0}>
            <Row gap={0}>
                <Square {...createProps(0)} />
                <Square {...createProps(1)} />
                <Square {...createProps(2)} />
            </Row>
            <Row gap={0}>
                <Square {...createProps(3)} />
                <Square {...createProps(4)} />
                <Square {...createProps(5)} />
            </Row>
            <Row gap={0}>
                <Square {...createProps(6)} />
                <Square {...createProps(7)} />
                <Square {...createProps(8)} />
            </Row>
        </Column>
    )
}

const Log = ({startNew}: LogProps) => <Button onClick={startNew}> Почати нову гру </Button>;

const Square = ({onClick, value}: SquareProps) => <StyledSquare onClick={onClick}>{value}</StyledSquare>

export const Game = () => {

    const {
        current,
        xIsNext,
        winner,
        handleClick,
        startNew
    } = useGameState();

    return (
        <Main>
            <Row gap={20}>
                <Column gap={20}>
                    <div>{winner ?  (winner.length > 1) ? 'Нічия' :`Переміг ${winner}` : `Хід гравця ${xIsNext ? 'X' : 'O'}` }</div>
                    <Board board={current} onClick={handleClick} />
                </Column>

            </Row>
            <Log startNew={startNew} />
        </Main>
    );
}


