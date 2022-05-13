import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>

        <link rel="icon" type="image/x-icon" href="/logo-portfolio.svg"/>
        
        <meta name="description" content="Portfolio Samuel Claudino"/>
        <meta name="keywords" content="samuel claudino da silva, samuel claudino, samuel silva, samuelcs131, samuelcs131@gmail.com, portfolio samuel claudino"/>
        <meta name="author" content="Samuel Claudino"/>
        <meta name="copyright" content="Samuel Claudino 2022"/>
        <meta name="theme-color" content="#070D1E"/>
        <meta httpEquiv="content-language" content="pt-br"/>
        <meta property="og:title" content="Samuel Claudino"/>
        <meta property="og:description" content="Portfolio Samuel Claudino"/> 
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}