import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: { 'Content-Type': 'application/json' },
});

describe('JSONPlaceholder API', () => {
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

  test('GET /posts/1 returns one post', async () => {
    const response = await api.get('/posts/1');

    expect(response.status).toBe(200);
    expect(response.data).toEqual(
      expect.objectContaining({
        userId: 1,
        id: 1,
        title: expect.any(String),
        body: expect.any(String),
      })
    );
  });

  test('GET /users/1 returns one user', async () => {
    const response = await api.get('/users/1');

    expect(response.status).toBe(200);
    expect(response.data).toEqual(
      expect.objectContaining({
        id: 1,
        name: expect.any(String),
        username: expect.any(String),
        email: expect.any(String),
      })
    );
  });

  test('GET /posts/1/comments returns comments for post 1', async () => {
    const response = await api.get('/posts/1/comments');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
    expect(response.data[0]).toEqual(
      expect.objectContaining({
        postId: 1,
        id: expect.any(Number),
        name: expect.any(String),
        email: expect.any(String),
        body: expect.any(String),
      })
    );
  });

  test('POST /posts creates a post', async () => {
    const payload = {
      title: 'Test title',
      body: 'Test body',
      userId: 1,
    };

    const response = await api.post('/posts', payload);

    expect(response.status).toBe(201);
    expect(response.data).toEqual(
      expect.objectContaining({
        title: payload.title,
        body: payload.body,
        userId: payload.userId,
        id: expect.any(Number),
      })
    );
  });
});
