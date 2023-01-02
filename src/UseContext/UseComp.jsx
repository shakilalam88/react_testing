import React from "react";
import NoteContext from "./NoteContext";

const UseComp = (props) => {
    const sdata = {
        "name": 'shakil',
        'class': '33'
    }
    return (
        <>
            <NoteContext.Provider value={sdata}>
                <h1>hi  </h1>
            </NoteContext.Provider>
        </>
    )
}

export default UseComp