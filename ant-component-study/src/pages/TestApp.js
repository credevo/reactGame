import moment from 'moment';

import {DatePicker, Input} from 'antd';
import renderEmpty from 'antd/lib/config-provider/renderEmpty';
import Form from 'antd/lib/form/Form';



const TestApp = ()=>{
    const change = (m,d)=>{
        console.log(m);
        console.log(d);
    }
    const currentDate = '2020-10-10';






    
    const format = 'YYYY-MM-DD';
    const currentDate2 = '';
    // console.log(moment(currentDate2,format));
    const test = 'required';
    return (
        <>
            <Form validateMessages={test}>
                <Input text="dddd"/>
                <DatePicker 
                defaultValue={moment(currentDate2,format)??moment(currentDate2,format)} 
                value={moment()} onChange={change}/>
            </Form>
        </>
    )
}

export default TestApp;