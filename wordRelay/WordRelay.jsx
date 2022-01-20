const React = require('react');
const {Component}  = React;

class WordRelay extends Component{
    state = {
        word : '잡초2',
        value : '',
        result : '',
    };
    onChangeInput = (e)=>{
        this.setState({value : e.target.value});
    };
    onSubmit = (e)=>{
        e.preventDefault();
        if(this.state.word[this.state.word.length-1] === this.state.value[0]){
            this.setState((prev)=>{
                return {
                    result : '정답',
                    word : prev.value,
                    value : ''
                }
            });
            this.input.focus();
        }else{
            this.setState({
                result : '땡',
                value : '',
            })
            this.input.focus();
        }
    };
    refInput = (ref)=> this.input = ref;

    render(){
        return (
            <>
                <div>{this.state.word}</div>
                <form onSubmit={this.onSubmit}>
                    <input ref={this.refInput} value={this.state.value} onChange={this.onChangeInput}></input>
                    <button>입력</button>
                </form>
                <div>{this.state.result}</div>
            </>
        );

    }
}

module.exports = WordRelay;
    