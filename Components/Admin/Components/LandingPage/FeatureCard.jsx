import {
  Button,
  Input,
  Spacer,
  Card,
  CardBody,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
export default function FeatureCard() {
  const [inputData, setInputData] = useState([
    { title: "Title 1", description: "Description 1" },
    { title: "Title 2", description: "Description 2" },
    { title: "Title 3", description: "Description 3" },
    { title: "Title 4", description: "Description 4" },
    { title: "Title 5", description: "Description 5" },
    { title: "Title 6", description: "Description 6" },
  ]);
  const [loading, setLoading] = useState(false);
  const token = JSON.parse(localStorage.getItem("lg_tk"));
  const handleSave = (e) => {
    setLoading(true);
    axios
      .post("/api/home-page/fc", { inputData, token })
      .then((res) => {
        setLoading(false);
        toast(res.data?.message, { position: "bottom-right" });
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Some Error Occurred", { position: "bottom-right" });
      });
  };

  const handleInputChange = (index, field, newValue) => {
    // Create a copy of the inputData array with the new value at the specified index and field
    const newInputData = [...inputData];
    newInputData[index][field] = newValue;
    setInputData(newInputData);
  };
  useEffect(() => {
    axios.get("/api/home-page/fc").then((res) => {
      res.data.featureCard && setInputData(res.data?.featureCard);
    });
  }, []);

  return (
    <Card className="m-4 !border-0" shadow="lg">
      <Toaster />
      <CardHeader>
        <h4 className="text-xl font-semibold text-violet-700">
          Feature Cards Component
        </h4>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {inputData?.map((data, index) => (
            <div key={index}>
              <p className="text-sm text-violet-700 ml-2 mb-1 font-semibold">{`Card ${
                index + 1
              }`}</p>

              <Input
                value={data.title}
                onChange={(e) =>
                  handleInputChange(index, "title", e.target.value)
                }
                type="text"
                label={`Card ${index + 1} Title`}
              />
              <Spacer />
              <Input
                value={data.description}
                onChange={(e) =>
                  handleInputChange(index, "description", e.target.value)
                }
                type="text"
                label={`Card ${index + 1} Description`}
              />
              <Spacer y="4" />
            </div>
          ))}
          <Spacer y="1" />
        </div>
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
