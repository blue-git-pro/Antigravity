
import React from 'react'
import { Hero, Custom, CoreValue, MeetTheTeam, Partner, FeaturedWorks } from 'components/home'
import { Contact } from 'components/common'

import { useTranslation } from 'react-i18next';

const Home = () => {
  const [t, i18n] = useTranslation('translation');
  return (
    <div className="page-home">
      <div className="home-text">
        <h1>{t("The Future is Now")}</h1>
        <h2>{t("Next Generation of Transportation")}</h2>
        <h3>{t("The First Tokenized Space Travel Agency")}</h3>
      </div>
    </div>
  )
}

export default Home