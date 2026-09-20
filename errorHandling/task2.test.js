import axios from 'axios';

const getPostsWithCustomConfig = async () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts', {
    headers: {
      'X-Custom-Header': 'qa-homework',
      Accept: 'application/json',
    },
    params: {
      userId: 1,
    },
  });
};

test('sends custom headers and params', async () => {
  const response = await getPostsWithCustomConfig();

  expect(response.status).toBe(200);
  expect(response.config.headers['X-Custom-Header']).toBe('qa-homework');
  expect(response.config.params).toEqual({ userId: 1 });
  expect(Array.isArray(response.data)).toBe(true);
  expect(response.data.every((post) => post.userId === 1)).toBe(true);
});
