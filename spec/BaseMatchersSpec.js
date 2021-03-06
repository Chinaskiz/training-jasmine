const Player = require("../lib/jasmine_examples/Player");

describe("Base matchers", () => {

    it("should work if a === b", () => {
        let a = "foo";
        let b = a;

        expect(b).toBe(a)
    });

    it("should work if a == b", () => {
        let a = new Player();
        let b = new Player();

        expect(b).toEqual(a);
        expect(b).not.toBe(a);
    });

    it("should work if a is true", () => {
        let a = true;
        let b = false;

        expect(a).toBeTrue();
        expect(a).not.toBeFalse();
        expect(b).toBeFalse();
        expect(b).not.toBeTrue();
    });

    it("should work if a is truthy", () => {
        let a = "foo";
        let b = 1;

        expect(a).toBeTruthy();
        expect(a).not.toBeTrue();
        expect(b).toBeTruthy();
        expect(b).not.toBeTrue();
    });

    it("should work if a is falsy", () => {
        let a = null;
        let b = 0;

        expect(a).toBeFalsy();
        expect(a).not.toBeFalse();
        expect(b).toBeFalsy();
        expect(b).not.toBeFalse();
    });

    it("should work if a is part of a collection", () => {
        let a = "foo";
        let b = "bar";
        let c = "baz";
        let list = [a, c];

        expect(list).toContain(a);
        expect(list).toContain(c);
        expect(list).not.toContain(b);
    });

    it("should work if function throws exception", () => {
        function foo(input) {
            if (input == 1) {
                throw new SyntaxError();
            }
        }

        expect(() => {
            foo(1);
        }).toThrowError(SyntaxError);

        expect(() => {
            foo(2)
        }).not.toThrowError();
    });
})