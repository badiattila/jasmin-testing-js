describe("Calculator", function() {

    beforeEach(function() {
        calc = new Calculator;
    });

    describe("Addition tests", function() {
        it("should return 42", function() {
            // expect(addition(20, 22)).toBe(42);
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42);
        });
        it("should return 26", function() {
            // expect(addition(7, 19)).toBe(26);
            calc.add(7);
            calc.add(19);
            expect(calc.value).toBe(26);
        });
        it("should error if we don't supply numbers", function() {
            // expect(addition("Hitchhikers","Guide")).toBe("ERROR!");
            spyOn(window, "alert");
            calc.add("Hitchhikers");
            expect(window.alert).toHaveBeenCalledWith("ERROR!");
        });
    });
});
