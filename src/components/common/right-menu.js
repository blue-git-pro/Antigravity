import react from 'react'
import { PUBLIC_PATHS, ROOT_PATH } from 'constants/paths'

const menuList = [
  {
    label: 'Projects'
  },{
    label: 'Token'
  },{
    label: 'Partners'
  },{
    label: 'News'
  }
]

const RightMenu = ({}) => (
  <div className='right-menu'>
    <div className='menu-background'>

    </div>
    <div className='menu-navigation'>
      <ul className='menu-list'>
        {menuList.map((menuItem)=>(<li className='list-item primary'><a>{menuItem.label}</a></li>))}
        <li className='list-item secondary'><a>{`Services ›`}</a></li>
        <li className='list-item secondary'><a>Log in</a></li>
        <li className='list-item secondary'><a>Register</a></li>
      </ul>
    </div>
  </div>
)

export default RightMenu