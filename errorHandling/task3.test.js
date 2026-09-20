import { jest, describe, test, expect, afterEach } from '@jest/globals';
import axios from 'axios';

const getUserById = async (id) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message, { cause: error });
  }
};

describe('mocked axios requests', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('handles successful request', async () => {
    const mockUser = { id: 1, name: 'Leanne Graham' };
    jest.spyOn(axios, 'get').mockResolvedValue({ data: mockUser });

    const result = await getUserById(1);

    expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users/1');
    expect(result).toEqual(mockUser);
  });

  test('handles failed request', async () => {
    jest.spyOn(axios, 'get').mockRejectedValue(new Error('Network Error'));

    await expect(getUserById(1)).rejects.toThrow('Network Error');
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
