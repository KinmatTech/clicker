import Button from './components/button';
import { useState } from 'react';

function App() {
        const [counter, setCounter] = useState(0);

        const incrementCounter = () => {
        setCounter((prevCounter) => prevCounter + 1);
        };
        
               
        return (
        <div>
        <Button className="btn" data-testid="increment" onClick={incrementCounter}>
        +
        </Button>
        <p data-testid="counter">{counter}</p>
        
        </div>
        );
        };
        

export default App;