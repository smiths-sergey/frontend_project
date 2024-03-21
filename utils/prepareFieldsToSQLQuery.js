export const prepareFieldsToSQLQuery = (fields) => {
  return Object.entries(fields)
    .map(([key, value]) => `${key}='${value}'`)
    .join(", ");
};
