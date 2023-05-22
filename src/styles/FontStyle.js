import { style, fontFace } from 'typestyle';
import myFontUrl from '../../public/fonts/Metropolis-Bold.woff2'

// const metroFontUrl = '../../public/fonts/Metropolis-Bold.woff2'


fontFace({
  fontFamily: 'Metropolis',
  src: `url(${myFontUrl}) format('woff2')`
});

fontFace({
  fontFamily: 'SF Pro',
  src: "url(public/fonts/sf-pro-text-regular.woff) format('woff')",
});


export const newFont = style({  
    fontFamily: 'Metropolis'
})