import { registerUser } from './users';
import { API_BASE_URL } from '../config';

describe('registerUser', () => {
  it('Should register new user', () => {

    const user = {
      username: 'username',
      password: 'password'
    };

    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json() {
          return user;
        }
      })
    );

    const res = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    };
    const dispatch = jest.fn();
    return registerUser(user)(dispatch).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/users`, res);
    });

  });
});