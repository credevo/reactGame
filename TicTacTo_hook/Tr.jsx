import React, { memo } from 'react'
import Td from './Td';

const Tr = memo((props)=>{
    const rowIndex = props.rowIndex;
    return (
        <tr>        
            {
                Array(3).fill(0).map((el,i) => {
                    return <Td key={i} rowIndex={rowIndex} cellIndex={i} />
                })
            }
        </tr>
    )
})

export default Tr;