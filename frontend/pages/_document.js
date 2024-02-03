import Document, { Html, Head, Main, NextScript, DocumentContext   } from "next/document";
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';

export default function MyDocument () {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (DocumentContext) => {
  const cache = createCache();
  const originalRenderPage = DocumentContext.renderPage;
  DocumentContext.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => (
        <StyleProvider cache={cache}>
          <App {...props} />
        </StyleProvider>
      ),
    });

  const initialProps = await Document.getInitialProps(DocumentContext);
  const style = extractStyle(cache, true);
  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        <style dangerouslySetInnerHTML={{ __html: style }} />
      </>
    ),
  };
};