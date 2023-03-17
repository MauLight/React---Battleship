import React from "react";
import "../styles/styles.css";

const Board = () => {

    const blocks = [];
    const width = 10;
    const boardSize = width * width;

    for (let i = 0; i < boardSize; i++) {
        blocks.push(
            <div className="game-block" key={i} id={i}>hi</div>
        )
    };

    console.log(blocks);

    return (
        <div className="container">
            <div className="row game-board">
                {
                    blocks.map((block) => {
                        return block;
                    })
                }
            </div>
        </div>
    )
}

export default Board;