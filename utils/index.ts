import dayjs from "dayjs";

export function formatDate(
  d: string | { _seconds: number; _nanoseconds: number }
): string {
  if (typeof d === "string") {
    return dayjs(d).format("DD/MM/YYYY");
  }
  return new Date(d?._seconds * 1000).toLocaleDateString("en-US");
}
