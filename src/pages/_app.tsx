import "../dist/styles.css";
import { useEffect } from "react";
import { Provider } from "react-redux";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import Navbar from "@/components/Navbar";
import { AppProps } from "next/app";
import { DashboardLayout } from "@/dashboard/Layout";
import { useRouter } from "next/router";
import { store } from "@/redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isDashboard = router.pathname.includes("/dashboard");

  useEffect(() => {
    if (isDashboard) {
      document.documentElement.style.fontSize = "90%";
    } else {
      document.documentElement.style.fontSize = "62.5%";
    
      const searchBar = document.querySelector('.search-bar') as HTMLElement;
      if (searchBar) {
        searchBar.style.fontSize = '90%';
      }
    }
  }, [isDashboard]);

  return (
    <Provider store={store}>
      <Head>
        <title>Salvia-kit Dashboard V4</title>
      </Head>
      {!isDashboard && <Navbar />}
      {isDashboard ? (
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </Provider>
  );
}

export default MyApp;
