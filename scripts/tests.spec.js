describe("StringCalculator's", function() {
  describe("Add",
  function () {

    it("given an empty string returns 0",
      function () {
        var actual = calculator.Add("");
        expect(actual).toBe(0);
      });

  });
})