import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayRow from "./DisplayRow";

function App() {
    const [sec, setSec] = useState(0)
    const [dSec, setDSec] = useState(0)
    const [min, setMin] = useState(0)
    const [dMin, setDMin] = useState(0)
    useEffect(() => {
        let date = new Date()
        console.log(Math.floor(date.getMinutes()/10))
        setDSec(Math.floor(date.getSeconds()/10))
        setDMin(Math.floor(date.getMinutes()/10))
        setSec(date.getSeconds())
        setMin(date.getMinutes())
    },[])
    useEffect(() => {
        setInterval(() => {
            let date = new Date()
            if (date.getSeconds()%10 === 0) setDSec(date.getSeconds())
            if (date.getMinutes()%10 === 0) setDMin(date.getMinutes())
            setSec(date.getSeconds())
            setMin(date.getMinutes())

        }, 1000)
    },[])
    return (
        <div className="App" style={{display: 'flex'}}>
            <DisplayRow number={dMin} time={2}/>
            <DisplayRow number={min%10} time={1.5}/>
            <div style={{width: '20px'}}/>
            <DisplayRow number={dSec} time={1}/>
            <DisplayRow number={sec%10} time={.5}/>
            {/*<div style={{position: 'relative', width: '125px'}}>*/}

            {/*    <DisplayRow number={8}/>*/}



            {/*</div>*/}
            {/*<div style={{position: 'relative', width: '125px'}}>*/}

            {/*    <DisplayRow  number={0}/>*/}
            {/*</div>*/}
        </div>
    );
}

export default App;
