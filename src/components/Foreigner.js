import React from 'react'
import PropTypes from 'prop-types';

export default function Foreigner(props) {
  return (
    <>
    {props.name}
    </>
  )
}

Foreigner.propTypes={
    name:PropTypes.string.isRequired,
}

Foreigner.defaultProps={
    name:'Set Name here',
};