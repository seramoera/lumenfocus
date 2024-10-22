const calendar = document.getElementById('calendar');
const yearDisplay = document.getElementById('yearDisplay');
const prevYearBtn = document.getElementById('prevYear');
const nextYearBtn = document.getElementById('nextYear');

let currentYear = 2024;

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

function createCalendar(year) {
  calendar.innerHTML = '';
  for (let i = 0; i < 12; i++) {
    const monthDiv = document.createElement('div');
    monthDiv.classList.add('month');

    const monthName = document.createElement('div');
    monthName.classList.add('month-name');
    monthName.innerText = months[i];

    const weekdays = document.createElement('div');
    weekdays.classList.add('weekdays');
    ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].forEach(day => {
      const dayDiv = document.createElement('div');
      dayDiv.innerText = day;
      weekdays.appendChild(dayDiv);
    });

    const daysDiv = document.createElement('div');
    daysDiv.classList.add('days');

    const firstDay = new Date(year, i, 1).getDay();
    const totalDays = daysInMonth(i, year);

    // Create blank days for the start of the month
    for (let j = 0; j < (firstDay + 6) % 7; j++) {
      const blankDay = document.createElement('div');
      daysDiv.appendChild(blankDay);
    }

    // Add actual days
    for (let j = 1; j <= totalDays; j++) {
      const dayDiv = document.createElement('div');
      dayDiv.innerText = j;
      dayDiv.addEventListener('click', () => {
        const selected = document.querySelector('.days div.selected');
        if (selected) {
          selected.classList.remove('selected');
        }
        dayDiv.classList.add('selected');
      });
      daysDiv.appendChild(dayDiv);
    }

    monthDiv.appendChild(monthName);
    monthDiv.appendChild(weekdays);
    monthDiv.appendChild(daysDiv);
    calendar.appendChild(monthDiv);
  }
}

prevYearBtn.addEventListener('click', () => {
  currentYear--;
  yearDisplay.innerText = currentYear;
  createCalendar(currentYear);
});

nextYearBtn.addEventListener('click', () => {
  currentYear++;
  yearDisplay.innerText = currentYear;
  createCalendar(currentYear);
});

// Initialize calendar
createCalendar(currentYear);
