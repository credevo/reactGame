const React = require('react');
const {useRef, useState, Fragment} = React;

//함수형 컴포넌트
/**
 * setState 인경우 여러번 일어나지만 비동기라서 
 * react에서 자동으로 처리된다.
 * /
/* 주의 */
// className=""  html의 클래스
// htmlFor="" 라벨의 for 속성
const GuGuDan2 = ()=>{
    const inputRef = useRef(null);
    // 구조 분해 할당
    const [first, setFirst] = useState(Math.ceil(Math.random()*9));
    const [second, setSecond] = useState(Math.ceil(Math.random()*9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    //
    const onChange = (e)=>{
        setValue(e.target.value);
    };
    //
    const onSubmit = (e)=>{
        e.preventDefault();
        if(parseInt(value) === first * second){
            setResult('정답은 ' + value + '입니다');
            // setResult((prevResult)=>prevResult);
            //초기화
            setFirst(Math.ceil(Math.random()*9));
            setSecond(Math.ceil(Math.random()*9));
            setValue('');
            inputRef.current.focus();
        }else{
            // this.input.focus(); // dom this에 넣어서 사용하는 방법
            setResult('땡');
            setValue('');
            inputRef.current.focus();
        }
    };
    // const onRefInput = (c)=> setInput = c; ref={onRefInput} 

    return (
        <>
            <div>{first} 곱하기 {second} 는? </div>
            <form onSubmit={onSubmit}>
                <input ref={inputRef} value={value} onChange={onChange} />
                <button >입력</button>
            </form>
            <div>{result}</div>
        </>
    );
};

module.exports = GuGuDan2;