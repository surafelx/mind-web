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
          <GoogleAnalytics gaId="G-G-TDPC6ZDQQ2" />
        </body>
      </Html>
    )
  }
}

export default MyDocument
