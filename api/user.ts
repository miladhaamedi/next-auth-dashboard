import { fetcher } from "./client";
import { API_ENDPOINT } from "./endpoints";

export const getUserData = () => fetcher(API_ENDPOINT);
