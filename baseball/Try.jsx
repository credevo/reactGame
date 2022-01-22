import React, {Component} from 'react';
// const {useRef, useState, Fragment} = React;

// class Try extends Component {
//      render(){
//             return (
//                 <li>
//                     {this.props.value.fruit}-{this.props.value.taste}-[{this.props.index}]
//                 </li>
//             );   
//      }
// } 
const Try = (props)=>{
    const value = props.value; 
    const index = props.index;
    return (
        <li>
            {value.fruit}-{value.taste}-[{index}] 
        </li>
    );
    
};
    


export default Try;

