import { useSelector } from "react-redux";
import Hero from "./Hero";
import Plugins from "./Plugins";

export default function BestWPPlugins() {
  const pageData = useSelector((state) => state.pageData);
  return (
    <>
      {/* Hero Component */}
      <Hero pageData={pageData} />

      {/* Plugins Section */}
      <Plugins />
    </>
  );
}
