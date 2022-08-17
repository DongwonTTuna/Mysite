import React from 'react'
import '../static/css/nav.css'
export default function (){
    return (
        <nav>
            <h1 onClick={()=>console.log('a')}>profile</h1>
            <h1>skills</h1>
            <h1>works</h1>
        </nav>
    )
}