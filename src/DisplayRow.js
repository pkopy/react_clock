import React, {useEffect, useState} from 'react';

export default function (props) {
    const [height, setHeight] = useState(-220)
    const [prevNumber, setPrevNumber] = useState()
    const [number, setNumber] = useState(props.number)
    const [vis, setVis] = useState('hidden')
    const [opa, setOpa] = useState(1)
    const [time, setTime] = useState(.2)
    useEffect(() => {
        // console.log(props)
        setVis('hidden')
        setTimeout(() => {
            // if (prevNumber<number) {
            //     setHeight(220)
            // }else{

            setHeight(-220)

            // }
            // setHeight(-220)
        }, 200 + 200*props.time)

        // // setHeight(-200)
        setTimeout(() => {
            setVis('visible')
            setPrevNumber(number)
            setNumber(props.number)

            setHeight(-30)
        }, 400+400*props.time)

        // setHeight(0)
        // // setTimeout(() => {
        // // //
        // //     setHeight(0)
        // // }, 500)
        // setPrevNumber(props.number)
        // if (prevNumber<props.number) {
        //     setHeight(200)
        // } else {
        //     setHeight(-200)
        //     setHeight(0)
        // }
        // console.log(prevNumber, props.number)
        // return () => {
        //     setHeight(0)
        // }
    }, [props.number])
    // useEffect(() =>{
    //     setTimeout(() => {
    //
    //         setOpa(0)
    //     },1000)
    //     setTimeout(() => {
    //
    //         setOpa(1)
    //     },1500)
    //
    // },[])

    return (
        <div style={{position: 'relative', width: '125px', height: '210px'}}>

            {/*<button onClick={() => setOpa(0)}>iiii</button>*/}
            <div style={{
                fontSize: '15em', position: "absolute", overflow: 'hidden',

                // border: '1px solid',
                width: '100%',
                height: '100%'
            }}>
                <div style={{top: height, opacity: opa, position: 'absolute', transition: props.time?`${props.time.toString()}s`:undefined, visibility: vis}}>
                    {number}
                    {props.children}
                    {/*{prevNumber}*/}
                </div>

                {/*<button style={{ position: 'absolute'}}onClick={setNum}>JJJJJ</button>*/}
            </div>
        </div>
    )


}