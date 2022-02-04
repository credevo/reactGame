import React, {Component} from 'react';
import Ball from './Ball';
import BallHook from './BallHook';


function getNumbers(){
    const candidate = Array(45).fill().map((v,i)=>i+1); // candidate  = [1, ... , 45] 의 배열
    const shuffle = [];
    while(candidate.length > 0){
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length),1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length-1];
    const winNumbers = shuffle.slice(0,6).sort((a,b)=>a-b);
    return [...winNumbers, bonusNumber];
}

class Lotto extends Component{
    state = {
        winNumbers : getNumbers(), //당첨 숫자들
        winBalls : [],
        bonus : null,
        redo : false,
    }
    render = ()=>{
        const {winNumbers, bonus, redo}  = this.state;
        return (
            <>
                <div>당첨 숫자</div>
                <div id="결과창">
                    {winNumbers.map((v,i)=><Ball key={i} number={v}/>)}
                </div>
                <div style={{padding :'20px'}}>
                    {winNumbers.map((v,i)=><BallHook key={i} number={v}/>)}
                </div>
            </>
        )
    }
}

export default Lotto;