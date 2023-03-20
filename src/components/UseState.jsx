import { useState } from "react";

const UseState = () => {
    const [name, setName] = useState('Trishan Wagle')
    const [age, setAge] = useState(17)

    const changeDetails = () => {
        setName('Salman Khan')
        setAge(55)
    }

    const revertDetails = () => {
        setName('Trishan Wagle')
        setAge(17)
    }

    const increaseAge = () => {
        setAge(age + 1)
    }

    const decreaseAge = () => {
        setAge(age - 1)
    }

    return (
        <div className="home-section usestate">
            <h2 className="head">useState Practice</h2>
            <p className="name">{name} is {age} years old.</p>
            <div className="button">
                <button className="btn" onClick={changeDetails}>Click Me to Change Details</button>
                <button className="btn revert" onClick={revertDetails}>Click Me to Revert Details</button>
            </div>
            <div className="button">
                <button className="btn revert inc" onClick={increaseAge}>Increase Age</button>
                <button className="btn revert" onClick={decreaseAge}>Decrease Age</button>
            </div>

        </div>
    );
}

export default UseState;