import React, { Component } from 'react';
import TableComp from './TableComp';

class TicTacTo extends Component{
    state = {
        result : '님이 이겼습니다.',
        winner : ''
    }
    
    render(){
        const {result,winner} = this.state;
        return (
            <>
                <TableComp />
                <div>{winner + ' ' + result}</div>
            </>
        )
    }
}

export default TicTacTo;