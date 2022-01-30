import React, {Component} from 'react';

class ResponseCheck extends Component {
    state = {
        state : 'waiting',
        message : '클릭해서 시작하세요.',
        result : [],
    };
    timeoutId;
    startTime;
    endTime;
    onClickScreen = (e)=>{
        const {state, message, result} = this.state;
        if(state == 'waiting'){
            this.setState({
                state : 'ready',
                message : '초록색이 되면 클릭하세요.',
            });
            this.timeoutId = setTimeout(()=>{
                this.setState({
                    state : 'now',
                    message : '지금 클릭',
                });
                this.startTime = new Date();  //rendering이 일어나지 않도록 state로 선언하지 않음;
            },Math.floor(Math.random()*1000)+2000); //2~3초 랜덤
        }else if(state === 'ready'){ // 성급하게 클릭
            clearTimeout(this.timeoutId);
            this.setState({
                state : 'waiting',
                message : '성급하셨군요, 초록색이 된후 클릭하세요'
            });
        }else if(state === 'now'){ // 반응속도 체크
            this.endTime = new Date();
            this.setState((prevState)=>{
                return {
                    state : 'waiting',
                    message : '클릭해서 시작하세요.',
                    result : [...prevState.result, this.endTime-this.startTime]
                }
            });
        }
    }
    shouldComponentUpdate(nextProps, nextState){
        return this.state.state !== nextState.state;
    }
    onReset = ()=>{
        this.setState({
            result : []
        })
    }
    renderAverage = ()=>{
        return this.state.result.length === 0 
        ? null  
        : (
            <div>
                <span>평균 시간 : { this.state.result.reduce((a,c)=>a+c) / this.state.result.length} ms</span>
                <button onClick={this.onReset}>Reset</button>
            </div>
            
            )

    }
    renderTimes = ()=>{
        if(this.state.result.length){
            return (
                <div>기존 times : 
                    <span>{this.state.result.map(e=>e +',')}</span>
                </div>
            )
        }
    }
    render(){
        const {state, message} = this.state;
        return (
            <>
                <div id="screen" className={this.state.state} onClick={this.onClickScreen}>
                    <div>
                        {this.state.message}
                    </div>
                </div>
                {
                    this.renderAverage()
                }
                {
                    this.renderTimes()
                }
            </>
        )
    }
}

export default ResponseCheck;
/**
 * jsx에서
 *  for , if 쓸수 없다
 */