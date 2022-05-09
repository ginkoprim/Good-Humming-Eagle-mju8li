import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Good Humming Eagle</title>
        <meta property="og:title" content="Good Humming Eagle" />
      </Helmet>
    </div>
  )
}

export default Home
