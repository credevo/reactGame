import React , {Component} from 'react';
import Tr from './Tr';

class TableComp extends Component {
    state = {
        rowCount : 3
    }

    render(){
        const {rowCount}  = this.state;
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
    }
}

export default TableComp;