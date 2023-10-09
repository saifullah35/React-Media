import { useState } from 'react';

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']

    return animals[Math.floor(Math.random() * animals.length)]
}

function App(){
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        //Updates a piece of state (must use setAnimals)
        //Creates a new array and takes exisiting elements and puts it into a new array
        setAnimals([...animals, getRandomAnimal()])
    };

    return (
        <div>
            <button onClick = {handleClick}>Add Animal</button>
            {/* Line below is another way of defining the function with a reference*/}
            {/* onClick = {() => console.log('Button was clicked')} */}

  
        </div>
    );
}

export default App;