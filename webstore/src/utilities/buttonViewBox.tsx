
const buttonViewBox = (themeContext: any) => {
  let landscapeWidthChunk= (themeContext.windowWidth * 0.8) / 3
  let portraitWidthChunk = themeContext.windowWidth / 2
  let scale = 0
  if(themeContext.isPortrait){
    scale = portraitWidthChunk
  }else{
    scale = landscapeWidthChunk
  }
  return `${-scale / 4} ${-scale / 6} ${scale} ${scale / 1.5}`
}

export const entrySVGViewBox = (themeContext: any) => {
  let landscapeWidthChunk= (themeContext.windowWidth * 0.8) / 3
  let portraitWidthChunk = themeContext.windowWidth * 1.5
  let scale = 0
  if(themeContext.isPortrait){
    scale = portraitWidthChunk
  }else{
    scale = landscapeWidthChunk
  }
  return `${-scale / 4} ${-scale / 6} ${scale} ${scale / 1.5}`
}

export default buttonViewBox;
