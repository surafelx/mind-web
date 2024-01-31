import Document, { Head, Html, Main, NextScript } from 'next/document'
import { SkipNavLink } from 'nextra-theme-docs'
import {NextUIProvider} from "@nextui-org/react";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
        <NextUIProvider>
          <SkipNavLink styled />
          <Main /> 
          <NextScript />
          </NextUIProvider>
        </body>
      </Html>
    )
  }
}

export default MyDocument
