import { changeTimeZone } from "./time-zone";

export function createTodayDate(timeZone: string): Date {
  return changeTimeZone(new Date(), timeZone);
}
