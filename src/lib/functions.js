export function getLast12Months() {
  const months = [];
  const currentDate = new Date();

  for (let i = 0; i < 12; i++) {
    // Get the month name and year in the desired format (e.g., "Aug 2024")
    const monthYear = currentDate.toLocaleString("default", {
      month: "short",
      year: "numeric",
    });

    // Add to the array
    months.push(monthYear);

    // Move to the previous month
    currentDate.setMonth(currentDate.getMonth() - 1);
  }

  return months;
}
