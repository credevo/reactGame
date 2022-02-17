import React, { memo,useCallback, useEffect, useRef } from 'react';
import { CLICK_CELL} from './TicTacTo';

const Td = ({rowIndex,cellIndex,dispatch,cellData})=>{
    Td.displayName = 'Td';
    
    console.log('TD :: render');
    
    // const ref = useRef([]);
    // useEffect(()=>{
    //     console.log(rowIndex === ref.current[0],cellIndex === ref.current[1],cellData === ref.current[2]);
    //     ref.current = [rowIndex,cellIndex,cellData];
    // },[rowIndex,cellIndex,cellData])    

    
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
};

export default Td;


