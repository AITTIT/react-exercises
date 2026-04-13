export type FeedbackPayload = {
  title: string;
  body: string;
  userId: number;
};

export type LoginPayload = {
  username: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
};

export type FeedbackResponse = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export async function submitFeedback(payload: FeedbackPayload): Promise<FeedbackResponse> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error('Failed to submit feedback');
  }

  return response.json() as Promise<FeedbackResponse>;
}

export async function login(payload: LoginPayload): Promise<LoginResponse> {
  const response = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error('Wrong credentials!');
  }

  return response.json() as Promise<LoginResponse>;
}