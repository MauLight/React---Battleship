import React from "react";

const Ships = () => {
    const shipsArr = [
        <div id="0" class="destroyer-preview destroyer" draggable="true"></div>,
        <div id="1" class="submarine-preview submarine" draggable="true"></div>,
        <div id="2" class="cruiser-preview cruiser" draggable="true"></div>,
        <div id="3" class="battleship-preview battleship" draggable="true"></div>,
        <div id="4" class="carrier-preview carrier" draggable="true"></div>
    ]

    return (
        <div className="option-container">
            {
                shipsArr.map((ship) => {
                    return ship;
                })
            }
        </div>
    )
};

export default Ships;