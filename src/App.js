import React from 'react';
import './App.css';
import Toolbar from './Components/Toolbar/Toolbar'
import Sidedrawer from './Components/Sidedrawer/Sidedrawer'
import Backdrop from './Components/Backdrop/Backdrop'

function App () {
  const [state, setState] = React.useState({
    sideDrawerOpen: false
  })

  // we cant use sideDrawerOpen: true because we rely on the previous state
  const toggleBtnHandler = () => {
    setState((prevState) => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen
      }
    })
  }

  // This doesnt rely on initial state
  const backDropHandler = () => {
    setState((prevState) => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen
      }
    })
  }

  return (
    <div className="App" style= {{width: '100%', height: '100%'}}>
      <Toolbar btnHandler = {toggleBtnHandler}/>
      <main>
        <Sidedrawer show = {state.sideDrawerOpen} />
        {state.sideDrawerOpen ?
        <div>
          <Backdrop backDropBtn = {backDropHandler} />
        </div> : ''}
          
      </main>
    </div>
  );
}


// function App() {
  
export default App;
