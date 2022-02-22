import React,{useContext} from 'react';
import Td from './Td';
import { TableContext } from './MineFind';


const Tr = ({rowIndex})=>{
    const {tableData, dispatch} = useContext(TableContext);

    return (
        <tr>
            {
                Array(tableData[0].length).fill().map((td,i)=> <Td  key={i} rowIndex={rowIndex} cellIndex={i}/>)
            }
        </tr>
    )
}

export default Tr;
