// src/services/api.js

// Function to make a GET request to the API
export async function get(endpoint) {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error making GET request:', error);
    throw error;
  }
}

// Function to make a POST request to the API
export async function post(endpoint, body) {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error making POST request:', error);
    throw error;
  }
}

// Function to make a PUT request to the API
export async function put(endpoint, body) {
  try {
    const response = await fetch(endpoint, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error making PUT request:', error);
    throw error;
  }
}

// Function to make a DELETE request to the API
export async function del(endpoint) {
  try {
    const response = await fetch(endpoint, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error making DELETE request:', error);
    throw error;
  }
}