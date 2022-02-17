import React, { memo, useState, useCallback, useReducer, useEffect} from 'react';
import Table from './Table';

const initialState = {
    winner : '',
    turn : 'O',
    tableData : [
        ['','','',],
        ['','','',],
        ['','','',]
    ],
    recentCell : [-1,-1]
}

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TRUN = 'CHANGE_TRUN';
export const RESET_GAME = 'RESET_GAME';


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
                    recentCell : [action.row, action.cell]
                }
            }
        case CHANGE_TRUN : {
            return {
                ...state,
                turn : state.turn == 'O' ? 'X' : 'O'    
            }
        }
        case RESET_GAME : {
            return {
                ...state,
                turn : 'X',
                tableData : [
                    ['','','',],
                    ['','','',],
                    ['','','',]
                ],
                recentCell : [-1,-1]
            }
        }
    }
}

const TicTacTo = ()=>{
    TicTacTo.displayName = 'TicTacTo';
    
    const [state, dispatch]  = useReducer(reducer, initialState);
    const {tableData, turn, recentCell } = state;

    useEffect(()=>{
        const [row, cell] = recentCell;
        if(row < 0) return; //최초 작동 방지

        let win = false; //default win condition\
        // win check logic
        if(tableData[row][0]=== turn  && tableData[row][1] === turn && tableData[row][2] === turn) win = true;
        if(tableData[0][cell] === turn && tableData[1][cell] === turn && tableData[2][cell] === turn)  win = true;
        if(tableData[0][0] === turn && tableData[1][1] === turn && tableData[2][2] === turn) win= true;
        if(tableData[0][2] === turn && tableData[1][1] === turn && tableData[2][0] === turn) win= true;

        //if win?
        if(win){
            dispatch({type:SET_WINNER, winner:turn});
            dispatch({type:RESET_GAME});
        }else{
            // 게임 진행중 파악
            let all = true;
            tableData.forEach((row)=> {
                row.forEach((cell)=> {     
                    if(!cell){
                        all = false;
                    }
                });
            });
            // 계임 상태 파악
            if(!all){
                //계속 지속
                dispatch({type:CHANGE_TRUN});
            }else{
                //무승부
                dispatch({type:RESET_GAME});
            }

            
        }
        
        




    },[tableData])


    const onClickTable = useCallback(()=>{
        dispatch({type : SET_WINNER, winner : 'O'}); // dispatch(action)형태 //action의 이름은 대문자가 거의 규칙
        




    },[]);

    return (
        <>
            <Table onClick={onClickTable} tableData={state.tableData} dispatch={dispatch}/>
            {state.winner && <div>{state.winner} 님의 승리</div>}
        </>
    )
};

export default TicTacTo;