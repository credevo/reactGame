import React,{ createContext, useReducer,useMemo, useCallback } from 'react';
import Table from './Table';
import Form from './Form';

export const START_GAME = 'START_GAME';

export const TableContext = createContext({
    tableData : [],
    dispatch : ()=>{}
});//기본값});

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

const initialState = {
    tableData : [],
    timer : 0,
    result : '',
}

const reducer = (state,action)=>{
    switch (action.type){
        case START_GAME : return {
            ...state,
            tableData : plantMine(action.row, action.cell, action.mine)
        }
        default : 
            return state;
    }
}

const MineFind = ()=>{
    const [state, dispatch]= useReducer(reducer, initialState);
    // tableData가 변경될때 value 변수에 캐싱하여 사용한다.=> 그것을 contextApi 적용
    const value = useMemo(()=>({ tableData : state.tableData, dispatch }),[state.tableData]);
    return (
        <TableContext.Provider value={value}>  
            <div><span>timer : </span>{state.timer}</div>
            <div><span>result : </span>{state.result}</div>
            <div>------------------------------------------------------------------------------------</div>
            <Form></Form>
            <div>------------------------------------------------------------------------------------</div>
            <Table />
        </TableContext.Provider>        
    )
}

export default MineFind;
