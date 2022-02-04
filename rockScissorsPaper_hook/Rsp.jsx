import React , {useState,createRef,useEffect,useRef} from 'react';

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
    return Object.entries(rspCoords).find(v=>v[1] === imgCoord)[0];
}

const RSP = ()=>{    
    const [result, setResult] = useState('');
    const [score, setScore] = useState(0);
    const [imgCoord, setImgCoord]  = useState('0');
    const interval= useRef();
    const buttonRef = useRef();

    // 참고) useLayoutEffect 는 layout이 변경되기전 의 라이프 사이클
    useEffect(()=>{ 
        //componentDidMount  componentDidUpdate  내용
        interval.current = setInterval(changeHand,100);
        console.log('rendering');
        return ()=>{
            //componentWillUnmount
            clearInterval(interval.current);
            console.log('종료될때');
        };
    },[imgCoord]); 
    // imgCoord가 바뀔때 : useEffect가 실행되며, 클로저 문제가 해결된다??
    // 배열안에는 꼭 useEffect 가 다시 실행 될 state를 입력
    //
    // 배열이 [] 빈 배열일때는 맨처음 랜더링만 신경쓰겠다는 의미
    // 다른 state를 따로 따로 life-cycle를 사용하기 위해선,
    // 새 useEffect를 정의하여 다른 state 값을 배열에 넣어서 사용할 수 있다.
    //
    // 참고-class) 훅과 달리 class는 componentDidMount, componentDidUpdate, componentWillUnmount 에서 state에 따라 분기처리하여 설정해준다.
    
    const onClickBtn = (choice)=> (e) =>{   
        clearInterval(interval.current);
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff =  myScore - cpuScore;
        console.log(myScore ,'-',cpuScore, myScore-cpuScore);
        if(diff === 0 ){
            setResult('비겼습니다');
        }else if([-1,2].includes(diff)){
            setResult('이겼습니다');
            setScore((prevScore)=> prevScore+1);
        }else{
            setResult('졌습니다');
            setScore((prevScore)=> prevScore - 1);
        }
        setTimeout(()=>{
            interval.current= setInterval(changeHand,100)
        }, 2000);
    }
    const changeHand = ()=>{
        if (imgCoord === rspCoords.바위) {
            setImgCoord(rspCoords.가위);
        } else if (imgCoord === rspCoords.가위) {
            setImgCoord(rspCoords.보)
        } else if (imgCoord === rspCoords.보) {
            setImgCoord(rspCoords.바위);
        }
    }
    return(
        <>
            <div id="computer" style={{background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }}></div>
            <div ref={buttonRef}>
                <button id="rock" className="btn" onClick={onClickBtn('바위')}>바위</button> {/* 고차함수 사용 */}
                <button id="scissor" className="btn" onClick={onClickBtn('가위')}>가위</button>
                <button id="paper" className="btn" onClick={onClickBtn('보')}>보</button>
            </div>
            <div>{result}</div>
            <div>현재 {score} 점</div>
        </>
    );
}

export default RSP;

