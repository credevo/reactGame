import React,{ useCallback, useState, useContext } from 'react';
import { START_GAME} from './MineFind';
import { TableContext } from './MineFind';

const buttonStyle = {
    borderRadius:'15px', 
    backgroundColor:'#c0c0fb',
    color:'white',
    fontWeight:'bold',
    height: '50px',
    width:'100%',
    margin : '5px'

}

const Form = ()=>{
    const [row, setRow] = useState(10);
    const [cell, setCell] = useState(10);
    const [mine, setMine] = useState(10);
    
    const {tableData, dispatch} = useContext(TableContext);
    const changeRow = useCallback((e)=>{
        setRow(e.target.value);
    });
    const changeCell = useCallback((e)=>{
        setCell(e.target.value);
    });
    const changeMine = useCallback((e)=>{
        setMine(e.target.value);
    });

    const onClickBtn = (e)=>{
        e.preventDefault();
        console.log('createTable : start');
        dispatch({type:START_GAME, row,cell, mine})
    };
    // },[row,cell,mine]);
    
    return (
        <>
            <form>
                <div>
                    <span>row : </span> <input type="text" value={row}  onChange={changeRow}/>
                    <span>cell : </span> <input type="text" value={cell} onChange={changeCell}/>
                    <span>mine : </span> <input type="text" value={mine} onChange={changeMine}/>
                </div>
                <div><button style={buttonStyle} onClick={onClickBtn}>시작</button></div>
            </form>
        </>
    )
}

export default Form;
