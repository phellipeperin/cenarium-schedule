import { colorsTuple, createTheme, rem } from '@mantine/core';
import { Lato, Poppins } from 'next/font/google';
import { generateMantineColorTuple } from '../utils/color';

export const latoFont = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
  variable: '--font-lato',
});

export const poppinsFont = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export const createMantineTheme = () => {
  return createTheme({
    fontFamily: `${latoFont.style.fontFamily},Segoe UI,-apple-system,Arial,sans-serif`,
    fontSizes: {
      '2xl': rem(24),
      '3xl': rem(32),
      '4xl': rem(40),
    },
    headings: {
      fontFamily: `${poppinsFont.style.fontFamily},Segoe UI,-apple-system,Arial,sans-serif`,
      sizes: {
        h1: { fontSize: '3rem', fontWeight: '700' },
        h2: { fontSize: '2rem', fontWeight: '700' },
        h3: { fontSize: '1.75rem', fontWeight: '700' },
        h4: { fontSize: '1.5rem', fontWeight: '700' },
        h5: { fontSize: '1.25rem', fontWeight: '700' },
        h6: { fontSize: '1rem', fontWeight: '700' },
      },
    },
    primaryColor: 'primary',
    primaryShade: 5,
    colors: {
      primary: generateMantineColorTuple('#A3464F'),
      white: colorsTuple('#FFFFFF'),
      black: colorsTuple('#000000'),
    }
  });
};
