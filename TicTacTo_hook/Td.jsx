import React, { memo,useCallback, useEffect, useRef } from 'react';
import { CLICK_CELL} from './TicTacTo';

const Td = memo(({rowIndex,cellIndex,dispatch,cellData})=>{
    Td.displayName = 'Td';
    
    console.log('TD :: render');
    let cell = useRef([]);

    useEffect(()=>{
        console.log(rowIndex === cell[0],cellIndex === cell[1],cellData === cell[2]);
        cell = [rowIndex,cellIndex,cellData];
    },[rowIndex,cellIndex,cellData])    

    
    const onClickTd = useCallback(()=>{
        // 재입력 무시
        if(cellData) return ;
        //
        console.log(rowIndex,cellIndex);
        dispatch({type:CLICK_CELL, row:rowIndex, cell:cellIndex})
    },[cellData])

    return(
        <td onClick={onClickTd}>{cellData}</td>
    )
});

export default Td;