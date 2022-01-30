import React, {Component} from 'react';
import ResponseResultComp from './ResponseResultComp';
import ResponseStateComp from './ResponseStateComp';

class ResponseCheck extends Component {
    state = {
        state : 'waiting',
        message : '클릭해서 시작하세요.',
        result : [],
    };
    changeState = (payload)=>{
        if(typeof payload === 'function'){
            this.setState((preState)=>{
                return payload(preState)
            })
        }else{
            this.setState({
                ...payload
            });
        }
    }
    resetResult = ()=>{
        this.setState({
            result : []
        })
    }
    
    render(){
        const {state, message, result} = this.state;
        return (
            <>
                <ResponseStateComp 
                    message={message}
                    state={state}
                    changeState={this.changeState}
                />
                <ResponseResultComp 
                    result={result} 
                    onReset={this.resetResult} 
                />
            </>
        )
    }
}

export default ResponseCheck;
/**
 * jsx에서
 *  for , if 쓸수 없다
 */     