import React from "react";

const Result=({score,playAgain})=>(
    <div className="score-board">
        <div className="score">You scored {score}/10 correct answer!</div>
        <button className="playBtn" onClick={playAgain}>play Again</button>

    </div>
);
export default Result