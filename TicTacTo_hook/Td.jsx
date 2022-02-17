import React, { memo,useCallback } from 'react';
import { CLICK_CELL,CHANGE_TRUN} from './TicTacTo';

const Td = memo(({rowIndex,cellIndex,dispatch,cellData})=>{
    Td.displayName = 'Td';
    
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