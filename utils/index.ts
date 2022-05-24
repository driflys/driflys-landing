import dayjs from "dayjs";

export function formatDate(
  d: string | { _seconds: number; _nanoseconds: number }
): string {
  if (typeof d === "string") {
    return dayjs(d).format("DD/MM/YYYY");
  }
  return new Date(d?._seconds * 1000).toLocaleDateString("en-US");
}

export function getYear(
  d: string | { _seconds: number; _nanoseconds: number }
): string {
  if (typeof d === "string") {
    return dayjs(d).get("year").toString();
  }
  return new Date(d?._seconds * 1000).getFullYear().toString();
}

export function getMonth(
  d: string | { _seconds: number; _nanoseconds: number }
): string {
  if (typeof d === "string") {
    return dayjs(d).get("month").toString();
  }
  return new Date(d?._seconds * 1000).getMonth().toString();
}
