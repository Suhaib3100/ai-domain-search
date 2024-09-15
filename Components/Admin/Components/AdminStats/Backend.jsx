import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";

const cards = [
  { title: "CPU Core", stats: "00", color: "orange" },
  { title: "OS", stats: "00", color: "#a2c11c" },
  { title: "Total Memorry", stats: "00 GB", color: "#5f5dbd" },
  { title: "Free Memorry", stats: "00 GB", color: "#f95959" },
  { title: "Uptime", stats: "00", color: "#42b883" },
  { title: "Host Name", stats: "00", color: "#5585b5" },
];

export default function Backend() {
  const [stats, setStats] = useState(cards);
  const [cpus, setCpus] = useState("");
  const token = JSON.parse(localStorage.getItem("lg_tk"));

  //get backend server info

  useEffect(() => {
    axios.post("/api/backend", { token }).then((res) => {
      setCpus(res.data?.cpus[0]?.model || "Data not available");
      const updatedStats = [...stats];
      updatedStats[0].stats = res.data?.cpus?.length;
      updatedStats[1].stats = res.data?.type;
      updatedStats[2].stats =
        (res.data?.totalMemory / (1024 * 1024 * 1024)).toFixed(2) + " GB";
      updatedStats[3].stats =
        (res.data?.freeMemory / (1024 * 1024 * 1024)).toFixed(2) + " GB";
      updatedStats[4].stats = (res.data?.upTime / 3600).toFixed(2);
      updatedStats[5].stats = res.data?.hostName;
      setStats(updatedStats); // Update the state with the new array
    });
    //   .catch((err) => console.log(err));
  }, []);

  return (
    <div className="px-4">
      <div>
        <p className="text-xl font-semibold text-gray-600 dark:text-gray-300">
          Server Specification
        </p>
        <p>
          CPU: <span className="font-semibold text-purple-700">{cpus}</span>{" "}
        </p>
      </div>
      <Card className="dark:border dark:border-gray-800">
        <CardBody className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {stats?.map((x, i) => (
            <Card key={i} className="w-full">
              <CardBody className="py-6 bg-gray-100 dark:bg-gray-800">
                <div className="flex justify-between items-center">
                  <div className="flex justify-start items-center">
                    <FontAwesomeIcon
                      icon={faCircle}
                      size="2x"
                      color={x?.color}
                    />
                    <div className="ml-8">
                      <p>{x?.title}</p>
                      <p className="text-2xl font-semibold">{x?.stats}</p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </CardBody>
      </Card>
    </div>
  );
}
