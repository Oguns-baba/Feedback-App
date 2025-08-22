
import PropTypes from 'prop-types'

import React, { version } from 'react'

 function Button({children, version= primary, type='button', isDisabled = 'false'}) {
  return (
    <button type={type} disabled= {isDisabled} className={`btn btn-${version}`}>
        {children}
    </button>
  )
}



Button.propTypes = {
    children: PropTypes.string,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,

}

export default Button

