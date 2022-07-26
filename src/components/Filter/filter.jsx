import React from 'react';
import PropTypes from 'prop-types';
import css from './filter.module.css'

export default function Filter({ value, onChange  }) {
 return(<label>Find contacts
  <input className={css.input} type="text" value={value} onChange={ onChange}></input>
</label>)
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};