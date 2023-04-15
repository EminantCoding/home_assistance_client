import Layout from "@/components/ui/layout/layout";
import { wrapper } from "@/store/store";
import "@/styles/globals.css";

function App({ Component, pageProps }) {
  const renderWithLayout =
    Component.getLayout ||
    function (page) {
      return <Layout>{page}</Layout>;
    };
  return renderWithLayout(<Component {...pageProps} />);
}

export default wrapper.withRedux(App);
