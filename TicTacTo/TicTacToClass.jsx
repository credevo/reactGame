import React, { Component } from 'react';
import Tr from './Tr';

class TicTacTo extends Component{
    state = {
        rowCount  : 3
    }
    
    render(){
        const {rowCount} = this.state;
        return (
            <table>
                <tbody>
                {
                    Array(rowCount).fill(0).map((row,i)=>{
                        return <Tr rowIndex={i} key={i}/>
                    })
                }
                </tbody>
                
            </table>
        )
    }
}

export default TicTacTo;