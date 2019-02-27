import React from 'react'
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom'

import LazyLoading from 'common/components/LazyLoading'

import styles from '../style/index.css'

// This is show case how you can lazy loading component
const HomeRouteHandler = LazyLoading(() => import('views/home'))
const ModalRouteHandler = LazyLoading(() => import('views/modal'))
const Header = LazyLoading(() => import('common/components/Header/Header'))

// This show case how you can access routing info in your component
const HeaderWithRouter = withRouter((props) => <Header {...props} />)

module.exports = (
  <div className={styles.container}>
    <HeaderWithRouter />
    <div className={styles.content}>
      <Switch>
        <Route exact path="/" component={HomeRouteHandler} />
        <Route path="*" component={ModalRouteHandler} />
      </Switch>
    </div>
  </div>
)
