import React, {Component} from 'react';

class ResponseCheck extends Component {
    state = {
        state  : {
            count : 0,
        }
    }

    render(){
        return (
            <div>
                반갑다 {this.state.state.count}
            </div>
        )
    }
}

export default ResponseCheck;