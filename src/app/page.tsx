"use client"

import Block from "@/lib/blocks";
import React from "react";

const components = []

function newBlock(name) {
    const [selected, setSelected] = React.useState<boolean>(false);
    components.push({
        component: <Block name={name} key={`${components.length}`} selected={selected} setSelected={setSelectedGenerator(setSelected)}></Block>,
        selected: selected,
        setSelected: setSelected,
    })
}

function setSelectedGenerator(setSelected) {
    function inner(selected: boolean) {
        for (const i of components) {
            i.setSelected(false);
        }
        setSelected(selected)
    }
    return inner
}

export default function Home() {
    components.length = 0
    newBlock("test")
    newBlock("test2")
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            {components.length ? components.map((a) => a.component) : "loading"}
        </div>
    );
}
