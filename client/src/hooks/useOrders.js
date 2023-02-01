import React, { useState, useEffect, useCallback } from "react";

import React from "react";

export default function useOrders() {
  const [orders, setOrders] = useState([]);

  const getOrders = useCallback(async () => {
    // awaits fetch for array of order objectsx
    const fetchedOrders = await httpGetOrders();
    setOrders(fetchedOrders);
  }, []);

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  return orders;
}
