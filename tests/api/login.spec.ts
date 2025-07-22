import { test, expect, request } from '@playwright/test';

test('Login returns token', async ({ request }) => {
  const response = await request.post(`/login`, {
    data: { username: 'admin', password: 'admin123' }
  });

  expect(response.ok()).toBeTruthy();
  const body = await response.json();
  expect(body.token).toBeDefined();
});

test('Login fails with invalid credentials', async ({ request }) => {
  const response = await request.post(`/login`, {
    data: { username: 'admin', password: 'wrongpassword' }
  });

  expect(response.ok()).toBeFalsy();
  const body = await response.json();
  expect(body.token).toBeUndefined();
  expect(body.error || body.message).toBeDefined();
});
