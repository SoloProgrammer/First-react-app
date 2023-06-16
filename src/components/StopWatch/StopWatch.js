import React, { useEffect, useState } from 'react'

const StopWatch = () => {

    const [min, setMin] = useState(0)
    const [sec, setSec] = useState(0)

    const [active, setActive] = useState(true)

    let timer;

    useEffect(() => {
        timer = setTimeout(() => {
            if (sec === 59) {
                setMin(min + 1)
                setSec(0)
            }
            else setSec(sec + 1)
        }, 1000);
        return () => {
            clearTimeout(timer)
        }
    }, [sec, active, min])

    const handleReset = () => {
        setMin(0)
        setSec(0)
        clearTimeout(timer)
    }

    const timerAction = (e) => {
        if (e.target.innerText === "STOP") {
            clearTimeout(timer)
            e.target.innerText = "RESUME"
            e.target.style.backgroundColor = "#b600ff"
        }
        else if (e.target.innerText === "RESUME") {
            e.target.innerText = "STOP"
            e.target.style.backgroundColor = "red"
            setActive(!active) // As we pass this state in the dependency array of useEffect, and when state will update the timer will start again as whenever this state is updated in the dependency array, the useEffect will run again!
        }
    }

    return (
        <div className='w-full flex items-center justify-center mt-10 flex-col gap-4 '>
            <h3 className='text-center text-5xl text-gray-500'>Timer</h3>
            <div className="stopwatch p-5 bg-white shadow-md rounded-md flex items-center justify-center gap-10 border-t-blue-600 border-b-blue-600 border-4">
                <div className="min_div flex flex-col gap-3 justify-center items-center">
                    <p className='font-normal text-3xl py-1 px-3 bg-blue-500 text-white rounded-md'>Min</p>
                    <p className='text-4xl text-center text-gray-600'>{min < 10 ? 0 : ""}{min}</p>
                </div>
                <div>
                    <p className='font-normal text-4xl mb-3'>:</p>
                    <p className='font-normal text-4xl mt-2'>:</p>
                </div>
                <div className="sec_div flex flex-col gap-3 justify-center items-center">
                    <p className='font-normal text-3xl py-1 px-3 bg-blue-500 text-white rounded-md'>Sec</p>
                    <p className='text-4xl text-center text-gray-600'>{sec < 10 ? 0 : ""}{sec}</p>
                </div>
            </div>
            <div className='flex justify-between gap-4'>
                <button className='py-3 w-40 text-xl bg-blue-500 rounded-md text-white cursor-pointer' onClick={handleReset}>RESET</button>
                <button className='py-3 w-40 text-xl bg-red-500 rounded-md text-white cursor-pointer' onClick={timerAction}>STOP</button>
            </div>

        </div>
    )
}

export default StopWatch
