import { useState } from 'react';
import Login from './Login'

const Conditional = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const conditionalRender = () => {
        return isLoggedIn ? <Login /> : <button className="btn" onClick={() => { setIsLoggedIn(true) }}>Login</button>
    }

    return (
        <div className="home-section usestate">
            <h2 className="head">Conditional Rendering</h2>
            {conditionalRender()}
        </div>
    );
}

export default Conditional;