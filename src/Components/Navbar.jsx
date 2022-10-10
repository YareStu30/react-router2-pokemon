import { NavLink } from 'react-router-dom'

export default function Navbar () {

  const setActiveClass = ({ isActive }) => (isActive ? 'active' : "no-active")

  return (
    <nav>
    <div>
    <img src='https://img.icons8.com/color/344/pokeball-2.png'width="50px" className='pokeIcon' alt='pokemon'/> 
      <NavLink className={setActiveClass} end to='/'>
      <img src='https://cdn-icons-png.flaticon.com/512/189/189000.png'width="50px"  alt='pokemon snorlax'/> 
        Home
      </NavLink>
      {' - '}
      <NavLink className={setActiveClass} to='/pokemones'>
      <img src='https://cdn-icons-png.flaticon.com/512/189/189001.png'width="50px"  alt='pokemon psyduck' />
        Pokémon
       
      </NavLink>
      
    </div>
    </nav>
  )
}

