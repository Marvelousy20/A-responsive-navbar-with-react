import React from 'react'
import sidedrawer from './Sidedrawer.css'

const sideDrawer = (props) => {
    let sideClasses = 'sidedrawer' ;

    // We now depend on css to change the position of our sidedrawer.
    // By default it moves to the left by 100%
    // When the button is clicked, the class 'open' is added and it moves to it's 
    // slides to its default position.
    if(props.show) {
        sideClasses = 'sidedrawer open'
    }
    return (
        <div className = {sideClasses} >   
            <ul className='sidedrawer-ul'>
                <li className='sidebar-list'><a href="/">Product</a></li>
                <li className='sidebar-list'><a href="/">User</a></li>
            </ul>
        </div>
    )
}

export default sideDrawer