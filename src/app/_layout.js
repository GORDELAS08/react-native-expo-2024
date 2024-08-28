import { Stack } from "expo-router";
import { AppProvider } from "../hooks";

const StackLayout = () => {
  return <Stack />;
};
export default function Layout() {
  return (
    <AppProvider>
      <StackLayout />
    </AppProvider>
  );
}
