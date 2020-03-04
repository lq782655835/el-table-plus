/**
 * 根据配置规则，拿到指定valueField的数据
 * @param param0
 * value：取值的字段名
 * fn: 自定义的函数，如果是function，直接得到值，如果是string，代表内置规则
 * type: 标记内置规则。即内置函数
 * @param row 行数据
 */
export const getDataValue = (Vue, { value: valueField, type, fn }, row) => {
  // 拿到数据，支持field1.field2...规则
  let value;
  if (valueField.includes(".")) {
    value = valueField.split(".").reduce((obj, cur) => obj[cur], row);
  } else {
    value = row[valueField];
  }

  if (typeof fn === "function") {
    return fn.call(this, value, row);
  } else if (typeof fn === "string") {
    // 内置规则: filter
    if (type === "filter") value = Vue.filter(fn)(value);
  }
  return value || "-";
};
