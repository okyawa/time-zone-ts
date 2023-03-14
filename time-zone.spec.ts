import { timeZoneAreas } from './time-zone-areas-const';

import { changeTimeZone } from './time-zone';

describe('changeTimeZoneのテスト（timeZoneAreasのエリア指定が合っているかどうか）', () => {
  const keys = Object.keys(timeZoneAreas);
  const date = new Date();
  keys.forEach((key: string) => {
    const hour = Number(key.substring(0, 3));
    const minute = Number(key.substring(3));
    const parsedMinute = hour > 0 ? minute : -1 * minute;
    test(key + 'の場合', () => {
      const testDate = new Date(date);
      testDate.setHours(testDate.getHours() + (hour - 9));
      testDate.setMinutes(testDate.getMinutes() + parsedMinute);
      expect(changeTimeZone(date, key).toString()).toBe(testDate.toString());
    });
  });
});
