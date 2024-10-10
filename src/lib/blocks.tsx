"use client"

import Draggable, {DraggableCore} from "react-draggable";
import React from "react";


export default function Block({name, selected, setSelected}: {
    name: string,
    selected: boolean,
    setSelected: React.Dispatch<React.SetStateAction<boolean>>
}) {
    return <Draggable>
        <div style={{
            position: "absolute",
            width: 100,
            height: 100,
            backgroundColor: selected ? "red" : "blue",
            zIndex: 100,
            fontSize: 20,
            textAlign: "center",
        }}
             onDoubleClick={() => setSelected(!selected)}><p style={{
            color: "white",
            verticalAlign: "middle",
            display: "inline-block",
            height: "100%"
        }}>{name}</p></div>
    </Draggable>
}