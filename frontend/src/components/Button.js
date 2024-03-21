import React from 'react'
import PropTypes from 'prop-types'

const button = ({color,text,onClick}) => {

  return (
    <button onClick={onClick} style={{backgroundColor: color}} 
    className='btn'>
        {text}
    </button>
  )
}

button.defaultProps = {
    color: 'steelblue'
}

button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
};

export default button