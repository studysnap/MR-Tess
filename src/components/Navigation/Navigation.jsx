import React from "react"
import { Link,NavLink } from "react-router-dom"
import AdUnit from "../../Ads"

function Navigation() {

    return (
        <>
            <div className="main flex justify-center items-center h-[93vh] w-full">
                {/* <AdUnit/> */}
                <div className="continer">
                    <Link to="quizter">
                    <div className="box bg-[rgba(240,248,255,0.097)] border-2 border-white-500 box-border rounded-lg h-10 m-2 p-4 flex justify-start items-center font-bold cursor-pointer w-52 text-xs" id="project_2">Event 1: Quizter</div>
                    </Link>
                    <Link to="matrix_breakout">
                    <div className="box bg-[rgba(240,248,255,0.097)] border-2 border-white-500 box-border rounded-lg h-10 m-2 p-4 flex justify-start items-center font-bold cursor-pointer w-52 text-xs" id="project_3">Event 2: Matrix Breakout</div>
                    </Link>
                    <Link to="puzzle_hunt">
                    <div className="box bg-[rgba(240,248,255,0.097)] border-2 border-white-500 box-border rounded-lg h-10 m-2 p-4 flex justify-start items-center font-bold cursor-pointer w-52 text-xs" id="project_4">Event 3: Puzzle-Hunt </div>
                    </Link>
                    <Link to="enigma">
                    <div className="box bg-[rgba(240,248,255,0.097)] border-2 border-white-500 box-border rounded-lg h-10 m-2 p-4 flex justify-start items-center font-bold cursor-pointer w-52 text-xs" id="project_1">Event 4: Enigma</div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navigation