import { useRoute } from '@react-navigation/native';

const tabMap: Record<string, "home" | "search" | "apps" | "settings"> = {
  Home: "home",
  Search: "search",
  Log: "apps",
  Profile: "settings",
};

export function useActiveTabFromRoute(defaultTab: string = "Home") {
  const route = useRoute();
  const fromTab = (route.params as any)?.from || defaultTab;
  return tabMap[fromTab] || "home";
}
