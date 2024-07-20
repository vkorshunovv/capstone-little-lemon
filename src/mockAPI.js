export const availableTimesByDate = {};

export function getDateList() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const dayInMonth = new Date(year, month, 0).getDate();

  function getRandomTime(day) {
    return day % 2 === 0
      ? ["", "17:00", "18:00", "19:00"]
      : ["", "20:00", "21:00", "22:00"];
  }

  for (let day = 1; day <= dayInMonth + 1; day++) {
    const date = new Date(year, month, day);
    const dateString = date.toISOString().split("T")[0];
    availableTimesByDate[dateString] = getRandomTime(day);
  }

  return availableTimesByDate;
}

export const submitAPI = (formData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (availableTimesByDate[formData.date]) {
        availableTimesByDate[formData.date] = availableTimesByDate[
          formData.date
        ].filter((time) => time !== formData.time);
        resolve(true);
      } else {
        reject(new Error("Form submission failed."));
      }
    }, 0); // Simulate API delay
  });
};
