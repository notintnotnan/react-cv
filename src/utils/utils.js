const dateFormatString = (dateString, language) => {
  const date = new Date(dateString);
  const options = { month: "long", year: "numeric" };
  let localLang = "";

  switch (language) {
    case 0:
      localLang = "es";
      break;
    case 1:
      localLang = "en";
      break;
    default:
      localLang = "es";
      break;
  }

  const newString = date.toLocaleDateString(localLang, options);

  return (
    newString.slice(0, 1).toUpperCase() +
    newString.split(" ")[0].slice(1) +
    " " +
    newString.split(" ").slice(-1)
  );
};

export { dateFormatString };
