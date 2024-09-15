import { useSelector } from "react-redux";
import Hero from "../BestWPPlugins/Hero";
import Themes from "./Themes";

export default function BestWPThemes() {
  const pageData = useSelector((state) => state.pageData);
  return (
    <>
      {/* Hero Compoenent */}
      <Hero pageData={pageData} />

      {/* Theme Component */}
      <Themes />
    </>
  );
}
