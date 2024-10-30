import { useTranslations } from "next-intl";

export function useGetLast12Months() {
  const t = useTranslations("filterMonth");
  const months = [];
  const currentDate = new Date();

  // Set date to the first day of current month to avoid end-of-month issues
  currentDate.setDate(1);

  for (let i = 0; i < 12; i++) {
    const year = currentDate.getFullYear();
    const monthIndex = currentDate.getMonth();

    // Get month abbreviation using the month index (0-11)
    const monthAbbr = new Date(year, monthIndex, 1).toLocaleString("default", {
      month: "short",
    });

    months.push(t(monthAbbr) + " " + year);

    // Move to the previous month
    currentDate.setMonth(monthIndex - 1);
  }

  return { months }; // Reverse the array to show from oldest to newest
}
