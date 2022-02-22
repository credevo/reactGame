import React,{ useContext } from 'react';
import Tr from './Tr';
import {TableContext} from './MineFind';


const Table = ()=>{
    const {tableData, dispatch} = useContext(TableContext);
    return(
        <table>
            <tbody>
                { 
                    Array(tableData.length).fill().map((tr,i)=> <Tr key={i} rowIndex={i}/>)
                }
            </tbody>
        </table>
    )
}

export default Table;
