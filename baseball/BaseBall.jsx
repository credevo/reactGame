import React,{ Component } from 'react';
import Try from './Try';

//숫자 4개를 겹치지 않고 랜덤하게 뽑는 함수
function getNumbers(){
    return 1234;
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
        strike : 0,
        ball : 0,
        tries :[]
    }
    onSubmitForm = ()=>{

    }
    onChangeInput = ()=>{

    }
    fruits = [
        {fruit :'사과', taste : '맛있다1'},
        {fruit :'바나나', taste : '맛있다2'},
        {fruit :'포도', taste : '맛있다3'},
        {fruit :'귤', taste : '맛있다4'},
        {fruit :'감', taste : '맛있다5'},
        {fruit :'배', taste : '맛있다6'},
        {fruit :'밤', taste : '맛있다7'},
        {fruit :'사과', taste : '맛있다8'},
        {fruit :'사과', taste : '맛있다8'},
    ];
    render = ()=>{
        
        return(
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.value} onChange={this.onChangeInput} />
                    <button>입력</button>
                </form>
                <div>시도 : {this.state.tries.length}</div>
                <ul>
                    {
                        this.fruits.map((v,i)=>{
                            return (
                                <Try key={v+'0'+i} value={v} index={i}></Try>
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
