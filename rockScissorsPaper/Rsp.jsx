import React , {Component} from 'react';

export default class RSP extends Component{
    state = {
        result : '?',
        score : 0,

    }
    onClickBtn = ()=>{

    }
    render = ()=>{
        return(
            <>
                <div id="computer"></div>
                <div>
                    <button id="rock" className="btn" onClick={()=> this.onClickBtn('바위')}>바위</button>
                    <button id="scissor" className="btn" onClick={()=> this.onClickBtn('가위')}>가위</button>
                    <button id="paper" className="btn" onClick={()=> this.onClickBtn('보')}>보</button>
                </div>
                <div>{this.result}</div>
                <div>현재 {this.score} 점</div>
            </>
        );
    }
}