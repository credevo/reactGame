import React,{ createContext, useReducer,useMemo, useCallback } from 'react';
import Table from './Table';
import Form from './Form';

export const START_GAME = 'START_GAME';
export const OPEN_CELL = 'OPEN_CELL';
export const FLAG_CELL = 'FLAG_CELL';
export const QUESTION_CELL = 'QUESTION_CELL';
export const NORMALIZE_CELL = 'NORMALIZE_CELL';
export const CLICK_MINE = 'CLICK_MINE';

// 칸의 상태 CODE 값
export const CODE = {
    MINE : -7,
    NORMAL : -1,
    QUESTION : -2,
    FLAG : -3,
    QUESTION_MINE : -4,
    FLAG_MINE : -5,
    CLICKED_MINE : -6,
    OPEND : 0, //0 이상이면 다 OPEND로 하고, 
    //주변 마인 갯수에 따라 카운되는 숫자가 나타난다.
}
// context created(초기값들)
export const TableContext = createContext({
    tableData : [],
    dispatch : ()=>{},
    halted : true,
});//기본값});

// context created(useReducer 초기값 state)
const initialState = {
    tableData : [],
    timer : 0,
    result : '',
    halted : false,
}

const plantMine  = (row,cell,mine)=>{
    const candidate= Array(row*cell).fill().map((arr,i)=>{
        return i;
    });
    const shuffle = [];
    while(candidate.length > row * cell - mine){
        const chosen = candidate.splice(Math.floor(Math.random()*candidate.length),1)[0];
        shuffle.push(chosen);
    }
    // create tableData : 2차원 배열형태
    const data = [];
    for(let i=0; i < row; i++){
        const rowData = [];
        for(let j=0; j < cell; j++){
            rowData.push(CODE.NORMAL);
        }
        data.push(rowData);
    }
    // table데이타에 지뢰 심기
    for(let k=0; k < shuffle.length; k++){
        var ver = Math.floor(shuffle[k]/cell);
        var hor = shuffle[k]%cell ;
        data[ver][hor] = CODE.MINE;
    }
    // console.log 지뢰
    console.log('plantMine:',data); 
    return data;
}

const reducer = (state,action)=>{
    const tableData = [...state.tableData];
    switch (action.type){
        case START_GAME : 
            return {
                ...state,
                tableData : plantMine(action.row, action.cell, action.mine)
            }
        case OPEN_CELL :
            tableData[action.row][action.cell] = CODE.OPEND;
            return {
                ...state,tableData
            }
        case CLICK_MINE : 
            tableData[action.row] = [...state.tableData[action.row]];
            tableData[action.row][action.cell] = CODE.CLICKED_MINE;
            return {
                ...state,tableData, halted : true,
            }
        case FLAG_CELL : 
            tableData[action.row] = [...state.tableData[action.row]];
            if(tableData[action.row][action.cell] === CODE.MINE){
                tableData[action.row][action.cell] = CODE.FLAG_MINE;
            }else{
                tableData[action.row][action.cell] = CODE.FLAG;
            }
            return {
                ...state,tableData
            }
        case QUESTION_CELL :
            tableData[action.row] = [...state.tableData[action.row]];
            if(tableData[action.row][action.cell] === CODE.FLAG_MINE){
                tableData[action.row][action.cell] = CODE.QUESTION_MINE;
            }else{
                tableData[action.row][action.cell] = CODE.QUESTION;
            }
            return {
                ...state,tableData
            }
        case NORMALIZE_CELL : 
            tableData[action.row] = [...state.tableData[action.row]];
            if(tableData[action.row][action.cell] === CODE.QUESTION_MINE ){
                tableData[action.row][action.cell] = CODE.MINE;
            }else{
                tableData[action.row][action.cell] = CODE.NORMAL;
            }
            return {
                ...state,tableData
            }
        default : 
            return state;
    }
}

const MineFind = ()=>{
    const [state, dispatch]= useReducer(reducer, initialState);
    // tableData가 변경될때 value 변수에 캐싱하여 사용한다.=> 그것을 contextApi 적용
    const {tableData, halted, timer, result} = state;
    const value = useMemo(()=>{
        return {tableData, halted, dispatch};
    }, [tableData, halted]);
    //
    return (
        <TableContext.Provider value={value}>  
            <div><span>timer : </span>{timer}</div>
            <div><span>result : </span>{result}</div>
            <div>------------------------------------------------------------------------------------</div>
            <Form></Form>
            <div>------------------------------------------------------------------------------------</div>
            <Table />
        </TableContext.Provider>        
    )
}

export default MineFind;
