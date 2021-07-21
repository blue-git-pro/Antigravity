import { useRouteMatch, Link } from 'react-router-dom'

const NavLink = ({ to, children }) => {
  const match = useRouteMatch({
    path: to,
    exact: to == '/'
  })  
  
  return (
    <li className={match ? "active": ""}>
      <Link to={to}>{children}</Link>
    </li>
  )
}

export default NavLink