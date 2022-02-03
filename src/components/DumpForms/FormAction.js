import React from 'react';

function FormAction({ goBack }) {
  return <div className='w-full flex justify-between '>
      <input type='button' value='BACK' onClick={goBack}/>
      <input type='submit' value='NEXT'/>
  </div>;
}

export default FormAction;
