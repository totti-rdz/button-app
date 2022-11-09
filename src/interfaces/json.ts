type JSONValue = string | number | boolean | JSONObject | JSONArray;

interface JSONArray extends Array<JSONValue> {}

interface JSONObject {
  [x: string]: JSONValue;
}

export default JSONObject;
