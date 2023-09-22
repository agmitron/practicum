import {getResponse} from '../utils/utils';

let testObject = {
  ok: true, 
  json: function () {return {
    result: 'OK'
  }}
};

describe('check getResponse function', () => {
    test('should be success', () => {
      const regresults = getResponse(testObject);
      expect(regresults).toEqual({ result: 'OK'});
    });

    test('should be failed', async () => {
      testObject.ok = false;
      testObject.status = 500;
      expect(getResponse(testObject)).rejects.toBe('Ошибка: 500');
    });
})
