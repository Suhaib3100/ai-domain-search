import { Button, Image, useDisclosure } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import EditModal from "./EditModal";

export default function PluginList() {
  const [data, setData] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalData, setModalData] = useState("");
  useEffect(() => {
    axios.get("/api/best-wp-plugins").then((res) => {
      setData(res.data);
    });
  }, []);
  const handleModal = (x) => {
    onOpen();
    setModalData(x);
  };
  return (
    <>
      <EditModal isOpen={isOpen} onOpenChange={onOpenChange} data={modalData} />
      {data &&
        data?.plugins?.map((x, i) => (
          <div
            className="border p-3 shadow-md rounded-md flex flex-col lg:flex-row justify-between items-center my-3"
            key={i}
          >
            <div className="flex justify-start items-center">
              <Image
                isZoomed
                src={x?.pluginImage?.split("public")[1]}
                className="w-40 h-20 object-cover"
              />
              <p className="text-lg font-semibold mx-10">{x?.title}</p>
            </div>
            <div className=" mt-4 lg:mt-0">
              <Button onClick={() => handleModal(x)}>Edit</Button>
            </div>
          </div>
        ))}
    </>
  );
}
