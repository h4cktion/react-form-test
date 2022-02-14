import Form1 from "components/Forms/Form1";
import Form2 from "components/Forms/Form2";
import Form3 from "components/Forms/Form3";
import Form4 from "components/Forms/Form4";
import Form4bis from "components/Forms/Form4bis";
import Form5 from "components/Forms/Form5";
import FormFinal from "components/Forms/FormFinal";
import Stepper from "components/Forms/Stepper";
import { DispatchContext, FormContext } from "context/FormContext";
import { GO_BACK } from "context/FormContext/actionsType";
import { FORM_1, FORM_2, FORM_3, FORM_4, FORM_4bis, FORM_5, FORM_FINAL } from "helpers/automateHelper";
import React, { useContext } from "react";

function FormContainer() {
  const state = useContext(FormContext);
  const dispatchContext = useContext(DispatchContext);
  const { currentForm } = state;

  const goPreviewForm = () => {
    dispatchContext({type: GO_BACK});
    // const { currentForm: lastForm, formPile } = goBack(state);
    // const newForm = { ...state, currentForm: lastForm, formPile };
    // dispatchContext(newForm);
  };

  const renderForm = () => {
    switch (currentForm) {
      case FORM_1:
        return <Form1 goBack={goPreviewForm} />;
      case FORM_2:
        return <Form2 goBack={goPreviewForm} />;
      case FORM_3:
        return <Form3 goBack={goPreviewForm} />;
      case FORM_4:
        return <Form4 goBack={goPreviewForm} />;
      case FORM_4bis:
        return <Form4bis goBack={goPreviewForm} />;
      case FORM_5:
        return <Form5 goBack={goPreviewForm} />;
      case FORM_FINAL:
        return <FormFinal goBack={goPreviewForm} />;
      
      default:
        return <Form1 goBack={goPreviewForm} />;
    }
  };
  return <div className="text-slate-500">
    <Stepper />
    {renderForm()}
    </div>;
}

export default FormContainer;
