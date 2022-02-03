import React , {Component,createRef} from 'react';

/**
 * Life-Cycle
클래스의 경우 
-> constructor -> render -> ref -> componentDidMount 
-> (setState,props 바뀔때) -> shouldComponentUpdate -> render -> componentDidUpdate
//부모가 나를 없앴을때 -> componentWillUnmount -> 소멸
*/
const rspCoords = {
    바위 : '0',
    가위 : '-142px',
    보 : '-284px'
}

const scores = {
    가위 : 1,
    바위 : 0,
    보 : -1 
}
function computerChoice(imgCoord){
    const d =  Object.entries(rspCoords).find(v=>v[1] === imgCoord)[0];
    console.log(d);
    return d;
}


export default class RSP extends Component{
    state = {
        result : '',
        score : 0,
        imgCoord : '0',
    }

    interval;

    componentDidMount = ()=>{ //컴포넌트가 첫 렌더링 후 : 주로 비동기 요청
        this.interval = setInterval(() => {this.changeHand()},100)
    }
    componentDidUpdate = ()=>{ //컴포넌트가 리 렌더링 후에

    }
    componentWillUnMount = ()=>{//컴포넌트가 제거되기 직전 = 부모가 자식(본인)을 없앴을때 : 비동기 요청 정리 해주기
        clearInterval(this.interval)
    }
    
    onClickBtn = (choice)=>{
        
        
        this.isClick = true;
        const {imgCoord} = this.state; 
        
        clearInterval(this.interval);

        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff =  myScore - cpuScore;
        console.log(myScore ,'-',cpuScore, myScore-cpuScore);
        if(diff === 0 ){
            this.setState({result : '비겼습니다'});
        }else if([-1,2].includes(diff)){
            this.setState((prevState)=>{
                return {
                    result : '이겼습니다.',
                    score : prevState.score + 1,
                }
            })
        }else{
            this.setState((prevState)=>{
                return {
                    result : '졌습니다.',
                    score : prevState.score - 1,
                }
            })
        }
        // this.buttonRef.current.hidden = true;
        setTimeout(()=>{
            this.interval = setInterval(() => {this.changeHand()},100)
            this.isClick =false;
            // this.buttonRef.current.hidden = false;
        }, 2000);
        

        
    }
    buttonRef = createRef();

    changeHand = ()=>{
        const { imgCoord } = this.state; //비동기 클로저 문제 해결된 사항
        if (imgCoord === rspCoords.바위) {
            this.setState({
                imgCoord: rspCoords.가위
            });
        } else if (imgCoord === rspCoords.가위) {
            this.setState({
                imgCoord: rspCoords.보
            });
        } else if (imgCoord === rspCoords.보) {
            this.setState({
                imgCoord: rspCoords.바위
            });
        }
    }
    render = ()=>{
        const {result, score, imgCoord} = this.state;
        // this.setState 를 쓰면 무한 반복된다 !!
        return(
            <>
                <div id="computer" style={{background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }}></div>
                <div ref={this.buttonRef}>
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