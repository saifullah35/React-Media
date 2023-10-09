import { useState } from 'react';


function App(){
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <button onClick = {handleClick}>Add Animal</button>
            {/* Line below is another way of defining the function with a reference*/}
            {/* onClick = {() => console.log('Button was clicked')} */}

            <div>Number of animals: {count} </div>
        </div>
    );
}

export default App;