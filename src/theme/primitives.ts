// src/theme/primitives.ts
import { size, fontSize } from "react-native-responsive-sizes";
export const primitives = {
  font: {
    xxs: fontSize(8),
    xs: fontSize(10),
    sm: fontSize(12),
    md: fontSize(16),
    lg: fontSize(20),
    xl: fontSize(28),
    xxl: fontSize(36),
  },
  space: {
    xxs: size(2),
    xs: size(4),
    sm: size(8),
    md: size(12),
    lg: size(16),
    xl: size(24),
    xxl: size(32),
    xxxl: size(48),
  },
  icon: {
    xs: size(16),
    sm: size(22),
    md: size(28),
    lg: size(32),
    xl: size(36),
    xxl: size(65),
  },
  color: { text: "#fff", bg: "#181818", border: "#333" },
  scale: 1.0,
};
