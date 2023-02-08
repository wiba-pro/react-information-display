import React, { useState } from 'react'

export default function Egs() {
    const [val, setVal] = useState(9)
    return (
        <div>
            <p>{val}</p>
            <button onClick={() => setVal(val + 1)}></button>
            <button onClick={() => setVal(val - 1)}></button>
        </div>
    )
}
