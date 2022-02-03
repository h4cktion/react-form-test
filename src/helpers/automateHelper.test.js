const { goBack } = require("./automateHelper");

describe("automateHelper function", () => {
  it("goBack should be a function", () => {
    expect(goBack).toBeInstanceOf(Function);
  });

  it('goBack should return {"form3", ["form1", "form2"]}', () => {
    const expected = { currentForm: "form3", formPile: ["form1", "form2"] };
    const formData = {formPile: ["form1", "form2", "form3"]}
    expect(goBack(formData)).toEqual(expected);
  });

  it('goBack should do nothing if the length of file is equal to one', () => {
    const expected = {currentForm: "form1",formPile: []};
    const formData = {formPile: [], currentForm: 'form1'}
    expect(goBack(formData)).toEqual(expected);
  });
});
