import React from 'react'

export const HamburgerButton = (props) => {
  return (
    <div>
        <div className='hamburger-btn' onClick={props.click}>
                <img className="btn" src='menu (1).png' alt='menu icon'/><span className='all'>All</span>
        </div>
    </div>
  )
}
