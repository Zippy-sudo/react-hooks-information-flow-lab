import React from 'react'

function Header({onDarkModeClick, currentState}) {
  return (
    <header>
    <h2>Shopster</h2>
    <button onClick={onDarkModeClick}>
        {currentState ? "Dark" : "Light"} Mode
    </button>
  </header>
  )
}

export default Header