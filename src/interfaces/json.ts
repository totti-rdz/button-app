type JSONValue = string | number | boolean | JSONObject | JSONArray;

interface JSONArray extends Array<JSONValue> {}

interface JSONObject {
  [x: string]: JSONValue;
}

type JSON = JSONObject | JSONArray;

export default JSON;
