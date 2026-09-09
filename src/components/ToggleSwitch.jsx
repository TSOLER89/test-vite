import { useState } from 'react';

function ToggleSwitch() {
    const [on, setOn] = useState(false);

    return (
        <div
            className={`toggle-switch ${on ? 'on' : 'off'}`}
            onClick={() => setOn(!on)}
            role="button"
            tabIndex={0}
            aria-pressed={on}
        >
            <div
                className={`toggle-knob ${on ? 'on' : 'off'}`}
            />
        </div>
    );
}



export default ToggleSwitch;