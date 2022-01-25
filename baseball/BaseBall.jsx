import React,{ Component } from 'react';
import { createRef } from 'react';
import Try from './Try';

//숫자 4개를 겹치지 않고 랜덤하게 뽑는 함수
function getNumbers(){
    const candidates = [1,2,3,4,5,6,7,8,9];
    const array=[];
    for(let i=0; i<4; i++){
        const chose = candidates.splice(Math.floor(Math.random()*(9-i)),1)[0];
        array.push(chose);
    }
    console.log('답은 : ', array.join(''));
    return array;
}

class BaseBall extends Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         result : '',
    //         value : '',
    //         answer : getNumbers(),
    //         strike : 0,
    //         ball : 0,
    //         tries :[]
    //     }
    //     this.onSubmitForm = this.onSubmitForm.bind(this);
    //     this.onChangeInput = this.onChangeInput.bind(this);
    // }
    //위와 같이 할경우 내부 메소드를 화살표함수 없이 사용가능하다 this접근가능
    
    state = {
        result : '',
        value : '',
        answer : getNumbers(),
        tries :[]
    }
    onSubmitForm = (e)=>{
        e.preventDefault();
        if(this.state.value === this.state.answer.join('')){
            this.setState({
                /**
                 * 
                 * react
                 *참조된 주소 자체를 변경해서 데이타가 바뀌는거 감지하여 rendering 
                 * 
                 */
                tries : [...this.state.tries,{try :  this.state.value, result :'홈런'}]
            })
            alert('게임을 다시 시작합니다.!')
            this.setState({
                answer : getNumbers(),
                value : '',
                tries : [],
            });
            this.inputRef.current.focus();
        }else{
            const valueArray = this.state.value.split('').map(v=>parseInt(v));
            let strike = 0;
            let ball = 0;
            if(this.state.tries.length >= 9){
                this.setState({
                    result : `10번 틀려서 실패! 답은  ${this.state.answer.join(',')}`
                });
                alert('게임을 다시 시작합니다')
                this.setState({
                    answer : getNumbers(),
                    value : '',
                    tries : [],
                });
            }else{
                for(let i=0; i<4; i++){
                    if(valueArray[i] === this.state.answer[i]){
                        strike += 1;
                    }else if(this.state.answer.includes(valueArray[i])){
                        ball += 1;
                    }
                }
                this.setState({
                    tries : [...this.state.tries,{try: this.state.value, result : `strkie : ${strike}, ball : ${ball}`}],
                })
            }
            this.inputRef.current.focus();
        }
    }
    onChangeInput = (e)=>{
        this.setState({
            value : e.target.value,
        })
    }
    // refInput ; 
    inputRef = createRef();
    
    render = ()=>{
        const {result, value, tries} = this.state; // 구조 분해를 통해 state 간략
        return(
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input ref={this.inputRef}maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
                    <button>입력</button>
                </form>
                <div>시도 : {this.state.tries.length}</div>
                <ul>
                    {
                        this.state.tries.map((v,i)=>{
                            return (
                                <Try key={v+'0'+i} tryInfo={v} index={i}></Try>
                            );
                        })
                    }
                </ul>
            </>
        );
    }
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
