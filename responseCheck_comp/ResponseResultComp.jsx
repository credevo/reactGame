import React ,{Component, PureComponent} from 'react';

class ResponseResultComp extends Component{
    onReset = ()=> this.props.onReset();
    renderAverage = ()=>{
        return this.props.result.length === 0 
        ? null  
        : (
            <div>
                <span>평균 시간 : { this.props.result.reduce((a,c)=>a+c) / this.props.result.length} ms</span>
                <button onClick={this.onReset}>Reset</button>
            </div>
            )
    }
    renderTimes = ()=>{
        if(this.props.result.length){
            return (
                <div>기존 times : 
                    <span>{this.props.result.map(e=>e +',')}</span>
                </div>
            )
        }
    }
    render(){
        return (
            <>
                {this.renderAverage()}
                {this.renderTimes()}
            </>
        )
    }
}
export default ResponseResultComp;
