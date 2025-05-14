const _ = require('lodash');
const dayjs = require('dayjs');

const today = dayjs();

const holidays = [
  { name: "Christmas", date: "2025-12-25" },
  { name: "Canada Day", date: "2025-07-01" },
  { name: "New Year's Day", date: "2026-01-01" },
  { name: "Labour Day", date: "2025-09-01" }
];

// Days until each holiday
holidays.forEach(holiday => {
  const holidayDate = dayjs(holiday.date);
  const daysUntil = holidayDate.diff(today, 'day');
  console.log(`${holiday.name} is in ${daysUntil} days`);
});

// Random holiday
const randomHoliday = _.sample(holidays);
console.log(`🎉 Random Holiday: ${randomHoliday.name} on ${randomHoliday.date}`);

// Indexes
const holidayNames = holidays.map(h => h.name);
console.log(`Index of Christmas: ${holidayNames.indexOf("Christmas")}`);
console.log(`Index of Canada Day: ${holidayNames.indexOf("Canada Day")}`);
