import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayRow from "./DisplayRow";
import Paper from "./Paper";

function App() {
    const [sec, setSec] = useState(0)
    const [dSec, setDSec] = useState(0)
    const [min, setMin] = useState(0)
    const [dMin, setDMin] = useState(0)
    const [hour, setHour] = useState(0)
    const [dHour, setDHour] = useState(0)
    useEffect(() => {
        let date = new Date()
        console.log(Math.floor(date.getMinutes()/10))
        setDSec(Math.floor(date.getSeconds()/10))
        setDMin(Math.floor(date.getMinutes()/10))
        setDHour(Math.floor(date.getHours()/10))
        setHour(date.getHours())
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
            <Paper />
            <DisplayRow number={dHour} time={2}/>
            <DisplayRow number={hour%10} time={2}/>
            {/*<div style={{width: '20px'}}/>*/}
            <div style={{width: '50px', fontSize:'15em', position:'relative', top: -50}}>:</div>
            <DisplayRow number={dMin} time={1.7}/>
            <DisplayRow number={min%10} time={1.5}/>
            {/*<DisplayRow number={':'} time={1.5}/>*/}
            <div style={{width: '50px', fontSize:'15em', position:'relative', top: -50}}>:</div>
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
