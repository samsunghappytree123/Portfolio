import { Router, useRouter } from "next/router";
import { useEffect } from "react";
import Navbar from './components/Nav'
import Footer from './components/Footer'
import NProgress from 'nprogress'

import '@/styles/index.css'
import '@/styles/card.css'
import "nprogress/nprogress.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function App({ Component, pageProps }) {
  const router = useRouter();
  NProgress.configure({showSpinner: false});

  useEffect(() => storePathValues, [router.asPath]);

  useEffect(() => {
    Router.events.on("routeChangeStart", (url)=>{
      NProgress.start()
    });

    Router.events.on("routeChangeComplete", (url)=>{
      NProgress.done(false)
    });
  
    Router.events.on("routeChangeError", (url) =>{
      NProgress.done(false)
    });
  }, [Router])

  function storePathValues() {
    const storage = globalThis?.sessionStorage;
    if (!storage) return;
    // Set the previous path as the value of the current path.
    const prevPath = storage.getItem("currentPath");
    storage.setItem("prevPath", prevPath);
    // Set the current path value by looking at the browser's location object.
    storage.setItem("currentPath", globalThis.location.pathname);
  }

  return (<>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>)
}
