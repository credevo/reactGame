import React, { memo } from 'react'
import Td from './Td';

const Tr = memo(({rowData,rowIndex,dispatch})=>{
    Tr.displayName = 'Tr';
    console.log('TR :: render');
    return (
        <tr>        
            {
                Array(rowData.length).fill().map((td,i)=>{
                    return (<Td key={i} rowIndex={rowIndex} cellData={rowData[i]} cellIndex={i} dispatch={dispatch} />)
                })
            }
        </tr>
    )
});

export default Tr;