import React , {Component} from 'react';

/**
 * Life-Cycle
클래스의 경우 
-> constructor -> render -> ref -> componentDidMount 
-> (setState,props 바뀔때) -> shouldComponentUpdate -> render -> componentDidUpdate
//부모가 나를 없앴을때 -> componentWillUnmount -> 소멸
*/

export default class RSP extends Component{
    state = {
        result : '?',
        score : 0,
        imgCoord : 0,
    }
    onClickBtn = ()=>{

    }
    componentDidMount = ()=>{ //컴포넌트가 첫 렌더링 후

    }
    componentDidUpdate = ()=>{ //컴포넌트가 리 렌더링 후에

    }
    componentWillUnMount = ()=>{//컴포넌트가 제거되기 직전 = 부모가 자식(본인)을 없앴을때
        
    }
    render = ()=>{
        const {result, score, imgCoord} = this.state;
        // this.setState 를 쓰면 무한 반복된다 !!
        return(
            <>
                <div id="computer" style={{background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }}></div>
                <div>
                    <button id="rock" className="btn" onClick={()=> this.onClickBtn('바위')}>바위</button>
                    <button id="scissor" className="btn" onClick={()=> this.onClickBtn('가위')}>가위</button>
                    <button id="paper" className="btn" onClick={()=> this.onClickBtn('보')}>보</button>
                </div>
                <div>{result}</div>
                <div>현재 {score} 점</div>
            </>
        );
    }
}