import Document, {
  type DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

class CustomDocument extends Document {
  // static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
  //   return await Document.getInitialProps(ctx)
  // }

  render() {
    let pageProps = this.props.__NEXT_DATA__?.props?.pageProps

    return (
      <Html
        className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']"
        lang="en"
      >
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lexend:wght@400;500&display=swap"
          />
        </Head>
        <body className="flex h-full flex-col">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
