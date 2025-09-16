// src/lib/responsive.ts

import { useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { semantic } from "@/theme/semantic";
import { primitives } from "@/theme/primitives";
import { size } from "react-native-responsive-sizes";

//Density-independent pixels

//| Device                          | Pixel ratio | 100 dp equals |
//| ------------------------------- | ----------- | ------------- |
//| Low-end Android (mdpi, ratio 1) | 1           | 100 px        |
//| Modern phone (xhdpi, ratio 2)   | 2           | 200 px        |
//| iPhone 14 Pro (ratio 3)         | 3           | 300 px        |
//Pixel ratio = device pixels / logical pixels (dp) og så ved vi hvor meget 1 pixel er i dp

//Formula dp: physical pixels / (PPI / 160)
//UseWindowDemensions retunerer et objekt med width og height i dp
export function useResponsive() {
  const { width, height, fontScale } = useWindowDimensions(); // dp/pt
  const insets = useSafeAreaInsets();

  const dpWidth = width;
  const dpHeight = height;
  const dpShort = Math.min(dpWidth, dpHeight);
  const dpLong = Math.max(dpWidth, dpHeight);

  // Small screen (phone) → fewer dp across width (<600).
  // Big screen (tablet) → more dp across width (≥600).
  //iPhone 14 Pro: width = 1170 px, ratio = 3 → dpWidth = 1170 ÷ 3 = 390 dp.
  //Cheap Android (same px width, 1170) but lower PPI → ratio maybe 2 → dpWidth = 1170 ÷ 2 = 585 dp.

  //This example above also explains why an tablet typically will have more dp across the width than a phone hence the 600+ dp.
  //A tablet will typically have a higher PPI than a phone because the screen is larger and there is no need to cram so many pixels into a small space.

  // Breakpoints
  const breakpoints = {
    phone: dpWidth < 480,
    phablet: dpWidth >= 480 && dpWidth < 600,
    tablet: dpWidth >= 600 && dpWidth < 900,
    desktopish: dpWidth >= 900,
  };
  //istablet checker om en enhed er tablet eller desktopish --> Kræver vi foretager særlige forholdsregler for tablets og desktops
  const isTablet = breakpoints.tablet || breakpoints.desktopish;
  //Checker orientation altså om den er i landscape eller portrait vertical eller horisontal skærm
  const orientation = dpWidth >= dpHeight ? "landscape" : "portrait";
  //Regner en skræms aspect ratio ud --> Aspect ratio er lig med højden divideret med bredden
  const aspectRatio = dpLong / dpShort;
  //Tjekker om det er en meget kort skærm
  //Eksempelvis iPhone SE som har en meget kort skærm
  //iPhone SE: width = 640 px, height = 1136 px, ratio = 2 → dpShort = 640 ÷ 2 = 320 dp.
  const veryShort = dpShort < 380;

  //Simpel clamp funktion
  const clamp = (v: number, min: number, max: number) =>
    Math.max(min, Math.min(max, v));

  // Skalering baseret på accesibility font size indstillinger 
  // Vi sætter en dæmpning på så det ikke skalerer helt vildt meget op 
  const textDampen = 1 / Math.max(1, fontScale * 0.15);
  const baseScale = (dpWidth / 375) * primitives.scale * textDampen;
  // Semantic.font er defineret i semantic.ts og er baseret på primitives font størrelser
  // Vi "clamper" font størrelserne så de ikke bliver for små eller for store og er baseret på textDampen
  const clampFont = (
    size: number,
    min = semantic.font.tiny,
    max = semantic.font.huge
  ) => Math.min(max, Math.max(min, size * textDampen));

  // Clamp baseret på semantic og primitives
  // Eksempelvis vil en phone med dpWidth = 375 give iconNav = 22
  // Hvorimod en tablet med dpWidth = 800 vil give iconNav = 48
  const iconNav = clamp(
    semantic.icon.nav * baseScale,
    semantic.icon.min,
    isTablet ? semantic.icon.navTabletCap : primitives.icon.lg
  );

  // Safe area insets er safe area margins og sikre at vi ikke placerer noget for tæt på kanterne(safeareas) af skærmen
  //Regner basis vertical og horizontal padding ud baseret på dpWidth og semantic spacing værdier
  //Vi bruger semantic spacing værdierne som min og max værdier for clamping
  //På den måde sikrer vi at padding ikke bliver for lille eller for stor
  //Eksempelvis vil en phone med dpWidth = 375 give vPadBase = 5.625 som bliver clamped til 4 (semantic.space.barVMin)
  //Hvorimod en tablet med dpWidth = 800 vil give vPadBase = 12 som bliver clamped til 24 (semantic.space.barVMax)
  const vPadBase = clamp(dpWidth * 0.015, semantic.space.barVMin, semantic.space.barVMax);
  const hPadBase = clamp(dpWidth * 0.05, semantic.space.barHMin, semantic.space.barHMax);

  //Insets er safe area margins og sikre at vi ikke placerer noget for tæt på kanterne(safeareas) af skærmen
  //Vi sørger for at paddingen altid er mindst halvt så stor som insets. Af en eller anden grund er halvdelen tommerfingerregelen!!!
  //På den måde sikrer vi at der altid er nok padding til at undgå at indhold kommer for tæt på kanterne/safeareas
  //Eksempelvis vil en phone med insets.top = 20 og vPadBase = 5.625 give vPad = 10
  //Hvorimod en tablet med insets.top = 44 og vPadBase = 12 give vPad = 22
  const vPad = Math.max(vPadBase, insets.top * 0.5);       // ikke bare lig med insets
  const hPad = Math.max(hPadBase, Math.max(insets.left, insets.right) * 0.5);

  // Width for split-screen content --> Mangler mere forståelse af dette
  const contentWidth = Math.max(320, Math.min(720, dpWidth));

  // Hvor stor minimum radiusen af et touch target skal være.
  // Nu skaleret responsivt med size() for at sikre tilgængelighed på alle enheder.
  const minTouch = 48; // dp; skaleres nu responsivt

  return {
    // environment
    isTablet,
    orientation,
    aspectRatio,
    veryShort,
    dpWidth,
    dpHeight,
    fontScale,
    insets,
    breakpoints,

    // tokens
    iconNav,
    vPad,
    hPad,
    minTouch,
    contentWidth,
    clampFont,
  };
}
