import React, { memo, useState } from 'react';
import Table from './Table';

const TicTacTo = memo(()=>{
    const [winner, setWinner] = useState('');
    return (
        <>
            <Table />
            <div>{winner + '님이 이겼습니다.'}</div>
        </>
    )
});

export default TicTacTo;