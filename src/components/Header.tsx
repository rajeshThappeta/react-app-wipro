import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className='bg-secondary text-white'>
      {/* navbar with  links to components */}
      <ul className='nav justify-content-end py-3 '>
        <li className='nav-item '>
            <Link to="/" className='nav-link text-white'>Home</Link>
        </li>
        <li className='nav-item'>
            <Link to="/register" className='nav-link text-white'>Register</Link>
        </li>
        <li className='nav-item'>
            <Link to="/login" className='nav-link text-white'>Login</Link>
        </li>
        <li className='nav-item'>
            <Link to="/technologies" className='nav-link text-white'>Technologies</Link>
        </li>
        <li className='nav-item'>
            <Link to="/users" className='nav-link text-white'>Users</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header