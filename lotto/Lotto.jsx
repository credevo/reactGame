import React, {Component} from 'react';
// import Ball from './Ball';
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

    timeouts = [];
    runTimeouts = ()=>{
        const { winNumbers } = this.state;
        for (let i = 0; i < winNumbers.length - 1; i++) {
            this.timeouts[i] = setTimeout(() => {
                this.setState((prevState) => {
                    return {
                        winBalls: [...prevState.winBalls, winNumbers[i]],
                    };
                });
            }, (i + 1) * 1000);
        }
        this.timeouts[6] = setTimeout(() => {
            this.setState({
                bonus: winNumbers[6],
                redo: true,
            });
        }, 7000);
        console.log('componentDidUpdate-runTimeouts');
    }
    componentDidMount(){
        console.log('componentDidMount');
        this.runTimeouts();
    }
    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate');
        if(this.state.winBalls.length === 0){
            this.runTimeouts();
        }
    }
    // setTimeout 할때 메모리 누수 문제 해결, setInterval
    componentWillUnmount(){
        this.timeouts.forEach(t=> clearTimeout(t));
    }
    
    onClickRedo = ()=>{
        this.setState({
            winNumbers  : getNumbers(),
            winBalls: [],
            bonus : null,
            redo : false,
        });
        this.timeouts = [];
    }
    render = ()=>{
        const {winBalls, bonus, redo}  = this.state;
        return (
            <>
                <div>당첨 숫자</div>
                <div id="결과창">
                    {winBalls.map((v,i)=><BallHook key={i} number={v}/>)}
                </div>
                {bonus && <div>보너스!</div>}
                {bonus && <BallHook number={bonus} />}
                {redo && <button onClick={redo? this.onClickRedo: ()=>{}}>한 번 더!</button>}                
            </>
        )
    }
}

export default Lotto;