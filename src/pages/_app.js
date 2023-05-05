import Layout from "@/components/ui/layout/layout";
import { wrapper } from "@/store/store";
import "@/styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

function App({ Component, pageProps }) {
  const router = useRouter();
  const [cookies] = useCookies(["token"]);

  useEffect(() => {
    if (cookies.token) {
      router.push("/counter");
    } else {
      router.push("/login");
    }
  }, [cookies.token]);

  const renderWithLayout =
    Component.getLayout ||
    function (page) {
      return <Layout>{page}</Layout>;
    };
  return renderWithLayout(<Component {...pageProps} />);
}

export default wrapper.withRedux(App);
