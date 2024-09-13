import {Link,Outlet} from 'react-router-dom'

function Technologies() {
  return (
    <div>
       <h1 className="display-3 text-success text-center">Technologies</h1>
      
      {/* navbar with  links to components */}
      <ul className='nav justify-content-center py-3  display-5'>
        <li className='nav-item '>
            <Link to="java" className='nav-link text-primary'>Java</Link>
        </li>
        <li className='nav-item'>
            <Link to="nodejs" className='nav-link text-primary'>Nodejs</Link>
        </li>
        <li className='nav-item'>
            <Link to="vue" className='nav-link text-primary'>VueJS</Link>
        </li>
       
      </ul>

      {/* component placeholder */}
      <Outlet />
    </div>
  )
}

export default Technologies