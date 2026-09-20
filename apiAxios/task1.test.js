import axios from 'axios';

const getInvalidUrl = async () => {
  try {
    await axios.get('https://jsonplaceholder.typicode.com/invalid-url-404');
  } catch (error) {
    return {
      success: false,
      message: error.message,
      status: error.response?.status ?? null,
    };
  }
};

test('handles request to invalid URL', async () => {
  const result = await getInvalidUrl();

  expect(result.success).toBe(false);
  expect(result.status).toBe(404);
  expect(typeof result.message).toBe('string');
  expect(result.message.length).toBeGreaterThan(0);
});
