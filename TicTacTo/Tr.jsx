import React, { PureComponent } from 'react'
import Td from './Td';

class Tr extends PureComponent {
    render(){
        const {rowIndex} =  this.props;
        return (
            <tr>
                
                {
                    Array(3).fill().map((el,cellIndex) => <Td key={cellIndex} rowIndex={rowIndex} cellIndex={cellIndex} />)
                }
            </tr>
        )
    }
}

export default Tr;