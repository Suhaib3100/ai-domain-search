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
export default function Faq() {
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
      .post("/api/home-page/faq", { inputData, token })
      .then((res) => {
        setLoading(false);
        toast(res.data?.message, { position: "bottom-right" });
      })
      .catch((err) => {
        setLoading(false);
        toast("Some Error Occurred", { position: "bottom-right" });
      });
  };

  const handleInputChange = (index, field, newValue) => {
    // Create a copy of the inputData array with the new value at the specified index and field
    const newInputData = [...inputData];
    newInputData[index][field] = newValue;
    setInputData(newInputData);
  };

  useEffect(() => {
    axios.get("/api/home-page/faq").then((res) => {
      res.data?.faq && setInputData(res.data?.faq);
    });
  }, []);

  return (
    <Card className="m-4 !border-0" shadow="lg">
      <Toaster />
      <CardHeader>
        <h4 className="text-xl font-semibold text-violet-700">FAQ Component</h4>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {inputData.map((data, index) => (
            <div key={index}>
              <p className="text-sm text-violet-700 ml-2 mb-1 font-semibold">{`Faq ${
                index + 1
              }`}</p>
              <Input
                value={data.title}
                onChange={(e) =>
                  handleInputChange(index, "title", e.target.value)
                }
                type="text"
                label={`Faq ${index + 1} Title`}
              />
              <Spacer />

              <Textarea
                value={data.description}
                onChange={(e) =>
                  handleInputChange(index, "description", e.target.value)
                }
                label={`Faq ${index + 1} Description`}
                labelPlacement="inside"
                placeholder="Enter your description"
                // className="max-w-xs"
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
