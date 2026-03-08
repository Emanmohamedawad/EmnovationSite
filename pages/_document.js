import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    // read locale from cookie if present
    let locale = "en";
    if (ctx.req && ctx.req.headers && ctx.req.headers.cookie) {
      const match = ctx.req.headers.cookie
        .split(";")
        .map((c) => c.trim())
        .find((c) => c.startsWith("locale="));
      if (match) {
        locale = match.split("=")[1];
      }
    }
    return { ...initialProps, locale };
  }

  render() {
    const { locale } = this.props;
    return (
      <Html lang={locale || "en"} dir={locale === "ar" ? "rtl" : "ltr"}>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,600;0,700;1,300&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
