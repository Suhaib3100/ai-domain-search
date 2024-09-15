import {
  Button,
  Input,
  Spacer,
  Textarea,
  Card,
  CardBody,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
export default function Testimonial() {
  const [testimonialTitle, setTestimonialTitle] = useState("");

  const [tText1, setTText1] = useState("");
  const [userName1, setUserName1] = useState("");
  const [userDesignation1, setUserDesignation1] = useState("");

  const [tText2, setTText2] = useState("");
  const [userName2, setUserName2] = useState("");
  const [userDesignation2, setUserDesignation2] = useState("");

  const [tText3, setTText3] = useState("");
  const [userName3, setUserName3] = useState("");
  const [userDesignation3, setUserDesignation3] = useState("");

  const [statsTitle1, setStatsTitle1] = useState("");
  const [statsNumber1, setStatsNumber1] = useState("");
  const [statsDesc1, setStatsDesc1] = useState("");

  const [statsTitle2, setStatsTitle2] = useState("");
  const [statsNumber2, setStatsNumber2] = useState("");
  const [statsDesc2, setStatsDesc2] = useState("");

  const [statsTitle3, setStatsTitle3] = useState("");
  const [statsNumber3, setStatsNumber3] = useState("");
  const [statsDesc3, setStatsDesc3] = useState("");

  const [loading, setLoading] = useState(false);
  const token = JSON.parse(localStorage.getItem("lg_tk"));
  const handleSave = (e) => {
    setLoading(true);
    axios
      .post("/api/home-page/testimonial", {
        testimonialTitle,
        tText1,
        userName1,
        userDesignation1,
        tText2,
        userName2,
        userDesignation2,
        tText3,
        userName3,
        userDesignation3,
        statsTitle1,
        statsNumber1,
        statsDesc1,
        statsTitle2,
        statsNumber2,
        statsDesc2,
        statsTitle3,
        statsNumber3,
        statsDesc3,
        token,
      })
      .then((res) => {
        setLoading(false);
        toast(res.data?.message, { position: "bottom-right" });
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Some Error Occurred", { position: "bottom-right" });
      });
  };

  useEffect(() => {
    axios.get("/api/home-page/testimonial").then((res) => {
      if (res.data?.testimonial) {
        setTestimonialTitle(res.data?.testimonial?.testimonialTitle);
        setTText1(res.data?.testimonial?.tText1);
        setUserName1(res.data?.testimonial?.userName1);
        setUserDesignation1(res.data?.testimonial?.userDesignation1);
        setTText2(res.data?.testimonial?.tText2);
        setUserName2(res.data?.testimonial?.userName2);
        setUserDesignation2(res.data?.testimonial?.userDesignation2);
        setTText3(res.data?.testimonial?.tText3);
        setUserName3(res.data?.testimonial?.userName3);
        setUserDesignation3(res.data?.testimonial?.userDesignation3);
        setStatsTitle1(res.data?.testimonial?.statsTitle1);
        setStatsNumber1(res.data?.testimonial?.statsNumber1);
        setStatsDesc1(res.data?.testimonial?.statsDesc1);
        setStatsTitle2(res.data?.testimonial?.statsTitle2);
        setStatsNumber2(res.data?.testimonial?.statsNumber2);
        setStatsDesc2(res.data?.testimonial?.statsDesc2);
        setStatsTitle3(res.data?.testimonial?.statsTitle3);
        setStatsNumber3(res.data?.testimonial?.statsNumber3);
        setStatsDesc3(res.data?.testimonial?.statsDesc3);
      }
    });
  }, []);

  return (
    <Card className="m-4 !border-0" shadow="lg">
      <Toaster />
      <CardHeader>
        <h4 className="text-xl font-semibold text-violet-700">
          Pricing Component
        </h4>
      </CardHeader>
      <Divider />
      <CardBody>
        <div>
          <Input
            value={testimonialTitle}
            onChange={(e) => setTestimonialTitle(e.target.value)}
            type="text"
            label="Testimonial Title"
          />
          <Spacer y="1" />

          <div className="flex flex-col lg:flex-row justify-between mt-2">
            <div className="w-full px-2">
              <h4 className="text-sm text-violet-700 ml-2 mb-1 font-semibold">
                User Testimonal Component 1
              </h4>

              <Input
                value={userName1}
                onChange={(e) => setUserName1(e.target.value)}
                type="text"
                label="User 1 Name"
              />
              <Spacer y="1" />
              <Input
                value={userDesignation1}
                onChange={(e) => setUserDesignation1(e.target.value)}
                type="text"
                label="User 1 Designation"
              />
              <Spacer y="1" />
              <Textarea
                value={tText1}
                onChange={(e) => setTText1(e.target.value)}
                type="text"
                label="User 1 Testimonial"
              />
              <Spacer y="4" />
            </div>
            {/* Pricing 2 component */}
            <div className="w-full px-2">
              <h4 className="text-sm text-violet-700 ml-2 mb-1 font-semibold">
                User Testimonal Component 1
              </h4>

              <Input
                value={userName2}
                onChange={(e) => setUserName2(e.target.value)}
                type="text"
                label="User 2 Name"
              />
              <Spacer y="1" />
              <Input
                value={userDesignation2}
                onChange={(e) => setUserDesignation2(e.target.value)}
                type="text"
                label="User 2 Designation"
              />
              <Spacer y="1" />
              <Textarea
                value={tText2}
                onChange={(e) => setTText2(e.target.value)}
                type="text"
                label="User 2 Testimonial"
              />
              <Spacer y="4" />
            </div>
            {/* User 3 Testimonial */}
            <div className="w-full px-2">
              <h4 className="text-sm text-violet-700 ml-2 mb-1 font-semibold">
                {" "}
                User Testimonal Component 1
              </h4>

              <Input
                value={userName3}
                onChange={(e) => setUserName3(e.target.value)}
                type="text"
                label="User 3 Name"
              />
              <Spacer y="1" />
              <Input
                value={userDesignation3}
                onChange={(e) => setUserDesignation3(e.target.value)}
                type="text"
                label="User 3 Designation"
              />
              <Spacer y="1" />
              <Textarea
                value={tText3}
                onChange={(e) => setTText3(e.target.value)}
                type="text"
                label="User 3 Testimonial"
              />
              <Spacer y="4" />
            </div>
          </div>

          {/* Stats Component */}
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="w-full px-2">
              <h4 className="text-sm text-violet-700 ml-2 mb-1 font-semibold">
                {" "}
                Stats Component 1
              </h4>

              <Input
                value={statsTitle1}
                onChange={(e) => setStatsTitle1(e.target.value)}
                type="text"
                label="Stats 1 Title"
              />
              <Spacer y="1" />
              <Input
                value={statsNumber1}
                onChange={(e) => setStatsNumber1(e.target.value)}
                type="text"
                label="Stats 1 Number"
              />
              <Spacer y="1" />
              <Input
                value={statsDesc1}
                onChange={(e) => setStatsDesc1(e.target.value)}
                type="text"
                label="Stats 1 Description"
              />
              <Spacer y="4" />
            </div>
            {/* Pricing 2 component */}
            <div className="w-full px-2">
              <h4 className="text-sm text-violet-700 ml-2 mb-1 font-semibold">
                Stats Component 2
              </h4>

              <Input
                value={statsTitle2}
                onChange={(e) => setStatsTitle2(e.target.value)}
                type="text"
                label="Stats 2 Title"
              />
              <Spacer y="1" />
              <Input
                value={statsNumber2}
                onChange={(e) => setStatsNumber2(e.target.value)}
                type="text"
                label="Stats 2 Number"
              />
              <Spacer y="1" />
              <Input
                value={statsDesc2}
                onChange={(e) => setStatsDesc2(e.target.value)}
                type="text"
                label="Stats 2 Description"
              />
              <Spacer y="4" />
            </div>
            {/* User 3 Testimonial */}
            <div className="w-full px-2">
              <h4 className="text-sm text-violet-700 ml-2 mb-1 font-semibold">
                {" "}
                Stats Component 1
              </h4>

              <Input
                value={statsTitle3}
                onChange={(e) => setStatsTitle3(e.target.value)}
                type="text"
                label="Stats 3 Title"
              />
              <Spacer y="1" />
              <Input
                value={statsNumber3}
                onChange={(e) => setStatsNumber3(e.target.value)}
                type="text"
                label="Stats 3 Number"
              />
              <Spacer y="1" />
              <Input
                value={statsDesc3}
                onChange={(e) => setStatsDesc3(e.target.value)}
                type="text"
                label="Stats 3 Description"
              />
              <Spacer y="4" />
            </div>
          </div>
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
