import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import BallHook from './BallHook';

function getWinNumbers() {
    console.log('getWinNumbers');
    const candidate = Array(45).fill().map((v, i) => i + 1);
    const shuffle = [];
    while (candidate.length > 0) {
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
    return [...winNumbers, bonusNumber];
}

/**
 *  lotto 함수 컴포넌트의 초기 재실행 count
*/
// set이 작동하면 전체 hook이 작동하여 
// 최초 수행 1번, 
// 반복문에 의한 winNumber Rendering 6번 
// bonus 1번, 
// redo 1번, 
// 총 9번 실행된다. = console.log(lotto-hook)
const Lotto = ()=>{
    console.log("lotto-hook");
    // caching
    const lottoNumbers = useMemo(()=> getWinNumbers(),[]);
    //
    const [winNumbers , setWinNumbers] = useState(lottoNumbers);
    const [winBalls, setWinBalls] = useState([]);
    const [bonus, setBonus] = useState(null);
    const [redo, setRedo] = useState(false);
    const timeouts = useRef([]);
    
    const runTimeouts = () => {
        console.log("runTimeouts");
        //당첨번호 6개 
        for (let i = 0; i < winNumbers.length - 1; i++) {
            timeouts.current[i] = setTimeout(() => {
                setWinBalls((prevWinBall)=>{
                    return [...prevWinBall, winNumbers[i]];
                })
            }, (i + 1) * 1000);
        }
        //보너스 숫자 +1
        timeouts.current[6] = setTimeout(() => {
            setBonus(winNumbers[6]);
            setRedo(true);
        }, 7000);
    }
    useEffect(()=>{
        console.log("useEffect");
        // mount , update 시 
        runTimeouts();
        //componentWillUnmount
        return ()=>{
            timeouts.current.forEach(v=>clearTimeout(v));
        }
    },[timeouts.current]); //componentDidMount, componentDidUpdate

    const onClickRedo = useCallback(() => {
        console.log("onClickRedo");
        console.log(winNumbers);
        setWinNumbers(getWinNumbers());
        // setWinNumbers(lottoNumbers);
        setWinBalls([]);
        setBonus(null);
        setRedo(false);
        timeouts.current = [];
    },[winNumbers]); 
    /**
     * useCallback 활용
     */
    // winNumbers를 2번째 배열 인자에 넣지 않을경우, 최초 winNumbers이 기억된 채로 실행된다. 
    // 따라서, function내 쓰인 변수는 2번째 배열 인자에 넣어주어야 한다.
    //
    // 추가로, 함수를 자식에게 props으로 내린다면 부모컴포넌트가 재실행될때가 함수가 다시 만들어지므로
    // 자식에게 다시 생성된 함수를 props값으로 넘기게 되어, 자식에서 re-rendering 되게 되므로,
    // 따라서, 자식에게 props으로 함수를 전달될때는 useCallback 처리 해줘야 한다.

    return (
        <>
            <div>당첨 숫자</div>
            <div id="결과창">
                {winBalls.map((v) => <BallHook key={v} number={v} />)}
            </div>
            <div>보너스!</div>
            {bonus && <BallHook number={bonus}  onClick={onClickRedo}/>} {/* 자식에게 props으로 함수를 전달 할경우 */}
            {redo && <button onClick={onClickRedo}>한 번 더!</button>}
        </>
    );
    
}

export default Lotto;