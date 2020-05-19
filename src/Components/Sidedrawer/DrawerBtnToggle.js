import React from 'react'
import Sidedrawer from './DrawerBtnToggle.css' 

const drawerBtnToggle = (props) => {
    return (
        <div className= 'mydrawer'>
            <div className="hamburger">
                <button onClick={props.click}> 
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    )
}

export default drawerBtnToggle