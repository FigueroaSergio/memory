import { useState, useEffect } from "react";

function useLocalStorage(itemName="storage", initialValue={}) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setData] = useState(initialValue);

  useEffect(() => {
    try {
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;

      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageItem);
      }
      setData(parsedItem);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  }, []);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setData(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}
export { useLocalStorage };
