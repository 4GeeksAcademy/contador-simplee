import React, { useState, useEffect } from 'react';

function SimpleCounter({ digitFour, digitThree, digitTwo, digitOne }) {
    return (
        <div className="bigCounter">
            <div className="calendar">
                <i className="far fa-clock"></i>
            </div>
            <div className="four">{digitFour}</div>
            <div className="three">{digitThree}</div>
            <div className="two">{digitTwo}</div>
            <div className="one">{digitOne}</div>
        </div>
    );
}

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => (typeof prevCount === "number" ? prevCount + 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <SimpleCounter 
            digitFour={isNaN(count) ? 0 : Math.floor(count / 1000)} 
            digitThree={isNaN(count) ? 0 : Math.floor(count / 100) % 10} 
            digitTwo={isNaN(count) ? 0 : Math.floor(count / 10) % 10} 
            digitOne={isNaN(count) ? 0 : count % 10} 
        />
    );
}

export default App;
