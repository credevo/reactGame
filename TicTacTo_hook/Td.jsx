import React, { memo } from 'react';

const Td = memo((props)=>{
    const {rowIndex,cellIndex} = props;
    return(
        <td>
            {rowIndex} , {cellIndex}
        </td>
    )
});

export default Td;