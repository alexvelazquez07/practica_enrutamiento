import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navegar = () => {
    return (
        <div className='bg-info'>
            <h2> Barra Navegacion</h2>
            <NavLink to="/home">Home</NavLink>
            <Link to="/about"> Sobre mi</Link>
        </div>
    )
}

export default Navegar