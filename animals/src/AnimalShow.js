import './AnimalShow.css';
import { useState } from 'react';
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';

const svgMap = {
    //object when key is identical to the value
    bird,  // equivalent to bird: bird
    cat,
    cow,
    dog,
    gator,
    horse
};

// Pass down a prop called type
function AnimalShow({ type }) {
    // Track the number of clicks
    const [clicks, setClicks] = useState(0);

    //Watch for click events (in this case, its the div below)
    const handleClick = () => {
        setClicks(clicks + 1);
    };

    return(
        <div className="animal-show" onClick={handleClick}>
            <img className= "animal" alt="animal" src={svgMap[type]} />
            <img className= "heart" alt="heart" src={heart} 
            style = {{width: 10 + 10 * clicks + 'px'}} // One set to indicate we're writing JS, second set to indicate we are creating an object
            /> 
        </div> 
    );  
}

export default AnimalShow;

