export const apiURL = () => {
  return window.location.hostname === "localhost"
    ? "http://localhost:3333"
    : "https://powerful-everglades-92762.herokuapp.com";
};
