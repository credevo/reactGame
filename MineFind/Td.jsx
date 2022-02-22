import React,{ useContext } from 'react';
import { TableContext,CODE } from './MineFind';


const getTdStyle = (code) => {
    switch (code){
        case CODE.MINE : 
        case CODE.NORMAL : 
            return {
                backgroundColor : '#999'
            }
        case CODE.OPEND : 
        default : 
            return {
                backgroundColor : 'white'
            }
    }
}
const getTdText = (code) =>{
    switch(code){
        case CODE.NORMAL : return '';
        case CODE.MINE : return 'X';
        default : return '';

    }
}

const Td = ({rowIndex,cellIndex})=>{
    const {tableData} = useContext(TableContext);
    const tdCode = tableData[rowIndex][cellIndex];
    return (
        <td style={getTdStyle(tdCode)}>{getTdText(tdCode)}</td>
    )
}

export default Td;
