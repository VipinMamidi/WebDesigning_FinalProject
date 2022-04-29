// there is a need to convert mongodb dates to readable date formats in various pages
// this util function does that, and has a second argument to decide whether the time has to be included
const getDateString = (date, showTime = true) => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const timeStr = new Date(date).toLocaleTimeString("en-US", {
    timeStyle: "short",
    hour12: true,
    timeZone: "America/New_York",
  });

  let result = "";
  if (showTime) result += `${timeStr} `;
  return result + new Date(date).toLocaleDateString("en", options);
};

export default getDateString;
