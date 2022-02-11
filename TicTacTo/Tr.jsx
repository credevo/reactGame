import React, { Component } from 'react'
import Td from './Td';

class Tr extends Component {
    render(){
        const {rowIndex} =  this.props;
        return (
            <tr>        
                {
                    Array(3).fill(0).map((el,i) => {
                        return <Td key={i} rowIndex={rowIndex} cellIndex={i} />
                    })
                }
            </tr>
        )
    }
}

export default Tr;