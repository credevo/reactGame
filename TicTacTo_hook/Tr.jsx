import React, { memo, useEffect, useMemo, useRef } from 'react'
import Td from './Td';

const Tr = ({rowData,rowIndex,dispatch})=>{
    Tr.displayName = 'Tr';
    
    // [rowData,rowIndex,dispatch]가 변경될때마다 log 찍기
    console.log('TR :: render');
    const ref = useRef([]);
    useEffect(()=>{
        console.log('tr',
            rowData === ref.current[0],
            rowIndex === ref.current[1],
            dispatch === ref.current[2],
        );
        ref.current = [rowData,rowIndex,dispatch];

    },[rowData,rowIndex,dispatch]);

    return (
        <tr>        
            {
                Array(rowData.length).fill().map((td,i)=>{
                    // useMemo를 이용한 TD 컴퍼넌트가 렌더링되는것을 막아주는 효과
                    return useMemo(()=> <Td key={i} rowIndex={rowIndex} cellData={rowData[i]} cellIndex={i} dispatch={dispatch} />, [rowData[i]]);
                    // return <Td key={i} rowIndex={rowIndex} cellData={rowData[i]} cellIndex={i} dispatch={dispatch} />
                })
            }
        </tr>
    )
};

export default Tr;

/**
 * useMemo를 써서 부모에서 자식의 컴포넌트에 적용하면 자식을 최적하는 방법이고,
 * memo는 해당 컴포넌트에서 최적화하는 방식이다.
 * 따라서, 어디서(위치) 하느냐에 따라 달라지는점 인지하고 있자.
 */