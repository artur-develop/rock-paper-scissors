const getUsername = () => {
  return localStorage.getItem("username");
};

const setUsername = (username: string) => {
  localStorage.setItem("username", username);
};

export { getUsername, setUsername };
