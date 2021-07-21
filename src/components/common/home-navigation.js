import react, {useEffect, useState} from 'react'

import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import navImg from "../../assets/images/common/nav-image.jpeg"

const automotiveData = [
  {
    label: 'Model Alpha'
  },
  {
    label: 'Model Beta'
  },
  {
    label: 'Model Gamma'
  },
  {
    label: 'Model Pi'
  }
]
const spaceData = [
  { 
    label: 'Model Galileo'
  },
  {
    label: 'Model Kepler'
  },
  {
    label: 'Model Newton'
  },
  {
    label: 'Model Corpernico'
  },
  {
    label: 'Model Einstein'
  }
]

const educationData = [
  { 
    label: 'Latest News'
  },
  {
    label: 'Latest Images'
  },
  {
    label: 'Latest Videos'
  },
  {
    label: 'Astrophysics'
  },
  {
    label: 'Physics'
  }
]
const shopData = [
  { 
    label: 'Shirts'
  },
  {
    label: 'T-Shirts'
  },
  {
    label: 'Pulloever'
  },
  {
    label: 'Stylos'
  },
  {
    label: 'Watches'
  },
  {
    label: 'Telescopes'
  }
]

const HomeNav = ({isOverIcon}) => {
  const [isOverNav, setIsOverNav] = useState(true);
  useEffect(() => {
    console.log(isOverIcon, isOverNav)
  })
  return /* (isOverIcon || isOverNav ) && */ (
    <div className='home-navigation' id='home-nav' onMouseOver={() => (setIsOverNav(true))} onMouseLeave={() => (setIsOverNav(false))}>
      <div className='home-nav-top'>
        <h1>Home</h1>
        <div className='home-search-nav'>
          <Input size="large" className='search-bar' placeholder="" prefix={<SearchOutlined />} />
        </div>
      </div>
      <div className='home-nav-bottom'>
        <div className='home-nav-bottom-left'>
          <ul className='list-items'>
            <div className='list-header'>Automotive</div>
            <hr/>
            {automotiveData.map(item => (<li ><a>{item.label}</a></li>))}
          </ul>
          <ul className='list-items'>
            <div className='list-header'>Space</div>
            <hr/>
            {spaceData.map(item => (<li ><a>{item.label}</a></li>))}
          </ul>
          <ul className='list-items'>
            <div className='list-header'>Education</div>
            <hr/>
            {educationData.map(item => (<li ><a>{item.label}</a></li>))}
          </ul>
          <ul className='list-items'>
            <div className='list-header'>Shop</div>
            <hr/>
            {shopData.map(item => (<li ><a>{item.label}</a></li>))}
          </ul>

        </div>
        <div className='home-nav-bottom-right'>
          <img src={navImg} className='nav-img' />
        </div>
      </div>
    </div>
  )
}

export default HomeNav;
