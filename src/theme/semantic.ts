// src/theme/semantic.ts
import { primitives } from "./primitives";

export const semantic = {
  font: {
    body: primitives.font.md,
    tiny: primitives.font.xxs,
    huge: primitives.font.xxl,
    title: primitives.font.xl,
  },
  icon: {
    nav: primitives.icon.sm,
    navTabletCap: primitives.icon.xxl,
    min: primitives.icon.xs,
  },
  space: {
    barVMin: primitives.space.xs,
    barVMax: primitives.space.xl,
    barHMin: primitives.space.xs, 
    barHMax: primitives.space.xl,
  },
  color: primitives.color,
};
