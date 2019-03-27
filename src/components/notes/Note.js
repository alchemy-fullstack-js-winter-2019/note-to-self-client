import React from 'react';
import PropTypes from 'prop-types';

function Note({ body, handleSubmit, schedule, checkboxLabel, checkboxValue, handleCheckbox, _id }) {
  return (
    <section>
      {handleSubmit && <form onSubmit={handleSubmit.bind(null, _id)}>
        <label htmlFor={checkboxLabel}>{checkboxLabel}</label>
        <input onChange={handleCheckbox} type="checkbox" name={checkboxLabel} value={checkboxValue}/>
        <button>{checkboxLabel}</button>
      </form>}
      <h3>{body}</h3>
      {schedule && <p>This is a {schedule} affirmation.</p>}
    </section>
  );
}

Note.propTypes = {
  body: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func,
  schedule: PropTypes.string,
  checkboxLabel: PropTypes.string,
  checkboxValue: PropTypes.bool,
  handleCheckbox: PropTypes.func,
  _id: PropTypes.string.isRequired
};

export default Note;
