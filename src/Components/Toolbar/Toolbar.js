import React from 'react' 
import Toolbar from './Toolbar.css'
import DrawerBtnToggle from '../Sidedrawer/DrawerBtnToggle'


// You are a programmer so think like one
const toolbar = (props) => {



    return (
        <div className = 'toolbar'>
            <nav className = 'toolbar-nav'>
            <DrawerBtnToggle click = {props.btnHandler} />
            <div className="logo"><a href="/" >THE LOGO</a></div>
            <div className="spacer"></div>
                <ul className='toolbar-ul'>
                    <li><a href="/">Product</a></li>
                    <li><a href="/">User</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default toolbar ;