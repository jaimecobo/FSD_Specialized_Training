
// TRYING TO MAKE IT RUN DIRECTLY WITH ReactDOM... WORK IN PROGRESS!

// import ReactDOM from 'react-dom'
import React, { useEffect, useState } from 'react'
const e = React.createElement;
function Clock() {
    const [clockState, setClockState] = useState()

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        }, 1000);
        
    }, []);
    
    
    
    return (
        <div>
            {clockState}
        </div>
    )
}

export default Clock
// const domContainer = document.querySelector('#Clock');
// ReactDOM.render(e(Clock), domContainer);
