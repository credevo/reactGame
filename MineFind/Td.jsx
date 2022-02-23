import React,{ useCallback, useContext } from 'react';
import { TableContext,CODE, OPEN_CELL, CLICK_MINE, FLAG_CELL, QUESTION_CELL, NORMALIZE_CELL} from './MineFind';


const getTdStyle = (code) => {
    switch (code){
        case CODE.MINE : 
        case CODE.NORMAL : 
            return {
                backgroundColor : '#999'
            }
        case CODE.FLAG :
        case CODE.FLAG_MINE :
            return {
                backgroundColor : 'red'
            }
        case CODE.QUESTION :
        case CODE.QUESTION_MINE:
            return {
                backgroundColor : 'yellow'
            }
        case CODE.OPEND : 
        default : 
            return {
                backgroundColor : 'white'
            }
    }
}
const getTdText = (code) =>{
    switch(code){
        case CODE.NORMAL : return '';
        case CODE.MINE : return 'X';
        case CODE.CLICKED_MINE : return '펑';
        case CODE.QUESTION :
        case CODE.QUESTION_MINE :
            return '?';
        case CODE.FLAG :
        case CODE.FLAG_MINE : 
            return '!';
        default : return code || '';

    }
}

const Td = ({rowIndex,cellIndex})=>{
    //
    const {tableData,halted, dispatch} = useContext(TableContext);
    //
    const onClickTd = useCallback((e)=>{
        if(halted) return;
        switch(tableData[rowIndex][cellIndex]){
            case CODE.OPEND : 
            case CODE.QUESTION : 
            case CODE.QUESTION_MINE : 
            case CODE.FLAG : 
            case CODE.FLAG_MINE : 
            case CODE.CLICKED_MINE :
                return;
            case CODE.MINE : 
                return dispatch({type:CLICK_MINE, row:rowIndex, cell: cellIndex});
            default : 
                return dispatch({type:OPEN_CELL, row: rowIndex, cell:cellIndex });
        }
    });
    const onRightClickTd = useCallback((e)=>{
        if(halted) return;
        e.preventDefault();
        switch(tableData[rowIndex][cellIndex]){
            case CODE.NORMAL :
            case CODE.MINE:
                return dispatch({type:FLAG_CELL, row:rowIndex, cell:cellIndex});
            case CODE.FLAG : 
            case CODE.FLAG_MINE:
                return dispatch({type:QUESTION_CELL, row:rowIndex, cell:cellIndex});
            case CODE.QUESTION:
            case CODE.QUESTION_MINE:
                return dispatch({type:NORMALIZE_CELL, row:rowIndex, cell: cellIndex});
            default : 
                return;
        }
    });

    return (
        <td onClick={onClickTd} onContextMenu={onRightClickTd} style={getTdStyle(tableData[rowIndex][cellIndex])}>{getTdText(tableData[rowIndex][cellIndex])}</td>
    )
}

export default Td;
