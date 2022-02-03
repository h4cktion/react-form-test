
// export const automate = [
//   { name: "dumpForm1Next", from: "dumpForm1", to: "dumpForm2" },
//   { name: "dumpForm2Next1", from: "dumpForm2", to: "dumpForm3" },
//   { name: "dumpForm2Next2", from: "dumpForm2", to: "dumpForm3bis" },
// ];

const goBack = (formData) => {
    const { formPile, currentForm } = formData;
    if (formPile.length === 0) return {currentForm, formPile};
    const newPile = [...formPile];
    const lastForm = newPile.pop();
    return {currentForm: lastForm, formPile: newPile};
}

module.exports = {
    goBack
};