const e = React.createElement

class GuGuDan extends React.Component{
    constructor(props){
        super(props);   
        this.state = {
            first : Math.ceil(Math.random()*9),
            second : Math.ceil(Math.random()*9),
            value : '',
            result : ''
        };
    }
    onSubmit = (e)=>{
        e.preventDefault();
        if(parseInt(this.state.value) === this.state.first * this.state.second){
            // this.setState({
            //     result : '정답은 ' + this.state.value + '입니다',
            //     first : Math.ceil(Math.random()*9),
            //     second : Math.ceil(Math.random()*9),
            //     value : '',
            // });
            this.refs.dd.innerText = Math.ceil(Math.random()*3); // refs에 접근해서 처리하는 방법
            this.setState((prevState)=>{ //함수로 반환하면 이전 value를 사용할수 있다.
                return {
                    result : '정답은 ' + prevState.value + '입니다',
                    first : Math.ceil(Math.random()*9),
                    second : Math.ceil(Math.random()*9),
                    value : '',
                }
            })
        }else{
            this.input.focus(); // dom this에 넣어서 사용하는 방법
            this.setState({
                result : '땡',
                value : '',
            })
        }
    };
    onChange = (e)=>{
        this.setState({value:e.target.value});
    };
    onRefInput = (c)=>{
        this.input=c;
    };
    // <></> 로 처리할려면 바벨2?를 설치 해야한다.??????
    // React.Fragment 로 처리 할수 있다.
    // rendering 되는 이유는 this.setState 되어 발생한다.
    render(){
        return (
            <React.Fragment> 
                <div>{this.state.first} 곱하기 {this.state.second} 는?</div>
                <form onSubmit={this.onSubmit}>
                    <input ref={this.onRefInput} type="number" value={this.state.value} onChange={this.onChange}/>
                    <button ref="dd">입력</button>
                </form>
                <div>{this.state.result}</div>
            </React.Fragment>
        );
    }
}