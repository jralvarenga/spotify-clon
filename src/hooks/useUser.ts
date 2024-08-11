import { UserContext } from "@/context/userContext";
import { use } from "react";

export default function useUser() {
  return use(UserContext)
}