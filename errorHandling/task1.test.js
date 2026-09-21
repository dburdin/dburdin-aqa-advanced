import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: { 'Content-Type': 'application/json' },
});

test('GET /posts returns 100 posts', async () => {
  const response = await api.get('/posts');

  expect(response.status).toBe(200);
  expect(Array.isArray(response.data)).toBe(true);
  expect(response.data).toHaveLength(100);
  expect(response.data[0]).toEqual(
    expect.objectContaining({
      userId: expect.any(Number),
      id: expect.any(Number),
      title: expect.any(String),
      body: expect.any(String),
    })
  );
});
