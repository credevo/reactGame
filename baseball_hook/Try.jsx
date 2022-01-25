import React,{useRef, useState, Fragment,memo} from 'react';

const Try = memo(({tryInfo,index})=>{
    /**
     * props을 자식에서 바꿔서는 안되는 패턴이다.
     * ex) tryInfo.try = 'hello'; 
     */
    const [result, setResult]= useState(tryInfo.result);
    const onClick = ()=>{
        setResult(index + '-click');
    }

    return (
        <li onClick={onClick}>
            {tryInfo.try}-{tryInfo.result}-[{index}] 
        </li>
    );
});

export default Try;

