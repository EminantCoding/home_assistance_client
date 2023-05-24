import Layout from "@/components/ui/layout/layout";
import { wrapper } from "@/store/store";
import "@/styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { pageRoutes } from "@/routes/routes";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "@/store/login";

function App({ Component, pageProps }) {
  const router = useRouter();
  const [cookies] = useCookies(["token"]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cookies.token) {
      dispatch(getUserDetails({ token: cookies.token }));
      router.push(pageRoutes.counter);
    } else {
      router.push(pageRoutes.login);
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
