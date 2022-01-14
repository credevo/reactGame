const e = React.createElement

class GuGuDan extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            first : Math.ceil(Math.random()*9),
            second : Math.ceil(Math.random()*9),
            value : '',
            result : ''
        }
    }
    onSubmit(t){
        return (e)=>{
            console.log(this);
            e.preventDefault();
            console.log(this.state.first);
            console.log(this.state.second);
            const realResult = this.state.first * this.state.second;
            const r1 = realResult === parseInt(this.state.value);
            this.setState({result : r1?'딩동댕':'땡'});
            // this.setState({result : this.state.first * this.state.second == this.state.value ?'딩동댕' :'땡';});
        }
    }
    render(){
        return (
            <div>
                <div>{this.state.first} 곱하기 {this.state.second} 는?</div>
                <form onSubmit={this.onSubmit(e)}>
                    <input type="number" value={this.state.value} onChange={(e)=>this.setState({value:e.target.value})}/>
                    <button>입력</button>
                </form>
                <div>{this.state.result}</div>
            </div>
        );
    }
}