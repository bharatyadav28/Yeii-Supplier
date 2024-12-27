import { useTranslations } from "next-intl";
import { format } from "date-fns";

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

export const trimData = (data, length) => {
  return data.length > length ? data.slice(0, 27) + "..." : data;
};

export const debounce = (func, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

export const isNumberInput = (input) => {
  return /^\d+$/.test(input);
};

export function formatDate(dateString) {
  return format(dateString, "MM/dd/yyyy");
}
