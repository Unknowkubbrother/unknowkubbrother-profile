import { Link } from 'react-router-dom'
import './css/navbar.css'

function navbar() {
  return (
    <nav>
      <Link to='/' className="logo cursor-pointer"><img src="logo.png" alt="" width={70} height={70}/></Link>
        <ul className='text-white'>
            <li><Link to='/home' style={{ textDecoration: 'none' }}>Home</Link></li>
            <li><Link to='/Blog' style={{ textDecoration: 'none' }}>Blog</Link></li>
        </ul>
    </nav>
  )
}

export default navbar