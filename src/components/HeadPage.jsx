import Head from "next/head";

const HeadPage = ({titlePage}) => {
    return ( 
        <Head>
            <title>{titlePage}</title>
            <link rel="shortcut icon" href="/img/icons/logo-portfolio.svg" type="image/x-icon"/>
            <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
            <meta name="description" content="Calcula investimento"/>
            <meta name="keywords" content="samuel claudino da silva, samuel claudino, samuel silva, samuelcs131, samuelcs131@gmail.com, portfolio samuel claudino"/>
            <meta name="author" content="Samuel Claudino"/>
            <meta name="copyright" content="Samuel Claudino 2022"/>
            <meta name="theme-color" content="#070D1E"/>
        </Head>
     );
}
 
export default HeadPage;