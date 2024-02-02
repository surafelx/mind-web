import Document, { Head, Html, Main, NextScript } from 'next/document'
import { SkipNavLink } from 'nextra-theme-docs'
import {NextUIProvider} from "@nextui-org/react";
import { GoogleAnalytics } from '@next/third-parties/google'
 
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
        <GoogleAnalytics gaId="G-TDPC6ZDQQ2" />
      </Html>
    )
  }
}

export default MyDocument
