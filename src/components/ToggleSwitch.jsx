import { useState } from 'react';

function ToggleSwitch() {
    const [on, setOn] = useState(false);

    return (
        <div
            onClick={() => setOn(!on)}
            style={{
                width: 60, height: 30, borderRadius: 15,
                background: on ? "#02C39A" : "#ccc",
            }}
        >
            <div
                style={{
                    width: 26, height: 26, borderRadius: "50%",
                    background: "white", margin: 2,
                    transform: on ? "translateX(30px)" : "translateX(0)",
                }}
            />
        </div>
    );
}



export default ToggleSwitch;