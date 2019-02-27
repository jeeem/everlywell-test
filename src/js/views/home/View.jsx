import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import LazyLoading from '../../common/components/LazyLoading'
import { actions as homeActions } from '../../redux/modules/home'
import { homeSelector } from '../../redux/selectors/homeSelector'

require('../../../style/index.css')

const LazyHome = LazyLoading(() => import('../../common/components/Home/Home'))

const mapStateToProps = (state) => ({
  home: homeSelector(state),
})

const mapDispatchToProps = {
  ...homeActions,
}

@connect(mapStateToProps, mapDispatchToProps)
class HomeView extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
  }

  componentDidMount() {
    const { getFiveRecipes, home } = this.props
    const { recipes } = home;
    if (!recipes) {
      getFiveRecipes();
    }
  }

  render() {
    return (
      <Fragment>
        <LazyHome {...this.props} />
      </Fragment>
    )
  }
}

export default HomeView
