import { useState } from "react";
import { Tabs, Tab, Button, Progress } from "@nextui-org/react";
import { AuctionIcon, Home, Suggested } from "./icons";
import RadioGroups from "./RadioGroups";
import { nameStyleItems, randomNess } from "./items";
import DomainSettings from "./DomainSettings";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setOpenAiDomain } from "../../../../Redux/reducer";
export default function TabComponent({ value, closeModal }) {
  const [selected, setSelected] = useState("nameStyle");
  const [nameGroupValue, setNameGroupValue] = useState("auto");
  const [randomGroupValue, setRandomGroupValue] = useState("low");
  const [minLength, setMinLength] = useState("");
  const [maxLength, setMaxLength] = useState("");
  const [includeWords, setIncludeWords] = useState("");
  const [excludeWords, setExcludeWords] = useState("");
  const dispatch = useDispatch();
  // const extensions = ["com", "net", "org", "co", "in", "ai", "info", "xyz", "cc"];
  // const [ext, setExt] = useState("com");
  const [loading, setLoading] = useState(false);
  const handleGenerate = (e) => {
    setLoading(true);
    dispatch(setOpenAiDomain([]));
    axios
      .post("/api/ai-domain-generator/open-ai-domain", {
        nameGroupValue,
        randomGroupValue,
        minLength,
        maxLength,
        includeWords,
        excludeWords,
        value,
      })
      .then(async (res) => {
        // console.log(res?.data?.choices?.[0]?.message?.content);
        const domains = await axios
          .get(
            `https://sugapi.verisign-grs.com/ns-api/2.0/bulk-check?names=${res?.data?.choices?.[0]?.message?.content}&tlds=com&include-registered=true`
          )
          .then((res) =>
            res.data?.results?.map((x) => ({
              domain: x?.name,
              availability: x?.availability,
            }))
          );
        setLoading(false);

        dispatch(setOpenAiDomain(domains));
        closeModal();
        window.scrollTo({ top: 600, behavior: "smooth" });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        closeModal();
      });
  };
  return (
    <div className="flex w-full flex-col">
      <Tabs
        size="lg"
        variant="solid"
        className="mt-4 flex justify-center items-center"
        classNames={{
          tabList: "p-4",
        }}
        aria-label="AI Names"
        selectedKey={selected}
        onSelectionChange={setSelected}
      >
        <Tab
          key="nameStyle"
          title={
            <div className="flex justify-center items-center">
              {/* <FontAwesomeIcon icon={faHome} className="p-0" /> */}
              <Home className="text-warning" fill="currentColor" size={20} />
              <span className="mt-1">Name Style</span>
            </div>
          }
        >
          <RadioGroups
            groupLabel={"Name Style"}
            groupValue={nameGroupValue}
            setGroupValue={setNameGroupValue}
            items={nameStyleItems}
          />
          <Button
            className="mt-5 px-12"
            color="primary"
            variant="shadow"
            size="lg"
            onPress={(e) => setSelected("random")}
          >
            Next
          </Button>
        </Tab>
        <Tab
          key="random"
          title={
            <div className="flex justify-center items-center">
              <Suggested
                className="text-warning"
                fill="currentColor"
                size={20}
              />
              <span className="m-1">Randomness</span>
            </div>
          }
        >
          <RadioGroups
            groupLabel={"Randomness"}
            groupValue={randomGroupValue}
            setGroupValue={setRandomGroupValue}
            items={randomNess}
          />
          <Button
            className="mt-5 px-12"
            color="primary"
            variant="shadow"
            size="lg"
            onPress={(e) => setSelected("brand")}
          >
            Next
          </Button>
        </Tab>
        <Tab
          key="brand"
          title={
            <div className="flex justify-center items-center">
              <AuctionIcon
                className="text-warning"
                fill="currentColor"
                size={20}
              />
              <span className="mt-1">Brand Info</span>
            </div>
          }
        >
          <DomainSettings
            minLength={minLength}
            maxLength={maxLength}
            includeWords={includeWords}
            excludeWords={excludeWords}
            setExcludeWords={setExcludeWords}
            setIncludeWords={setIncludeWords}
            setMaxLength={setMaxLength}
            setMinLength={setMinLength}
          />
          <div className="px-4 py-2">
            {loading && (
              <Progress
                size="sm"
                isIndeterminate
                aria-label="Loading..."
                className="w-full"
              />
            )}
          </div>
          <Button
            className="mt-5 px-12"
            color="secondary"
            variant="shadow"
            size="lg"
            isLoading={loading}
            onPress={handleGenerate}
          >
            Generate
          </Button>
        </Tab>
      </Tabs>
    </div>
  );
}
