import React, { memo } from 'react';

const Td = memo(({cellData})=>{
    Td.displayName = 'Td';
    return(
        <td>{cellData}</td>
    )
});

export default Td;