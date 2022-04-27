import { testData } from '../../../testValues';
import { isFloat } from './isFloat';

// extract the positive test cases, the rest will be negative
const { floats, floatENotation, ...rest } = testData;
const positiveCases = [...floats, ...floatENotation];
const negativeCases = Object.values(rest).flat();

describe('isFunction', () => {
  // @ts-ignore
  test.each(positiveCases)('should allow a/an %s', (title, value) => {
    // @ts-ignore
    expect(isFloat(value)).toEqual(true);
  });

  // @ts-ignore
  test.each(negativeCases)('should NOT allow a/an %s', (title, value) => {
    // @ts-ignore
    expect(isFloat(value)).toEqual(false);
  });
});
