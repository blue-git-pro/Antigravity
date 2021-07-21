import React, { useState } from "react";
import { Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Layout, Menu } from "antd";

import { NavBar, Footer } from "components/common";
import { PUBLIC_PATHS, ROOT_PATH } from "constants/paths";
import AppsIcon from "components/svg/apps";

import { useTranslation } from 'react-i18next';

const popOverContent = (
  <div>
    <p>
      <Link to={PUBLIC_PATHS.PROFILE}>Profile</Link>
    </p>
    <p>
      <Link to={ROOT_PATH}>Sign out</Link>
    </p>
  </div>
);

const Public = ({ route }) => {
  const [t, i18n] = useTranslation('translation');
  const [lang, setLang] = useState('en');

  return (
    <Layout>
      <NavBar popOverContent={popOverContent}>
        
        <Menu.Item key={PUBLIC_PATHS.PROJECTS}>
          <Link to={PUBLIC_PATHS.PROJECTS}>{t("menu.Projects")}</Link>
        </Menu.Item>
        <Menu.Item key={PUBLIC_PATHS.TOKEN}>
          <Link to={PUBLIC_PATHS.TOKEN}>{t("menu.Token")}</Link>
        </Menu.Item>
        <Menu.Item key={PUBLIC_PATHS.PARTNERS}>
          <Link to={PUBLIC_PATHS.PARTNERS}>{t("menu.Partners")}</Link>
        </Menu.Item>
        <Menu.Item key={PUBLIC_PATHS.NEWS}>
          <Link to={PUBLIC_PATHS.NEWS}>{t("menu.News")}</Link>
        </Menu.Item>
      </NavBar>

      <Layout.Content className="page-content">
        {renderRoutes(route.routes)}
      </Layout.Content>
    </Layout>
  );
};

export default Public;
