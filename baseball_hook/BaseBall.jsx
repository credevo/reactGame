// import React,{ Component } from 'react';

import React, {useState,useRef} from 'react';
import Try from './Try';

//숫자 4개를 겹치지 않고 랜덤하게 뽑는 함수
const getNumbers = ()=>{
    const candidates = [1,2,3,4,5,6,7,8,9];
    const array=[];
    for(let i=0; i<4; i++){
        const chose = candidates.splice(Math.floor(Math.random()*(9-i)),1)[0];
        array.push(chose);
    }
    console.log('답은 : ', array.join(''));
    return array;
};

const BaseBall = ()=>{
    const [result, setResult] = useState('');
    const [value, setValue] = useState('');
    const [answer, setAnswer] = useState(getNumbers());
    const [tries, setTries] = useState([]);
    const inputRef = useRef(null);

    const onSubmitForm = (e)=>{
        debugger;
        e.preventDefault();
        if(value === answer.join('')){
            setResult('홈런');
            setTries((prevTries)=>{
                return [...prevTries,{try :  value, result :'홈런'}];
            })
            alert('게임을 다시 시작합니다.!')
            setValue('');
            setAnswer(getNumbers());
            setTries([]);

        }else{
            const valueArray = value.split('').map(v=>parseInt(v));
            let strike = 0;
            let ball = 0;
            if(tries.length >= 9){
                setResult(`10번 틀려서 실패! 답은  ${answer.join(',')}`);
                alert('게임을 다시 시작합니다');
                setAnswer(getNumbers());
                setValue('');
                setTries([]);
            }else{
                for(let i=0; i<4; i++){
                    if(valueArray[i] === answer[i]){
                        strike += 1;
                    }else if(answer.includes(valueArray[i])){
                        ball += 1;
                    }
                }
                setTries((prevTries)=>{
                    return [...prevTries, {try: value, result : `strkie : ${strike}, ball : ${ball}`}];
                })
                setValue('');
            }
        }
    };
    const onChangeInput = (e)=>{
        console.log();
        setValue(inputRef.current.value);
        // if(inputRef.current.value.length == 4) 
        
    };
    
    
    return(
        <>
            <h1>{result}</h1>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} maxLength={4} value={value} onChange={onChangeInput} />
                <button>입력</button>
            </form>
            <div>시도 : {tries.length}</div>
            <ul>
                {
                    tries.map((v,i)=>{
                        return (
                            <Try key={v+'0'+i} tryInfo={v} index={i}></Try>
                        );
                    })
                }
            </ul>
        </>
    );
    
}

//es2015  모듈 문법-바벨이 바꿔준다
export default BaseBall;

//node - common js 모듈 문법
// module.exports = BaseBall;

/**
 * store 라이브러리들 
 * */
// Redux (리덕스)
// MobX (모벡스)
// Context API
