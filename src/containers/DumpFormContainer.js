import DumpForm1 from "components/DumpForms/DumpForm1";
import DumpForm2 from "components/DumpForms/DumpForm2";
import DumpForm3 from "components/DumpForms/DumpForm3";
import { DispatchContext, FormContext } from "context/dumpFormContext";
import { goBack } from "helpers/automateHelper";
import React, { useContext } from "react";

function DumpFormContainer() {
  const form = useContext(FormContext);
  const dispatchContext = useContext(DispatchContext);
  const { currentForm } = form;

  const goPreviewForm = () => {
    const { currentForm: lastForm, formPile } = goBack(form);
    const newForm = { ...form, currentForm: lastForm, formPile };
    dispatchContext(newForm);
  };

  const renderForm = () => {
    switch (currentForm) {
      case "dumpForm1":
        return <DumpForm1 goBack={goPreviewForm} />;
      case "dumpForm2":
        return <DumpForm2 goBack={goPreviewForm} />;
      case "dumpForm3":
        return <DumpForm3 goBack={goPreviewForm} />;
      default:
        return <DumpForm1 goBack={goPreviewForm} />;
    }
  };
  return <div className="text-slate-500">{renderForm()}</div>;
}

export default DumpFormContainer;
