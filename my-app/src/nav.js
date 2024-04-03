import React from 'react'
import nav from './nav.css'
import Barcontent from './barcontent'
import Social from './social'
import logo from './logo.svg'

function Nav() {
    return (
        <>
            <nav>
                <div>
                <h1 className='logo1'>Mov<span className='logo2'>Corn</span></h1>
                </div>
               
                <Barcontent />
                <Social />
            </nav>
        </>
    )
}

export default Nav


