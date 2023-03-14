import { timeZoneAreas } from './time-zone-areas-const';

export interface ChangeTimeZoneType {
  (date: Date, timeZone: string): Date;
}

/**
 * Dateオブジェクトのタイムゾーンを変更
 */
export function changeTimeZone(date: Date, timeZone: string): Date {
  const timeZoneName = timeZoneAreas[timeZone];
  if (timeZoneName === undefined) {
    throw new Error('ERROR :: changeTimeZone - invalid timeZone');
  }
  return new Date(date.toLocaleString('ja-JP', { timeZone: timeZoneName }));
}
