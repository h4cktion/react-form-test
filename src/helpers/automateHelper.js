const FORM_1='form1';
const FORM_2='form2';
const FORM_3='form3';
const FORM_4='form4';
const FORM_4bis='form4bis';
const FORM_5='form5';
const FORM_FINAL='formFinal';

const goBack = (formData) => {
    const { formPile, currentForm } = formData;
    if (formPile.length === 0) return {currentForm, formPile};
    const newPile = [...formPile];
    const lastForm = newPile.pop();
    return {currentForm: lastForm, formPile: newPile};
}

module.exports = {
    goBack,
    FORM_1,
    FORM_2,
    FORM_3,
    FORM_4,
    FORM_4bis,
    FORM_5,
    FORM_FINAL,
};