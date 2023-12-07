import { TestScheduler } from 'rxjs/testing';
import { filter, map, merge, mergeAll, mergeMap, of } from 'rxjs';
import { isDefinedAndNotNull, isNullOrUndefined, isTruthy, isUndefined } from '.';

describe("RxJS tests", () => {
    let testScheduler: TestScheduler
    beforeEach(() => {
        testScheduler = new TestScheduler((actual, expected) => {
            return expect(actual).toEqual(expected);
        });
    });

    it("rawr", () => {
        testScheduler.run(({ expectObservable }) => {
            const rawr = merge([
                // of(1),
                // of(true),
                // of(false),
                of(undefined),
                of(null),
                of('string value'),
                of(2)
            ])
                .pipe(
                    filter(isDefinedAndNotNull),
                    map(x => x.toLowerCase())
                    );
            // expectObservable(rawr).toBe(
                // expectedMarbles,
                // expectedValues
            // ); // (3)
        });
    });
});