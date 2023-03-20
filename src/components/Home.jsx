import { useState } from "react";

const Home = () => {
    const [name, setName] = useState('Trishan Wagle')
    const [age, setAge] = useState('17')

    const changeDetails = (e) => {
        setName('Salman Khan')
        setAge('50')
    }

    return (
        <div className="home-section">
            <p className="name">Name: {name}</p>
            <p className="name age">Age: {age}</p>
            <button className="btn" onClick={() => { changeDetails() }}>Click Me to Change Name</button>
        </div>
    );
}

export default Home;