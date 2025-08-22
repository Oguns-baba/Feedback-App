
import PropTypes from 'prop-types'

import React, { version } from 'react'

 function Button({children, version, type, isDisabled}) {
  return (
    <button type={type} disabled= {isDisabled} className={`btn btn-${version}`} >
        {children}
    </button>
  )
}

Button.defautProps = {
    version: 'primary',
    type: 'button',
    isDisabled: 'false'

}

Button.propTypes = {
    children: PropTypes.string,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,

}

export default Button

