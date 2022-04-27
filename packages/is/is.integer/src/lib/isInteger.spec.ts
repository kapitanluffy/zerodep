import { testData } from '../../../testValues';
import { isInteger } from './isInteger';

// extract the positive test cases, the rest will be negative
const { integers, integersENotation, ...rest } = testData;
const positiveCases = [...integers, ...integersENotation];
const negativeCases = Object.values(rest).flat();

describe('isFunction', () => {
  // @ts-ignore
  test.each(positiveCases)('should allow a/an %s', (title, value) => {
    // @ts-ignore
    expect(isInteger(value)).toEqual(true);
  });

  // @ts-ignore
  test.each(negativeCases)('should NOT allow a/an %s', (title, value) => {
    // @ts-ignore
    expect(isInteger(value)).toEqual(false);
  });
});
