import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "../theme";
export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <style global jsx>{`
          html,
          body,
          body > div:first-child,
          div#__next,
          __next,
          div#__next > div {
            height: 100%;
          }
          body {
            height: 100%;
          }
          /* width */
          ::-webkit-scrollbar {
            width: 10px;
          }

          /* Track */
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
            box-shadow: inset 0 0 5px grey;
            border-radius: 10px;
          }

          /* Handle */
          ::-webkit-scrollbar-thumb {
            background: #888;
            background: #805ad5;
            border-radius: 10px;
          }

          /* Handle on hover */
          ::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
          .js-focus-visible :focus:not([data-focus-visible-added]) {
            outline: none;
            box-shadow: none;
          }
        `}</style>

        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
