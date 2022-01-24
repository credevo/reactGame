import React, {Component} from 'react';
// const {useRef, useState, Fragment} = React;

class Try extends Component {
     
    render = ()=>(
        <li>
            {this.props.tryInfo.try}-{this.props.tryInfo.result}-[{this.props.index}]
        </li>
    );   
     
} 
// const Try = (props)=>{
//     const tryInfo = props.tryInfo; 
//     const index = props.index;
//     return (
//         <li>
//             {tryInfo.try}-{tryInfo.result}-[{index}] 
//         </li>
//     );
    
// };
    


export default Try;

