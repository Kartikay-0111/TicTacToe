import React, { useRef, useState } from 'react'
import "w3-css/w3.css";
import circle from "../assets/circle.png"
import cross from "../assets/cross.png"
import "./ttt.css"
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
        else if ( count === 9 && winner === null ) {
            setDraw(true)
        }
    }

    return (
        <div>
                <div style={{ width: "50%", margin: "0 auto" }} className='title w3-text-black w3-center'><b>Tic Tac Toe</b></div>
            <div className="box w3-center">
                {winner && <div className='win w3-text-blue '>Congratulations {winner} won the game</div>}
                {draw && <div className='draw w3-text-blue '>Match draw! Play again</div>}
                <div className="bigbox">
                    <div className='w3-row'>
                        <div ref={box1} onClick={(e) => { handleclick(e, 0) }} style={{ height: "10vw", width: "10vw" }} className='boxes w3-card w3-third'></div>
                        <div ref={box2} onClick={(e) => { handleclick(e, 1) }} style={{ height: "10vw", width: "10vw" }} className='boxes w3-card w3-third'></div>
                        <div ref={box3} onClick={(e) => { handleclick(e, 2) }} style={{ height: "10vw", width: "10vw" }} className='boxes w3-card w3-third'></div>
                    </div>
                    <div className='w3-row'>
                        <div ref={box4} onClick={(e) => { handleclick(e, 3) }} style={{ height: "10vw", width: "10vw" }} className='boxes w3-card w3-third'></div>
                        <div ref={box5} onClick={(e) => { handleclick(e, 4) }} style={{ height: "10vw", width: "10vw" }} className='boxes w3-card w3-third'></div>
                        <div ref={box6} onClick={(e) => { handleclick(e, 5) }} style={{ height: "10vw", width: "10vw" }} className='boxes w3-card w3-third'></div>
                    </div>
                    <div className='w3-row'>
                        <div ref={box7} onClick={(e) => { handleclick(e, 6) }} style={{ height: "10vw", width: "10vw" }} className='boxes w3-card w3-third'></div>
                        <div ref={box8} onClick={(e) => { handleclick(e, 7) }} style={{ height: "10vw", width: "10vw" }} className='boxes w3-card w3-third'></div>
                        <div ref={box9} onClick={(e) => { handleclick(e, 8) }} style={{ height: "10vw", width: "10vw" }} className='boxes w3-card w3-third'></div>
                    </div>
                </div>
                <div><button onClick={reset} className='w3-margin-top w3-btn w3-black w3-round w3-large w3-hover-blue' type='button'>Reset</button></div>
                {(winner || draw) && <div><button onClick={reset} className='w3-margin-top w3-btn w3-black w3-round w3-large w3-hover-blue' type='button'>Play Again</button></div>}

            </div>
        </div>
    )
}
