import { User } from "../screens/ContactScreen";

export const validateUser = (user: User): string | null => {
  if (
    !user.name.trim() ||
    !user.phone.trim() ||
    !user.email.trim() ||
    !user.city.trim() ||
    !user.street.trim()
  ) {
    return "Please fill in all fields.";
  }
  if (!user.email.includes("@")) {
    return "Please enter a valid email.";
  }
  return null;
};
