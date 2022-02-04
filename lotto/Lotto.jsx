import React, {Component} from 'react';



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
        data : getNumbers(),
    }
    render = ()=>{
        return (
            <>
                <div>
                    {this.state.data.join(',')}
                </div>
            </>
        )
    }
}

export default Lotto;