# TypeScriptでタイムゾーンの変換

- `+0900` のようなタイムゾーン指定の文字列を元に、タイムゾーンを考慮したDataオブジェクトを生成

## 利用例

```ts
import { changeTimeZone } from "./time-zone";

export function createTodayDate(timeZone: string): Date {
  return changeTimeZone(new Date(), timeZone);
}
```
