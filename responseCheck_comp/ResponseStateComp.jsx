import React , {Component} from 'react';

export default class ResponseStateComp extends Component {
    onClickScreen = ()=> this.props.onClickScreen();
    onClickScreen = (e)=>{
        const {state, message} = this.props;
        if(state == 'waiting'){
            this.props.changeState({
                state : 'ready',
                message : '초록색이 되면 클릭하세요.',
            });
            this.timeoutId = setTimeout(()=>{
                this.props.changeState({
                    state : 'now',
                    message : '지금 클릭',
                });
                this.startTime = new Date();  //rendering이 일어나지 않도록 state로 선언하지 않음;
            },Math.floor(Math.random()*1000)+2000); //2~3초 랜덤
        }else if(state === 'ready'){ // 성급하게 클릭
            clearTimeout(this.timeoutId);
            this.props.changeState({
                state : 'waiting',
                message : '성급하셨군요, 초록색이 된후 클릭하세요'
            });
        }else if(state === 'now'){ // 반응속도 체크
            this.endTime = new Date();
            this.props.changeState((prevState)=>{
                return {
                    state : 'waiting',
                    message : '클릭해서 시작하세요.',
                    result : [...prevState.result, this.endTime-this.startTime]
                }
            });
        }
    }
    timeoutId;
    startTime;
    endTime;
    render(){
        return (
            <div id="screen" className={this.props.state} onClick={this.onClickScreen}>
                <div>
                    {this.props.message}
                </div>
            </div>
        )
    }

}