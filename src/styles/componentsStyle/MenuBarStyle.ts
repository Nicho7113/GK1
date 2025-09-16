import { StyleSheet } from "react-native";
import { semantic } from "@/theme/semantic";
import { primitives } from "@/theme/primitives";
import { size } from "react-native-responsive-sizes";

export const menuBarStyles = StyleSheet.create({
  menuBar: {
    position: "absolute", left: 0, right: 0, bottom: 0,
    flexDirection: "row", alignItems: "center", justifyContent: "space-around",
    backgroundColor: semantic.color.bg,
    borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: semantic.color.border,
    shadowColor: "#000", shadowOpacity: 0.06, shadowOffset: { width: 0, height: -2 }, shadowRadius: 6, elevation: 8,
  },
  menuBarPolished: {
    backgroundColor: semantic.color.bg,
    borderTopLeftRadius: primitives.space.lg, // responsive radius
    borderTopRightRadius: primitives.space.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.12,
    shadowRadius: size(8), // responsive shadow
    elevation: 8,
    borderTopWidth: 0.5,
    borderColor: semantic.color.border,
  },
  menuItem: { flex: 1, alignItems: "center", justifyContent: "center" },
  menuItemPolished: {
    borderRadius: primitives.space.md, // responsive radius
    marginHorizontal: primitives.space.xs,
    padding: primitives.space.xs,
  },
  menuItemActive: {
    backgroundColor: '#23272F', // could be semantic.color.bgActive if you add it
  },
  activeIcon: {
    fontWeight: 'bold',
  },
});
