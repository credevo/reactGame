import React, { memo, useState, useCallback, useReducer} from 'react';
import Table from './Table';

const initialState = {
    winner : '',
    turn : 'X',
    tableData : [['','','',],['','','',],['','','',]]
}

const SET_WINNER = 'SET_WINNER';

const reducer = (state, action)=>{
    switch(action.type){
        case SET_WINNER : // state.winner = action.winner; 이렇게 하면 안됨.
            return {
                ...state, // spread 문법 : 얇은 복사
                winner : action.winner
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
            <Table onClick={onClickTable} tableData={state.tableData} />
            {state.winner && <div>{state.winner} 님의 승리</div>}
        </>
    )
});

export default TicTacTo;