import "../styles/globals.css";
import ProgressBar from "@badrap/bar-of-progress";
import { Router } from "next/router";
const progress = new ProgressBar({
  size: 2,
  color: "#fe595e",
  delay: 100,
  className: "z-50",
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
