const availableTimesByDate = {
  "2023-11-29": ["17:00", "18:00", "19:00"],
  "2023-12-01": ["20:00", "21:00", "22:00"],
  "2023-12-02": ["17:00", "18:00", "19:00"],
  "2023-12-03": ["20:00", "21:00", "22:00"],
  "2023-12-04": ["17:00", "18:00", "19:00"],
  "2023-12-05": ["20:00", "21:00", "22:00"],
  "2023-12-06": ["17:00", "18:00", "19:00"],
  "2023-12-07": ["20:00", "21:00", "22:00"],
  "2023-12-08": ["17:00", "18:00", "19:00"],
  "2023-12-09": ["20:00", "21:00", "22:00"],
  "2023-12-10": ["17:00", "18:00", "19:00"],
  "2023-12-11": ["20:00", "21:00", "22:00"],
  "2023-12-12": ["17:00", "18:00", "19:00"],
  "2023-12-13": ["20:00", "21:00", "22:00"],
  "2023-12-14": ["17:00", "18:00", "19:00"],
  "2023-12-15": ["20:00", "21:00", "22:00"],
  "2023-12-16": ["17:00", "18:00", "19:00"],
  "2023-12-17": ["20:00", "21:00", "22:00"],
  "2023-12-18": ["17:00", "18:00", "19:00"],
  "2023-12-19": ["20:00", "21:00", "22:00"],
  "2023-12-20": ["17:00", "18:00", "19:00"],
};

const fetchAPI = (date) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (availableTimesByDate[date]) {
        resolve(availableTimesByDate[date]);
        // console.log("Available Dates:", Object.keys(availableTimesByDate));
        console.log(
          "selected date array from AvailableTimesByDate",
          availableTimesByDate[date]
        );
        console.log("Selected date in fetchAPI", [date]);
        console.log("fetchAPI is", fetchAPI());
      } else if (availableTimesByDate[date] == null) {
        console.log("FetchApi return null");
      } else {
        reject(new Error("No available times for the selected date."));
      }
    }, 1000);
  });
};

const submitAPI = (formData) => {
  availableTimesByDate[formData.date] = availableTimesByDate[
    formData.date
  ].filter((time) => time !== formData.time);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (formData) {
        resolve(true); // Simulate successful submission
      } else {
        reject(new Error("Form submission failed."));
      }
    }, 1000); // Simulate API delay
  });
};

export { fetchAPI, submitAPI };
