import React , {Component, useState,memo,useMemo} from 'react';
import {PureComponent} from 'react'

class Test0 extends Component {
    shouldComponentUpdate(nextProps, nextState){
        // return (JSON.stringify(nextProps) != JSON.stringify(this.props));
        return this.state.counter !== nextState.count; //다를경우만 true하여 rendering 하도록 
    }

    state = {
        counter : 0,
    };
    onClick = (e)=>{
        debugger;
        this.setState({count : this.state.counter+1});
    };

    render(){
        console.log('rendering0',this.state.counter);
        return(
            <div>
                <button onClick={this.onClick}>클릭0</button>
            </div>
        );
    }
}
class Test00 extends PureComponent {
    state = {
        counter : 0,
    };
    onClick = (e)=>{
        this.setState({count : 1});
    };

    render(){
        console.log('rendering0',this.state.counter);
        return(
            <div>
                <button onClick={this.onClick}>클릭0</button>
            </div>
        );
    }
}

// ex)
const Test1 = memo(()=>{
    console.log('rendering1');

    const [count,setCount] = useState(0);
    const onClick  = ()=>{
        let c = count+1;
        setCount(c);
    }
    return(
        <div>
            <button onClick={onClick}>클릭1</button>
        </div>
    );
})

const Test2 = ()=>{
    
    console.log('rendering2');
    const [count , setCount] = useState(0);
    
    //count의 변경이 일어날때만 수행될수 있도록 처리한다.(vue-watch랑 비슷하네);
    useMemo((count)=>{
        console.log('Test2 : rendering')
    },[count]);

    const onClick = ()=> {
       
        if(count < 4){
            setCount(count+1);
        }
    }
    return(


        <div>
            <button onClick={onClick}>클릭2</button>
        </div>
    );
};
export {Test0, Test00, Test1, Test2}