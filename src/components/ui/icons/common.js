export const getIconColor = (color) => {
  switch (color) {
    case "primary":
      return "var(--primary-color)";
    case "light":
      return "var(--white-color)";
    case "error":
      return "var(--error-color)";
    default:
      return "#efefef";
  }
};
