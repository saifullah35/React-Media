function App(){
    const handleClick = () => {
        console.log('Button was clicked!')
    };

    return (
        <div>
            {/*  */}
            {/* {() => console.log('Button was clicked')} */}
            <button onClick = {handleClick}>Add Animal</button>
            {/* Line below is another way of defining the function with a reference*/}
            {/* onClick = {() => console.log('Button was clicked')} */}
        </div>
    );
}

export default App;