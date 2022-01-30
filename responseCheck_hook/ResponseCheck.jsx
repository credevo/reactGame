// import React, {Component} from 'react';

import React, {useState,useRef} from 'react';

const ResponseCheck = ()=>{
    const [state, setState] = useState('waiting');
    const [message, setMessage] = useState('클릭해서 시작하세요.');
    const [result, setResult] = useState([]);
    // ⚡︎⚡︎⚡︎⚡︎⚡︎⚡︎ useRef를 통한 변수 설정해야 한다.
    const timeoutId = useRef(0);
    const startTime = useRef();
    const endTime = useRef();
    
    const onClickScreen = (e)=>{
        if(state == 'waiting'){
            timeoutId.current = setTimeout(()=>{
                setState('now');
                setMessage('지금 클릭');
                startTime.current = new Date();
            },Math.floor(Math.random()*1000)+2000); //2~3초 랜덤
            //
            setState('ready');
            setMessage('초록색이 되면 클릭하세요')
        }else if(state === 'ready'){ // 성급하게 클릭
            clearTimeout(timeoutId.current);
            setState('waiting');
            setMessage('성급하셨군요, 초록색이 된후 클릭하세요');
        }else if(state === 'now'){ // 반응속도 체크
            endTime.current = new Date();
            setResult((prevState)=>{
                return  [...prevState, endTime.current-startTime.current];
            });
            setState('waiting');
            setMessage('클릭해서 시작하세요.');
        }
    }
    const onReset = ()=>{
        setResult([]);
    }
    const renderAverage = ()=>{
        return result.length === 0 
        ? null  
        : (
            <div>
                <span>평균 시간 : { result.reduce((a,c)=>a+c) / result.length} ms</span>
                <button onClick={onReset}>Reset</button>
            </div>
            
            )
    }
    const renderTimes = ()=>{
        if(result.length){
            return (
                <div>기존 times : 
                    <span>{result.map(e=>e +',')}</span>
                </div>
            )
        }
    }
    return (
        <>
            <div id="screen" className={state} onClick={onClickScreen}>
                <div>
                    {message}
                </div>
            </div>
            {
                renderAverage()
            }
            {
                /* 
                    1. 외부 함수 형태 
                      ex) renderTimes()

                    2. {} 안에 즉시실행함수 형태
                        {}안에 script를 쓸수 있으며,
                        {}안에 즉시실행 함수로 호출하면 script를 쓸수 있다.
                        ex) 
                        {
                            (
                                ()=>{}
                            )() 
                        }
                */
            }
            {
                (
                    ()=>{
                        if(result.length){
                            return (
                                <div>기존 times : 
                                    <span>{result.map(e=>e +',')}</span>
                                </div>
                            )
                        }
                    }
                )()
            }
            <div>
                <div>
                    jsx에서 for문 사용 
                </div>
                {
                    (
                        ()=>{
                            const data = [
                                {key : 1, value : 1},
                                {key : 2, value : 2},
                                {key : 3, value : 3},
                                {key : 4, value : 4},
                                {key : 5, value : 5}
                            ]
                            const arr = [];
                            for(let i=0; i < data.length; i++){
                                arr.push(<div>{data[i].key} : {data[i].value}</div>);
                            }
                            return arr;
                        }
                    )()
                }
            </div>
        </>
    )

}

export default ResponseCheck;

/*
 jsx 에서 for문 을 쓰는 방법은
 배열을 return 하는 방법이다.
 ex)

 <>
    {
        (
            ()=>{
                const data = [
                    {key : 1, value : 1},
                    {key : 2, value : 2},
                    {key : 3, value : 3},
                    {key : 4, value : 4},
                    {key : 5, value : 5}
                ]
                const arr = [];
                for(let i=0; i < data.length; i++){
                    arr.push(<div>{data.key} : {data.value}</div>);
                }
                return arr;
            }
        )()
    }
 </>
*/