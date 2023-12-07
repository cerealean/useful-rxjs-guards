import { isDefinedAndNotNull, isFalsy, isNull, isNullOrUndefined, isTruthy, isUndefined } from './index';

describe("Useful RxJS Guards", () => {
    describe("isNull", () => {
        it("should return true if value is null", () => {
            expect(isNull(null)).toBe(true);
        });

        [undefined, 0, 1, -1, Infinity, "", "string", true, false, NaN].forEach(testVal => {
            it(`should return false if value is ${testVal}`, () => {
                expect(isNull(testVal)).toBe(false);
            });
        });
    });
    describe("isUndefined", () => {
        it("should return true if value is undefined", () => {
            expect(isUndefined(undefined)).toBe(true);
        });

        [null, 0, 1, -1, Infinity, "", "string", true, false, NaN].forEach(testVal => {
            it(`should return false if value is ${testVal}`, () => {
                expect(isUndefined(testVal)).toBe(false);
            });
        });
    });
    describe("isDefinedAndNotNull", () => {
        [null, undefined].forEach(testVal => {
            it("should return false if value is " + testVal, () => {
                expect(isDefinedAndNotNull(testVal)).toBe(false);
            });
        });

        [0, 1, -1, Infinity, "", "string", true, false, NaN].forEach(testVal => {
            it(`should return true if value is ${testVal}`, () => {
                expect(isDefinedAndNotNull(testVal)).toBe(true);
            });
        });
    });
    describe("isNullOrUndefined", () => {
        [null, undefined].forEach(testVal => {
            it("should return true if value is " + testVal, () => {
                expect(isNullOrUndefined(testVal)).toBe(true);
            });
        });

        [0, 1, -1, Infinity, "", "string", true, false, NaN].forEach(testVal => {
            it(`should return false if value is ${testVal}`, () => {
                expect(isNullOrUndefined(testVal)).toBe(false);
            });
        });
    });
    describe("isFalsy", () => {
        it("should return true if value is NaN", () => {
            expect(isFalsy(NaN)).toBe(true);
        });

        it("should return true for an empty string", () => {
            expect(isFalsy("")).toBe(true);
        });

        [0, false, null, undefined].forEach(testVal => {
            it(`should return true if value is ${testVal}`, () => {
                expect(isFalsy(testVal)).toBe(true);
            });
        });

        it("should return false for an object", () => {
            expect(isFalsy({})).toBe(false);
        });

        [1, 3, 5, Infinity, -1, 0.5, 67, 303, 45n].forEach(testVal => {
            it("should return false for " + testVal, () => {
                expect(isFalsy(testVal)).toBe(false);
            });
        });

        ["I", "am a", "string", "   ", "\n", "\t"].forEach(testVal => {
            it("should return false for " + testVal, () => {
                expect(isFalsy(testVal)).toBe(false);
            });
        });
    });
    describe("isTruthy", () => {
        it("should return false if value is NaN", () => {
            expect(isTruthy(NaN)).toBe(false);
        });

        it("should return false for an empty string", () => {
            expect(isTruthy("")).toBe(false);
        });

        [0, false, null, undefined].forEach(testVal => {
            it(`should return false if value is ${testVal}`, () => {
                expect(isTruthy(testVal)).toBe(false);
            });
        });

        it("should return true for an object", () => {
            expect(isTruthy({})).toBe(true);
        });

        [1, 3, 5, Infinity, -1, 0.5, 67, 303, 45n].forEach(testVal => {
            it("should return true for " + testVal, () => {
                expect(isTruthy(testVal)).toBe(true);
            });
        });

        ["I", "am a", "string", "   ", "\n", "\t"].forEach(testVal => {
            it("should return true for " + testVal, () => {
                expect(isTruthy(testVal)).toBe(true);
            });
        });
    });
});