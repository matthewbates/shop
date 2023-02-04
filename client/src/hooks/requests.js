const API_URL = "http://localhost:8000";

const httpGetProducts = async () => {
  const response = await fetch(`${API_URL}/products`);
  return await response.json();
};

const httpGetOrders = async () => {
  const response = await fetch(`${API_URL}/orders`);
  return await response.json();
};

export { httpGetProducts, httpGetOrders };
