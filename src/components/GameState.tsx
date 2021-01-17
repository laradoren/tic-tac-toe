import {useState} from "react";

export type Value = 'X' | 'O' | null;
export type BoardState = Value[];
export type GameState = {
    history: BoardState[],
    step: number
};

const createBoardState = () => Array<Value>(9).fill(null);
const isBoardFull = (board: BoardState) => board.filter(b => !b);

const calculateWinner = (boardState: BoardState) => {
    const  winningCombination = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winningCombination.length; i++) {
        const [a, b, c] = winningCombination[i];
        if(boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) return boardState[a];
    }

    if(isBoardFull(boardState).length == 0) return 'Нічия';

    return  null;
};

export const useGameState = () => {
    const [gameState, setGameState] = useState<GameState>({
        history: [createBoardState()],
        step: 0,
    });

    const current = gameState.history[gameState.step];
    const xIsNext= (gameState.step % 2) === 0;
    const winner = calculateWinner(current);

    const  handleClick = (square: number) => {
        const history = gameState.history.slice(0, gameState.step + 1);
        const boardState = history[history.length - 1];
        if(calculateWinner(boardState) || boardState[square]) return;
        const newBoardState = boardState.slice();
        newBoardState[square] = xIsNext ? 'X' : 'O';
        history.push(newBoardState);
        setGameState({
            history: history,
            step: history.length - 1,
        });
    }
    const startNew = () => {
        setGameState({
            history: gameState.history,
            step: 0
        });
    }

    return {
        current,
        xIsNext,
        winner,
        handleClick,
        startNew
    };
}