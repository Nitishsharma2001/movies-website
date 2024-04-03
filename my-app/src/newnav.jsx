import React, { useEffect, useState } from 'react'
import Nav from './nav'
import Nnav from './Nnav'


function Newnav() {
    const[windowDimension, detectHw] = useState({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
    })
    const Detectsize = () => {
        detectHw({
            winWidth: window.innerWidth,
            winHeight: window.innerHeight,
        })

        useEffect(() => {
            window.addEventListener('resize', Detectsize)

            return () => {
                window.removeEventListener('resize', Detectsize)
            }
        }, [windowDimension])
    }
    return ( windowDimension.winWidth>1000 ? <Nav/> :<Nnav/>)
}
export default Newnav 