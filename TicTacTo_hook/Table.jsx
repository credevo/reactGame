import React , {memo, useState} from 'react';
import Tr from './Tr';

const TableComp = memo(()=>{
    const [rowCount, setRowCount] = useState(3);
    return (
        <table>
            <tbody>
                {
                    Array(3).fill().map((e,i)=> {
                        return <Tr rowIndex={i} key={i} />
                    })
                }
            </tbody>
        </table>
    )

});
export default TableComp;