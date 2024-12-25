import { atom } from 'recoil';

export const themeState = atom({
  key: 'darkTheme',
  default: false,
});

export const activeButtonAtom = atom({
  key: 'activeButtonAtom',
  default: 'HOME',
});
