// 💡 HINT: number[] and Array<number> mean the same thing

type JSONPrimitive = number | string | boolean | null;
export type JSONValue = JSONPrimitive | JSONArray | JSONObject;
export interface JSONArray extends Array<JSONValue> {}
export interface JSONObject {
    [k: string]: undefined | JSONValue
}
