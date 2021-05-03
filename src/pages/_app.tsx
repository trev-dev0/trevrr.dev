import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "../theme";
import "@fontsource/caveat";
import "@fontsource/roboto-mono";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoadingScreen from "../components/LoadingScreen";
import { Box } from "@chakra-ui/react";
import Router from "next/router";
import {motion} from "framer-motion";
function MyApp({ Component, pageProps }) {
 const router = useRouter(); 
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
     <motion.div
        key={router.route}
        style={{
          height: "100%",
          width: "100%",
          overflow: "hidden",
          position: "fixed",
          // @ts-ignore
          zIndex: "55"
        }}
        id="loadingWrapper"
        initial="pageInitial"
        animate="pageAnimate"
        transition={{
          default: {
            delay: 1,
            duration: 1,
          },
        }}
        variants={{
          pageInitial: {
            x: 0,
          },
          pageAnimate: {
            x: "110%",
          },
        }}
      >
        <LoadingScreen  />
      </motion.div>
    <Box h="100%" w="100%" zIndex={0}>
      <Component {...pageProps} />
    </Box>
     
    </ChakraProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
