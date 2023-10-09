import AnimalShow from './AnimalShow';
import { useState } from 'react';
import './App.css';

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']

    return animals[Math.floor(Math.random() * animals.length)]
}

function App(){
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        // Updates a piece of state (must use setAnimals)
        // Creates a new array and takes exisiting elements and puts it into a new array
        setAnimals([...animals, getRandomAnimal()])
    };

    // Transform each element in the array into a component
    // Map function takes every element out of the array and pass it into a transformation function
    // 
    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key= {index} />
    });

    return (
        <div className = "app">
            {/* Line below is another way of defining the function with a reference*/}
            {/* onClick = {() => console.log('Button was clicked')} */}
            <button onClick = {handleClick}>Add Animal</button>
            <div className = "animal-list">{renderedAnimals}</div>
        </div>
    );
}

export default App;