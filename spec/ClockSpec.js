describe("Clock", () => {

    beforeEach(() => {
        jasmine.clock().install();
    });

    afterEach(() => {
        jasmine.clock().uninstall();
    });

    it("should work with timeouts", () => {
        let foo = jasmine.createSpy();

        setTimeout(() => {
            foo();
        }, 100);

        expect(foo).not.toHaveBeenCalled();

        jasmine.clock().tick(101);

        expect(foo).toHaveBeenCalled();
    });

    it("should work with dates", () => {
        let date = new Date("2012-12-21T01:02:03");
        jasmine.clock().mockDate(date);

        let now = new Date();

        expect(now).toEqual(date);
    });
});