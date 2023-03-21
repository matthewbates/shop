const API_URL = "http://localhost:8000";

const httpGetProducts = () => {
  const response = fetch(`${API_URL}/products`);
  return response.json();
};

// fetch(`${API_URL}/products`)
//   .then((r) => r.json())
//   .then(console.log);

const httpGetOrders = async () => {
  const response = await fetch(`${API_URL}/orders`);
  return await response.json();
};

export { httpGetProducts, httpGetOrders };
