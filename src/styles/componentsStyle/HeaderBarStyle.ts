
import { StyleSheet } from "react-native";
import { semantic } from "@/theme/semantic";
import { size } from "react-native-responsive-sizes";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { primitives } from "@/theme/primitives";


export const headerBarStyles = StyleSheet.create({
  headerBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    minHeight: size(56),
    borderBottomWidth: 0,
    paddingVertical: size(6),
    // default horizontal padding moved from component
    paddingHorizontal: size(12),
    // default top padding is 0; component applies safe-area inset.top dynamically
    paddingTop: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  leftGroup: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    minWidth: 0,
  },
  logo: {
    marginRight: size(10),
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor and border set inline for glass effect
  },
  logoOuter: {
    width: wp(11),
    height: wp(11),
    borderRadius: wp(6),
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: '120%',
    height: '120%',
    borderRadius: wp(3),
  },
// logoOuter and logoInner are now utility functions, not part of StyleSheet.create
  appName: {
    color: semantic.color.text,
    fontSize: primitives.font.xl,
    fontWeight: "800",
    letterSpacing: 0.25,
    maxWidth: '80%',
    flexShrink: 1,
  },
  loginButton: {
    paddingVertical: size(4),
    paddingHorizontal: size(14),
    backgroundColor: 'transparent',
    borderRadius: size(18),
    minWidth: size(66),
    minHeight: size(28),
    alignItems: "center",
    justifyContent: "center",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: size(2),
    elevation: 2,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    marginLeft: size(8),
  },
  loginButtonText: {
    color: semantic.color.text,
    fontSize: primitives.font.sm,
    fontWeight: "700",
    letterSpacing: 0.2,
    textTransform: 'none',
  },
});
