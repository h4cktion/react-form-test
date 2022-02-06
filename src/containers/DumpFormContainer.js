import DumpForm1 from "components/DumpForms/DumpForm1";
import DumpForm2 from "components/DumpForms/DumpForm2";
import DumpForm3 from "components/DumpForms/DumpForm3";
import DumpForm4 from "components/DumpForms/DumpForm4";
import DumpForm4bis from "components/DumpForms/DumpForm4bis";
import DumpForm5 from "components/DumpForms/DumpForm5";
import DumpFormFinal from "components/DumpForms/DumpFormFinal";
import { DispatchContext, FormContext } from "context/dumpFormContext";
import { GO_BACK } from "context/dumpFormContext/actionsType";
import { FORM_1, FORM_2, FORM_3, FORM_4, FORM_4bis, FORM_5, FORM_FINAL, goBack } from "helpers/automateHelper";
import React, { useContext } from "react";

function DumpFormContainer() {
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
        return <DumpForm1 goBack={goPreviewForm} />;
      case FORM_2:
        return <DumpForm2 goBack={goPreviewForm} />;
      case FORM_3:
        return <DumpForm3 goBack={goPreviewForm} />;
      case FORM_4:
        return <DumpForm4 goBack={goPreviewForm} />;
      case FORM_4bis:
        return <DumpForm4bis goBack={goPreviewForm} />;
      case FORM_5:
        return <DumpForm5 goBack={goPreviewForm} />;
      case FORM_FINAL:
        return <DumpFormFinal goBack={goPreviewForm} />;
      
      default:
        return <DumpForm1 goBack={goPreviewForm} />;
    }
  };
  return <div className="text-slate-500">{renderForm()}</div>;
}

export default DumpFormContainer;
