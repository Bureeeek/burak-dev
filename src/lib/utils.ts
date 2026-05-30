import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  let currentDate = new Date().getTime();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date).getTime();
  let timeDifference = Math.abs(currentDate - targetDate);
  let daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  let fullDate = new Date(date).toLocaleString("de-AT", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (daysAgo < 1) {
    return "Heute";
  } else if (daysAgo < 7) {
    const dayLabel = daysAgo === 1 ? "Tag" : "Tagen";
    return `${fullDate} (vor ${daysAgo} ${dayLabel})`;
  } else if (daysAgo < 30) {
    const weeksAgo = Math.floor(daysAgo / 7);
    const weekLabel = weeksAgo === 1 ? "Woche" : "Wochen";
    return `${fullDate} (vor ${weeksAgo} ${weekLabel})`;
  } else if (daysAgo < 365) {
    const monthsAgo = Math.floor(daysAgo / 30);
    const monthLabel = monthsAgo === 1 ? "Monat" : "Monaten";
    return `${fullDate} (vor ${monthsAgo} ${monthLabel})`;
  } else {
    const yearsAgo = Math.floor(daysAgo / 365);
    const yearLabel = yearsAgo === 1 ? "Jahr" : "Jahren";
    return `${fullDate} (vor ${yearsAgo} ${yearLabel})`;
  }
}
