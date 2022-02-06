import { FORM_FINAL } from 'helpers/automateHelper';
import React from 'react';

function FormAction({ goBack, currentForm }) {
  return <div className='w-full flex justify-between '>
      <input type='button' value='BACK' onClick={goBack}/>
      { currentForm !== FORM_FINAL && (
        <input type='submit' value='NEXT'/>
      )}
  </div>;
}

export default FormAction;
