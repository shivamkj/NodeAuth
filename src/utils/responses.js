const baseHeader = {
  // "Content-Type": "application/json",

  /* #################### Comment / Uncomment these header for enabling/disabling CORS #################### */
  "Access-Control-Allow-Methods": "*",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*",
};

const success = (data, statusCode = 200, headers = null) => {
  return {
    headers: headers == null ? baseHeader : Object.assign(baseHeader, headers),
    statusCode,
    body: JSON.stringify(data),
  };
};

export { success, baseHeader };
