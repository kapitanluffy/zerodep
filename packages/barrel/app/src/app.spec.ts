import * as packages from './index';

const keys = Object.keys(packages).sort();
describe('"App" barrel package', () => {
  it('should export specific packages and interfaces', () => {
    expect(keys).toStrictEqual([
      'ZeroDepError',
      'addressCountry',
      'addressDirectional',
      'addressNormalize',
      'addressParse',
      'addressSecondary',
      'addressState',
      'addressZip',
      'caseCamel',
      'caseDot',
      'caseKebab',
      'casePascal',
      'caseSentence',
      'caseSnake',
      'geoCountry',
      'geoCountryInfoMap',
      'geoCountryIso',
      'geoCountryNameMap',
      'geoState',
      'geoStateIso',
      'geoStateNameMapCA',
      'geoStateNameMapUS',
      'getZipCountryState',
      'guardArray',
      'guardArrayHOF',
      'guardBigInt',
      'guardBigIntHOF',
      'guardBoolean',
      'guardBooleanHOF',
      'guardDate',
      'guardDateHOF',
      'guardFloat',
      'guardFloatHOF',
      'guardFunction',
      'guardFunctionHOF',
      'guardInteger',
      'guardIntegerHOF',
      'guardNumber',
      'guardNumberHOF',
      'guardObject',
      'guardObjectHOF',
      'guardPojo',
      'guardPojoHOF',
      'guardString',
      'guardStringHOF',
      'isArray',
      'isBigInt',
      'isBoolean',
      'isDate',
      'isEmpty',
      'isEqual',
      'isError',
      'isFloat',
      'isFunction',
      'isInteger',
      'isIterable',
      'isMap',
      'isNil',
      'isNull',
      'isNumber',
      'isObject',
      'isPojo',
      'isPromise',
      'isRegex',
      'isSet',
      'isString',
      'isSymbol',
      'isTypedArray',
      'isUndefined',
      'isWeakMap',
      'isWeakSet',
      'stateInfoMap',
      'stringDeburr',
      'stringLowerFirst',
      'stringPadLeft',
      'stringPadRight',
      'stringTitleCase',
      'stringTrim',
      'stringTrimLeft',
      'stringTrimRight',
      'stringUpperFirst',
      'stringWords',
      'structCollectionFactory',
      'structLinkedListFactory',
      'structQueueFactory',
      'structStackFactory',
      'structTreeFactory',
      'toDate',
      'toInteger',
      'toNumber',
      'toPojo',
      'toString',
    ]);
  });

  // contrived test for barrel-file
  test.each(keys)('should have %s', (name) => {
    expect(['function', 'object', 'undefined']).toContain(
      // @ts-ignore
      typeof packages[name]
    );
  });
});
