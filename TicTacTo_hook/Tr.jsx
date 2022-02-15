import React, { memo } from 'react'
import Td from './Td';

const Tr = ({rowData})=>{
    Tr.displayName = 'Tr';
    return (
        <tr>        
            {
                Array(rowData.length).fill().map((r,i)=>{
                    return (<Td key={i} cellData={rowData[i]}></Td>)
                })
            }
        </tr>
    )
}

export default Tr;