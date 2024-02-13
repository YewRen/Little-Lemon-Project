const availableTimesByDate = {
  '2023-12-22': ['10:00', '11:00', '12:00'],
  '2023-12-23': ['10:00', '11:00', '12:00'],
  '2023-12-24': ['14:00', '15:00', '16:00'],
  '2023-12-25': ['10:00', '11:00', '12:00'],
  '2023-12-26': ['14:00', '15:00', '16:00'],
  '2023-12-27': ['10:00', '11:00', '12:00'],
  '2023-12-28': ['14:00', '15:00', '16:00'],
  '2023-12-29': ['10:00', '11:00', '12:00'],
  '2023-12-30': ['14:00', '15:00', '16:00'],
  '2023-12-31': ['10:00', '11:00', '12:00'],
  '2024-01-01': ['14:00', '15:00', '16:00'],
  '2024-01-02': ['10:00', '11:00', '12:00'],
  '2024-01-03': ['14:00', '15:00', '16:00'],
  '2024-01-04': ['10:00', '11:00', '12:00'],
  '2024-01-05': ['14:00', '15:00', '16:00'],
  '2024-01-06': ['10:00', '11:00', '12:00'],
  '2024-01-07': ['14:00', '15:00', '16:00'],
  '2024-01-08': ['10:00', '11:00', '12:00'],
  '2024-01-09': ['14:00', '15:00', '16:00'],
  '2024-01-10': ['10:00', '11:00', '12:00'],
  '2024-01-11': ['14:00', '15:00', '16:00'],
};


const fetchAPI = (date) => {
  const formattedDate = date.toISOString().split('T')[0];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (availableTimesByDate[formattedDate]) {
        resolve(availableTimesByDate[formattedDate])
      }
      else {
        reject(new Error('No available times for the selected date.'));
      }
    }, 1000)
  })
}

const submitAPI = (formData) => {
  if (availableTimesByDate[formData.date]) {
    availableTimesByDate[formData.date] = availableTimesByDate[formData.date].filter(time => time !== formData.time);
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (formData) {
        resolve(true); // Simulate successful submission
      } else {
        reject(new Error('Form submission failed.'));
      }
    }, 1000); // Simulate API delay
  });
};

export { fetchAPI, submitAPI }