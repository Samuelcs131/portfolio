import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='pt-br'>
        <Head>
          {/* TAGS SEO */}
        <meta name="description" content="Calcula investimento"/>
        <meta name="keywords" content="samuel claudino da silva, samuel claudino, samuel silva, samuelcs131, samuelcs131@gmail.com, portfolio samuel claudino"/>
        <meta name="author" content="Samuel Claudino"/>
        <meta name="copyright" content="Samuel Claudino 2021"/>
        <meta name="theme-color" content="#070D1E"/>
        </Head>
        <body>
          <Main />
          <NextScript />
          
        </body>
      </Html>
    )
  }
}

export default MyDocument