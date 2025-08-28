const convertToTwelveHourFormat = (startTime: string, endTime: string) => {
  const [startHour, startMinute] = startTime.split(":").map(Number);
  const [endHour, endMinute] = endTime.split(":").map(Number);

  let convertedStartTime = "";
  let convertedEndTime = "";
  if (startHour <= 12) {
    convertedStartTime = `${startHour.toString().padStart(2, "0")}:${startMinute
      .toString()
      .padStart(2, "0")} am`;
  } else {
    convertedStartTime = `${(startHour - 12)
      .toString()
      .padStart(2, "0")}:${startMinute.toString().padStart(2, "0")}  pm`;
  }
  if (endHour <= 12) {
    convertedEndTime = `${endHour.toString().padStart(2, "0")}:${endMinute
      .toString()
      .padStart(2, "0")} am`;
  } else {
    convertedEndTime = `${(endHour - 12)
      .toString()
      .padStart(2, "0")}:${endMinute.toString().padStart(2, "0")} pm`;
  }

  return `${convertedStartTime} - ${convertedEndTime}`;
};

export default convertToTwelveHourFormat;
