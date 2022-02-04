import React, {Component} from 'react';

class Lotto extends Component{
    state = {
        data : 1,
    }
    render = ()=>{
        return (
            <>
                <div>{this.state.data}</div>
            </>
        )
    }
}

export default Lotto;