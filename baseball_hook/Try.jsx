import React from 'react';
// const {useRef, useState, Fragment} = React;

// class Try extends Component {
     
//     render = ()=>(
//         <li>
//             {this.props.tryInfo.try}-{this.props.tryInfo.result}-[{this.props.index}]
//         </li>
//     );   
     
// } 
// const Try = (props)=>{

const Try = ({tryInfo,index})=>{
    return (
        <li>
            {tryInfo.try}-{tryInfo.result}-[{index}] 
        </li>
    );
};

export default Try;

