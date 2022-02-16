import React , {memo, useState} from 'react';
import Tr from './Tr';

const Table = memo(({onClick, tableData,dispatch})=>{
    Table.displayName = 'Table';

    return (
        <table>
            <tbody>
                {
                    Array(tableData.length).fill().map((el,index)=>{
                        return <Tr rowData={tableData[index]} key={index} rowIndex={index} dispatch={dispatch}/>
                    })
                }
            </tbody>
            
        </table>
    )

});

export default Table;