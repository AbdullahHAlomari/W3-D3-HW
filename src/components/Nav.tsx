import React from 'react'

function Nav() {
  return (
    <nav className='nav'>
        <ul className='lis'>
            <li><a href="#">HOME</a></li>
            <li>ABOUT</li>
            <a href="#" className='navbutton'>
                <button>CONTACT</button>
            </a>
        </ul>
    </nav>
  )
}

export default Nav
