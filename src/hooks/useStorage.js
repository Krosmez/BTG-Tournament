const useStorage = () => {
  const getItem = (key) => {
    if (localStorage.getItem(key) === null) {
      console.error("This key doesn't exist");
      return null;
    }
    return JSON.parse(localStorage.getItem(key));
  };

  const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const removeItem = (key) => {
    localStorage.removeItem(key);
  };

  return { getItem, setItem, removeItem };
};

export default useStorage;
