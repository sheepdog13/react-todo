// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    // textColor: string;
    // bgColor: string;
    // accentColor: string;
    // cardBgColor: string;
    bgColor: string;
    boardColor: string;
    cardColor: string;
    textColor: string;
  }
}
