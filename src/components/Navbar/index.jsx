import './styles.scss';
import {Link} from 'react-router-dom'
 
export function Navbar() {
  return(
    <nav className='navbar'>
      <container>
           <ul className='list'>
              <li  className='item'> <Link to='/GestaoDeTi'>Toma</Link></li>
              <li className='item'> <Link to='/GestaoDeTi'>karen</Link></li>
              <li className='item'> <Link to='/GestaoDeTi'>Toma</Link></li>
           </ul>
        </container>
      </nav>
  )
}