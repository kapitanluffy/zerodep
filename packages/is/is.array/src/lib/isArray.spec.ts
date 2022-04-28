import { testData } from '../../../../testValues';
import { isArray } from './isArray';

// extract the positive test cases, the rest will be negative
const { arrays, ...rest } = testData;
const positiveCases = [...arrays];
const negativeCases = Object.values(rest).flat();

describe('isInteger', () => {
  // @ts-ignore
  test.each(positiveCases)('should allow a/an %s', (title, value) => {
    // @ts-ignore
    expect(isArray(value)).toEqual(true);
  });

  // @ts-ignore
  test.each(negativeCases)('should NOT allow a/an %s', (title, value) => {
    // @ts-ignore
    expect(isArray(value)).toEqual(false);
  });
});