import { extendTheme } from "@chakra-ui/react";
import Button from "@/Component/Button";

const theme = extendTheme({
  colors: {
    primary: "#FF6464",
    secondary: "#00A8CC",
    darkColor: "#21243D",
    lightColor: "#8695A4",
    whiteColor: " #FFFFFF",
    backgroundColor: "#E5E5E5",
    backgroundColor2: "#EDF7FA",
    tagColor: "#142850",
  },
  components: {
    Button: {
      variants: {
        solid: {
          backgroundColor: "primary",
          color: "whiteColor",
        },
        ghost: {
          color: "secondary",
        },
        navBar: {
          color: "darkColor",
          fontSize: "18px",
          lineHeight: "29px",
        },
      },
    },
  },
});

export default theme;
