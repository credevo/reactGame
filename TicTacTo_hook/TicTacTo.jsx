import React, { memo, useState, useCallback, useReducer} from 'react';
import Table from './Table';

const initialState = {
    winner : '',
    turn : 'X',
    tableData : [
        ['','','',],
        ['','','',],
        ['','','',]
    ]
}

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TRUN = 'CHANGE_TRUN';

const reducer = (state, action)=>{
    switch(action.type){
        case SET_WINNER : // state.winner = action.winner; 이렇게 하면 안됨.
            return {
                ...state, // spread 문법 : 얇은 복사
                winner : action.winner
            }
        case CLICK_CELL : {
            const tableData = [...state.tableData];
            tableData[action.row] = [...tableData[action.row]];
            tableData[action.row][action.cell] = state.turn; //immer 라는 라이브러리로 가독성 해결
                return {
                    ...state,
                    tableData,
                }
            }
        case CHANGE_TRUN : {
            return {
                ...state,
                turn : state.turn == 'O' ? 'X' : 'O'    
            }
        }

    }
}

const TicTacTo = memo(()=>{
    TicTacTo.displayName = 'TicTacTo';
    
    const [state, dispatch]  = useReducer(reducer, initialState);
    
    const onClickTable = useCallback(()=>{
        dispatch({type : SET_WINNER, winner : 'O'}); // dispatch(action)형태 //action의 이름은 대문자가 거의 규칙
    },[]);

    return (
        <>
            <Table onClick={onClickTable} tableData={state.tableData} dispatch={dispatch}/>
            {state.winner && <div>{state.winner} 님의 승리</div>}
        </>
    )
});

export default TicTacTo;