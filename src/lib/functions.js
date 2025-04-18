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

export function isSameDay(date1, date2) {
  const dateToCompare = new Date(date1); // Date to compare
  const today = new Date(date2); // Today's date

  // Normalize both dates to ignore the time part
  const normalizedDateToCompare = new Date(
    dateToCompare.getFullYear(),
    dateToCompare.getMonth(),
    dateToCompare.getDate()
  );
  const normalizedToday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  return (
    dateToCompare.getFullYear() === today.getFullYear() &&
    dateToCompare.getMonth() === today.getMonth() &&
    dateToCompare.getDate() === today.getDate()
  );
}

export const getOrderStatusOptions = (t) => {
  return [
    {
      id: 0,
      key: 0,
      label: t("order_placed"),
    },
    {
      id: 1,
      key: 1,
      label: t("order_accepted"),
    },
    {
      id: 2,
      key: 2,
      label: t("order_shipped"),
    },
    {
      id: 3,
      key: 3,
      label: t("out_for_delivery"),
    },
    {
      id: 4,
      key: 4,
      label: t("delivered"),
    },
  ];
};

// Formate String to Date short/long format
export const convertToDate = (date) => {
  if (date) {
    const d = new Date(date);
    const day = d.getDate();
    const year = d.getFullYear();

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${monthNames[d.getMonth()]} ${day}, ${year}`;
  }
  return undefined;
};
