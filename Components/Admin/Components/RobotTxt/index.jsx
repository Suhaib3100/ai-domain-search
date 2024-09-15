import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Divider,
  Link,
  Spacer,
  Textarea,
} from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
export default function RobotTxt() {
  const [robotTxt, setRobotTxt] = useState("");
  const [loading, setLoading] = useState(false);
  const token = JSON.parse(localStorage.getItem("lg_tk"));

  const handleSave = (e) => {
    setLoading(true);
    axios
      .post("/api/robot-txt", {
        robotTxt,
        token,
      })
      .then((res) => {
        setLoading(false);
        toast(res.data?.message, { position: "bottom-right" });
      })
      .catch((err) => {
        toast.error("Some Error Occurred", { position: "bottom-right" });
      });
  };

  useEffect(() => {
    axios.get("/api/robot-txt").then((res) => {
      if (res.data?.status) {
        setRobotTxt(res.data?.data);
      }
    });
  }, []);

  return (
    <Card className="m-4 !border-0" shadow="lg">
      <Toaster />
      <CardHeader>
        <h4 className="text-xl font-semibold text-violet-700">
          Sitemap and Robot.txt Setting
        </h4>
      </CardHeader>
      <Divider />
      <CardBody>
        <Chip variant="flat" radius="sm" color="warning">
          Sitemap are auto generated so you don't have to do anything. Please
          check you sitemap here below.
        </Chip>
        <Spacer y="2" />
        <div>
          <Link
            href={`${window.location.origin}/api/sitemap`}
            isExternal
            isBlock
            showAnchorIcon
            color="secondary"
          >
            {`${window.location.origin}/api/sitemap`}
          </Link>
        </div>
        <Spacer y="4" />
        <Textarea
          variant="bordered"
          label="Robot Txt Description"
          labelPlacement="outside"
          placeholder="Enter your Robot Txt File Description"
          className="col-span-"
          minRows={10}
          value={robotTxt}
          onChange={(e) => setRobotTxt(e.target.value)}
        />

        <Spacer y="4" />
        <div>
          <Button
            size="md"
            color="secondary"
            variant="shadow"
            isLoading={loading}
            onPress={handleSave}
          >
            Save
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
