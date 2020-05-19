import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

class LinkBtn extends React.Component {
  render(){
    return (
      <Link to={this.props.to}>
        <Button variant="outlined" color="primary">
          <span>{this.props.label}</span>
        </Button>
      </Link>
    )
  }
}

LinkBtn.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default LinkBtn