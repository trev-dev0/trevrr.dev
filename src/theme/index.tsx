import { extendTheme } from "@chakra-ui/react";
import fonts from "./fonts";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
const theme = extendTheme({
  fonts,
  // @ts-ignore
  config,
});

export default theme;
