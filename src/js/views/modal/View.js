import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import LazyLoading from '../../common/components/LazyLoading'
import { actions as modalActions } from '../../redux/modules/modal'
import { modalSelector } from '../../redux/selectors/modalSelector'

require('../../../style/index.css')

const LazyModal = LazyLoading(() => import('../../common/components/Modal/Modal'))

const mapStateToProps = (state) => ({
  modal: modalSelector(state),
})

const mapDispatchToProps = {
  ...modalActions,
}

@connect(mapStateToProps, mapDispatchToProps)
class ModalView extends Component {
  static propTypes = {
    modal: PropTypes.object.isRequired,
  }

  componentDidMount() {
    const { getModalRecipe, modal } = this.props
    const { recipe } = modal;
    getModalRecipe('Chelsea Buns');
  }

  render() {
    return (
      <Fragment>
        <LazyModal {...this.props} />
      </Fragment>
    )
  }
}

export default ModalView
