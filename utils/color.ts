import { colorsTuple, MantineColorsTuple } from '@mantine/core';
import chroma from 'chroma-js';

export const generateMantineColorTuple = (baseHex: string): MantineColorsTuple => {
  // Convert hex to HSL
  const baseColor = chroma(baseHex);
  const [h, s, l] = baseColor.hsl();

  // Generate shades, keeping the 6th one (index 5) as the base color
  const shades = colorsTuple(
    Array.from({ length: 10 }, (_, i) => {
      // Define lightness scale
      const lightnessScale = [95, 85, 75, 65, 55, l * 100, 45, 35, 25, 15];
      const adjustedL = lightnessScale[i] / 100;

      return chroma.hsl(h, s, adjustedL).hex();
    }),
  );

  return shades;
};
