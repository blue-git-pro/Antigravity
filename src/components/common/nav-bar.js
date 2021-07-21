import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Button, Popover, Avatar, Menu, Layout } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'

import { PUBLIC_PATHS, ROOT_PATH } from 'constants/paths'
import { FixedWidthLayout } from 'containers/layout'
import { getIsReady } from 'store/selectors/app'
import { GLOBAL } from 'constants/app'
import { getVisitorPhoto } from 'store/selectors/accounts'
import { avatarURL } from 'utils/url'
import logoImg from "../../assets/images/common/LogoFullWhite.png"
import AppsIcon from "components/svg/apps";
import { HomeNav, RightMenu } from "components/common"

import { useTranslation } from 'react-i18next';

const NavBar = ({ 
  children, 
  popOverContent,
  isAppReady,
  userPhoto
}) => {
  const { pathname } = useLocation()
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [showRightMenu, setShowRightMenu] = useState(false);
  const [blur, setBlur] = useState('');

  const [t, i18n] = useTranslation('translation');
  const [lang, setLang] = useState('en');

  return (
    <>
      <Layout.Header className="nav-header">
        <FixedWidthLayout className="nav-bar">
          <div className="logo">
            <Link to={ROOT_PATH}><img src={logoImg} className='logo-image' /></Link>
          </div>
          <div className='nav-home' onMouseOver={() => (setIsMouseOver(true))} onMouseLeave={() => (setIsMouseOver(false))}>
              <AppsIcon />
              <HomeNav/>
          </div>
          <Menu mode="horizontal" className="nav-menu" selectedKeys={[pathname]}>
            {children}
          </Menu>        

          <div className="nav-right-container">
            {popOverContent && isAppReady &&
              <Popover placement="bottomRight" content={popOverContent} trigger="click">
                <Button className="nav-avatar-button" shape="circle">
                  <Avatar src={avatarURL(userPhoto)} />
                </Button>
              </Popover>
            }
            <Menu mode="horizontal" className='nav-right-menu'>
              <Menu.Item key={PUBLIC_PATHS.LOGIN}>
                <Link to={PUBLIC_PATHS.LOGIN}>{t("menu.Login")}</Link>
              </Menu.Item>
              <Menu.Item key={PUBLIC_PATHS.REGISTER}>
                <Link className='menu-register' to={PUBLIC_PATHS.REGISTER}>{t("menu.Register")}</Link>
              </Menu.Item>
              <Menu.Item key={PUBLIC_PATHS.LANG}>
                <Link to={PUBLIC_PATHS.LANG} onClick={()=>{
                    let newLang = lang=='en'?'sp':'en'
                    i18n.changeLanguage(newLang)
                    setLang(newLang)
                }}>{t("menu.language")}</Link>
              </Menu.Item>
            </Menu>
            
          </div>
          
        </FixedWidthLayout>
        <div className = {`${blur} menu-close`.trim()} onClick={() => {
          setShowRightMenu(false)
          setBlur('');
          document.getElementById('toggle-menu').classList.toggle('change')
        }}></div>
        {showRightMenu && <RightMenu/>}
        <div className='hamberger-menu-icon'>
          <div className='container' id='toggle-menu' onClick={()=> {
              document.getElementById('toggle-menu').classList.toggle('change')
              setShowRightMenu( showRightMenu==true?false:true )
              setBlur( showRightMenu==true?'':'blur')
            }}>
            <div className='bar1'></div>
            <div className='bar2'></div>
            <div className='bar3'></div>
          </div>
        </div>
      </Layout.Header>
      {/* <HomeNav isOverIcon={isMouseOver} onMouseOver={() => (setIsMouseOver(true))} onMouseLeave={() => (setIsMouseOver(false))}/> */}
      
      <div className="nav-header-empty"/>
    </>
  )
}

export default connect(
  createStructuredSelector({
    isAppReady: getIsReady,
    userPhoto: getVisitorPhoto,
  })
)(NavBar)