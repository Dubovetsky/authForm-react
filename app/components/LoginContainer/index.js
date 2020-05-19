//import React from 'react'
import { connect } from 'react-redux'
import { logIn } from '../../actions'
import Login from '../Login'

const mapStateToProps = state => ({
  errorMsg: state.session ? state.session.errorMsg : undefined,
})

const mapDispatchToProps = dispatch => ({
  logIn: (params, cb) => dispatch(logIn(params, cb)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)