import React, { useState, useEffect } from 'react';
import SimpleCounter from './SimpleCounter'; // Importamos el componente

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        return () => clearInterval(interval); // Limpiar el intervalo al desmontar
    }, []);

    return (
        <div>
            <SimpleCounter 
                digitFour={Math.floor(count / 1000)} 
                digitThree={Math.floor(count / 100) % 10} 
                digitTwo={Math.floor(count / 10) % 10} 
                digitOne={count % 10} 
            />
        </div>
    );
}

export default App;
