import { style, fontFace } from 'typestyle';


fontFace({
  fontFamily: 'Metropolis',
  src: 'url("/fonts/Metropolis-Bold.woff2") format("woff2")',
});

fontFace({
  fontFamily: 'SF Pro',
  src: 'url("/public/fonts/sf-pro-text-regular.woff") format("woff")',
});


export const newFont = style({
    fontFamily: 'Metropolis'
})