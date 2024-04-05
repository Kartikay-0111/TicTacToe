import React, { useRef, useState } from 'react'
import "w3-css/w3.css";
import circle from "../assets/circle.png"
import cross from "../assets/cross.png"
import "./ttt.css"
import './tailwind.css';
let data = ["", "", "", "", "", "", "", "", ""]

export const TicTacToe = () => {
    const [lock, setLock] = useState(false);
    let [count, setCount] = useState(0)
    const [winner, setWinner] = useState(null)
    const [draw, setDraw] = useState(false)
    const box1 = useRef(null)
    const box2 = useRef(null)
    const box3 = useRef(null)
    const box4 = useRef(null)
    const box5 = useRef(null)
    const box6 = useRef(null)
    const box7 = useRef(null)
    const box8 = useRef(null)
    const box9 = useRef(null)
    let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9]
    const handleclick = (e, id) => {
        if (lock) {
            return;
        }
        // Check if box already has a value
        if (data[id] === "") {
            if (count % 2 === 0) {
                e.target.innerHTML = `<img src='${circle}' alt="circle" />`
                data[id] = "O"
                setCount(++count)
            } else {
                e.target.innerHTML = `<img src='${cross}' alt="cross" />`
                data[id] = "X"
                setCount(++count)
            }
            checkwin();
        }
    }

    const reset = () => {
        data = ["", "", "", "", "", "", "", "", ""]
        setLock(false)
        setCount(0)
        box_array.map((e) => { e.current.innerHTML = "" })
        setWinner(null)
        setDraw(false)
    }
    const checkwin = () => {
        if (data[0] === data[1] && data[1] === data[2] && data[0] !== "") {
            setLock(true)
            setWinner(data[0])
        }
        else if (data[3] === data[4] && data[4] === data[5] && data[3] !== "") {
            setLock(true)
            setWinner(data[3])
        }
        else if (data[6] === data[7] && data[7] === data[8] && data[6] !== "") {
            setLock(true)
            setWinner(data[6])
        }
        else if (data[0] === data[3] && data[3] === data[6] && data[0] !== "") {
            setLock(true)
            setWinner(data[0])
        }
        else if (data[2] === data[5] && data[5] === data[8] && data[2] !== "") {
            setLock(true)
            setWinner(data[2])
        }
        else if (data[1] === data[4] && data[4] === data[7] && data[1] !== "") {
            setLock(true)
            setWinner(data[1])
        }
        else if (data[0] === data[4] && data[4] === data[8] && data[0] !== "") {
            setLock(true)
            setWinner(data[0])
        }
        else if (data[2] === data[4] && data[4] === data[6] && data[2] !== "") {
            setLock(true)
            setWinner(data[2])
        }
        else if (count === 9 && winner === null) {
            setDraw(true)
        }
    }

    return (
        <div>
            <div style={{ width: "100%", margin: "0 auto" }} className='flex justify-center font-bold md:text-5xl text-3xl'>
                <b className=' text-teal-500 md:m-2 mb-5'>** Tic Tac Toe **</b></div>
            {winner && <div className='w3-center text-xl md:text-3xl font-semibold text-blue-600 '>Congratulations {winner} won the game</div>}
            {draw && <div className='text-blue-600 text-xl md:text-3xl w3-center m-4'>Match draw! Play again</div>}
            <div className="box flex justify-center align-middle m-auto">
                <div className="grid grid-rows-3 gap-2 grid-flow-col">
                    <div className=' grid grid-cols-3 gap-2'>
                        <div ref={box1} onClick={(e) => { handleclick(e, 0) }} className='boxes w3-card'></div>
                        <div ref={box2} onClick={(e) => { handleclick(e, 1) }} className='boxes w3-card'></div>
                        <div ref={box3} onClick={(e) => { handleclick(e, 2) }} className='boxes w3-card'></div>
                    </div>
                    <div className=' grid grid-cols-3 gap-2'>
                        <div ref={box4} onClick={(e) => { handleclick(e, 3) }} className='boxes w3-card'></div>
                        <div ref={box5} onClick={(e) => { handleclick(e, 4) }} className='boxes w3-card'></div>
                        <div ref={box6} onClick={(e) => { handleclick(e, 5) }} className='boxes w3-card'></div>
                    </div>
                    <div className=' grid grid-cols-3 gap-2'>
                        <div ref={box7} onClick={(e) => { handleclick(e, 6) }} className='boxes w3-card'></div>
                        <div ref={box8} onClick={(e) => { handleclick(e, 7) }} className='boxes w3-card'></div>
                        <div ref={box9} onClick={(e) => { handleclick(e, 8) }} className='boxes w3-card'></div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'><button onClick={reset} className='mt-5 mb-2 bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded' type='button'>Reset</button></div>
            {(winner || draw) && <div className='flex justify-center'><button onClick={reset} className='mb-2 bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded' type='button'>Play Again</button></div>}
        </div>
    )
}
