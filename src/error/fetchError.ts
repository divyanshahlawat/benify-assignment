import { ErrorResponse } from "@/types/error";
import Error from "next/error";

export const handleNetworkError = (error: ErrorResponse) => {
  if (error instanceof Error) {
    if (error.message === "Failed to fetch") {
      return "Network error, please check your internet connection.";
    }
    return `Error: ${error.message}`;
  }
  return "An unknown error occurred while fetching data.";
};
export const logFetchDataError = (error: ErrorResponse) => {
  console.error("Fetch Data Error: ", error);
};
export const unexpectedError = () => {
  console.error("Fetch Data Error: ");
};
