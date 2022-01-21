const React = require('react');
const {useState, useRef}  = React;

const  WordRelay = () => {
    const [word,setWord] = useState('잡초');
    const [value,setValue] = useState('');
    const [result,setResult] = useState('');

    const inputRef = useRef(null);

    const onChangeInput = (e)=>{
        setValue(e.target.value);    
    };

    const onSubmit = (e)=>{
        e.preventDefault();
        if(word[word.length-1] === value[0]){
            setResult('정답');
            setWord(value);
            setValue('');
            inputRef.current.focus();
        }else{
            setResult('땡');
            setValue('');
            inputRef.current.focus();
        }
    };
    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmit}>
                <label htmlFor="wordInput">글자를 입력하세요</label>
                <input id="wordInput" className="wordInput" ref={inputRef} value={value} onChange={onChangeInput}></input>
                <button className="클래스입니다">입력</button>
            </form>
            <div>{result}</div>
        </>
    ); 
}

module.exports = WordRelay;
    