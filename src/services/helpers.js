export const checkResponse = response => {
  switch (response.problem) {
    case "CONNECTION_ERROR":
      return { kind: "cannot-connect", temporary: true };
    case "NETWORK_ERROR":
      return { kind: "cannot-connect", temporary: true };
    case "TIMEOUT_ERROR":
      return { kind: "unknown", temporary: true };
    case "SERVER_ERROR":
      return { kind: "unknown", temporary: true };
    case "UNKNOWN_ERROR":
      return { kind: "unknown", temporary: true };
    case "CLIENT_ERROR":
      switch (response.status) {
        case 400:
          return { kind: "bad-data", data: response.data };
        case 401:
        case 403:
          return { kind: "forbidden" };
        case 404:
          return { kind: "cannot-connect", temporary: true };
        default:
          return { kind: "unknown", temporary: true };
      }
    case "CANCEL_ERROR":
      return null;
  }
};
