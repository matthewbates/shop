const API_URL = "http://localhost:8000";

async function httpGetProducts() {
  const response = await fetch(`${API_URL}/products`);
  return await response.json();
}

export { httpGetProducts };
