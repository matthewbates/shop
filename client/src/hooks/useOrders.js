import React, { useState, useEffect, useCallback } from "react";
import { httpGetOrders } from "./requests";

const useOrders = () => {
  const [orders, setOrders] = useState([]);

  const getOrders = useCallback(async () => {
    const fetchedOrders = await httpGetOrders();
    setOrders(fetchedOrders);
  });

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  return orders;
};

export default useOrders;
