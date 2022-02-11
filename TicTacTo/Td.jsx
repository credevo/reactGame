import React, { PureComponent } from 'react';

class Td extends PureComponent{
    render(){
        const {rowIndex,cellIndex} = this.props;
        return(
            <td>
                {rowIndex} , {cellIndex}
            </td>
        )
    }
}

export default Td;