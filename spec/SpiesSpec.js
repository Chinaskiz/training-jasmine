describe("Spies", () => {
    let foo;

    beforeEach(() => {
        foo = {
            sum: function (a, b) {
                return a + b;
            }
        }
    })

    it("should work if function has been called", () => {
        spyOn(foo, "sum");

        foo.sum(1, 2);

        expect(foo.sum).toHaveBeenCalledWith(1, 2);
    });

    it("should track multiple calls", () => {
        spyOn(foo, "sum");

        foo.sum(3, 4);
        foo.sum(5, 6);

        expect(foo.sum).toHaveBeenCalledWith(3, 4);
        expect(foo.sum).toHaveBeenCalledWith(5, 6);
        expect(foo.sum).toHaveBeenCalledTimes(2);
    });
})