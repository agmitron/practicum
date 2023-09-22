import {register} from '../utils/auth-api';
import {AUTH_SERVER_URL} from '../utils/constants'
  
describe('check register function', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(
        { result: 'OK' }
      ),
      ok: true,
    })
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should be successful', async () => {
    const regresults = await register('email', 'password');
    expect(regresults).toEqual({ result: 'OK' });
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test('should be failed', async () => {
    fetch.mockImplementationOnce(() => Promise.resolve({
        ok: false,
        json: () => Promise.resolve({ result: 'OK' }),
        status: '500',
    }));

    expect(register('email', 'password')).rejects.toBe('Ошибка: 500');
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`${AUTH_SERVER_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email:"email", password:"password"})
    })
  });
})