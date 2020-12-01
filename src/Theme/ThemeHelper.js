import { createMuiTheme } from '@material-ui/core/styles';
export const themeColors ={
  light: { primary: "#FFFFFF",text:"#000",subTitleText:"grey", secondary: '#ff744a',background:'#e5e6eb',sectionColor:"#f0f2f5"},
  dark: { primary: "#333", text:"#FFF",subTitleText:"#b5b5b5",secondary: '#ff744a',background:'#444547' ,sectionColor:"#18191a"}
};
const themeHelper = (theme) => {  
  if (theme === "light") {
    return createMuiTheme({
      palette: {
        primary: {
          main: themeColors.light.primary
        },
        secondary: {
          main: themeColors.light.secondary
        },
        type: "light"
      }
    });
  } else {
    return createMuiTheme({
      palette: {
        primary: {
          main: themeColors.dark.primary
        },
        secondary: {
          main:  themeColors.dark.secondary
        },
        type: "dark"
      }
    });
  }
}

export default themeHelper;