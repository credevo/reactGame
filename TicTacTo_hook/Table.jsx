import React , {memo, useState} from 'react';
import Tr from './Tr';

const Table = memo(({onClick, tableData})=>{
    Table.displayName = 'Table';

    return (
        <table onClick={onClick}>
            <tbody>
                {
                    Array(tableData.length).fill().map((el,index)=>{
                        return <Tr rowData={tableData[index]} key={index}/>
                    })
                }
            </tbody>
            
        </table>
    )

});

export default Table;