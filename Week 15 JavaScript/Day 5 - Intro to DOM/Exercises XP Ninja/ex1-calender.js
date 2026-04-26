function createCalendar(year, month) {
  // Create a Date object set to the 1st day of the given month
  // IMPORTANT: JS months are 0-based (0 = Jan, 8 = Sept)
  // So we subtract 1 from the given month
  let date = new Date(year, month - 1, 1);

  // Create the main <table> element that will hold the calendar
  let table = document.createElement("table");

  // Define the days of the week starting from Monday (not Sunday)
  let days = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

  // Create a table row <tr> that will contain the headers (days)
  let headerRow = document.createElement("tr");

  // Loop through each day name
  for (let day of days) {
    // Create a header cell <th> for each day
    let th = document.createElement("th");

    // Set the text inside the header cell (MO, TU, etc.)
    th.textContent = day;

    // Add the <th> to the header row <tr>
    headerRow.appendChild(th);
  }

  // Add the completed header row to the table
  table.appendChild(headerRow);

  // Get the day of the week of the 1st of the month
  // JS: Sunday = 0, Monday = 1, ..., Saturday = 6
  let startDay = date.getDay();

  // Convert JS day system → our system (Monday = 0)
  // If it's Sunday (0), we move it to 6 (last column)
  // Otherwise subtract 1 so Monday becomes 0, Tuesday 1, etc.
  startDay = startDay === 0 ? 6 : startDay - 1;

  // Create a new row to start filling days
  let row = document.createElement("tr");

  // Add empty cells before the first day of the month
  // Example: If month starts on Thursday, we add 3 empty cells (Mon, Tue, Wed)
  for (let i = 0; i < startDay; i++) {
    row.appendChild(document.createElement("td")); // empty <td>
  }

  // Loop through all days in the month
  // This continues while we are still in the same month
  while (date.getMonth() === month - 1) {

    // Create a cell for the current day
    let td = document.createElement("td");

    // Set the number inside the cell (1, 2, 3...)
    td.textContent = date.getDate();

    // Add the cell to the current row
    row.appendChild(td);

    // Get the current day of week (JS system)
    let currentDay = date.getDay();

    // Convert to Monday-based index again
    let adjustedDay = currentDay === 0 ? 6 : currentDay - 1;

    // If it's Sunday (end of week), we finish the row
    if (adjustedDay === 6) {
      // Add the completed row to the table
      table.appendChild(row);

      // Start a new row for the next week
      row = document.createElement("tr");
    }

    // Move to the next day
    date.setDate(date.getDate() + 1);
  }

  // After the loop, if the last row is not empty, add it to the table
  // (because the last week might not be full)
  if (row.children.length > 0) {
    table.appendChild(row);
  }

  // Finally, add the whole table to the webpage
  document.body.appendChild(table);
}

// Call the function to generate a calendar
createCalendar(2012, 9);