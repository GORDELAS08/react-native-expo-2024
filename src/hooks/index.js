import { FontProvider } from "./font";
import { AuthProvider } from "./Auth";

export function AppProvider({ children }) {
  return (
    <FontProvider>
      <AuthProvider>{children}</AuthProvider>
    </FontProvider>
  );
}
