import { Card, CardBody, CardHeader, Divider, Spacer } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/api/contact-us/messages").then((res) => {
      if (res.data?.data) {
        setMessages(res.data?.data?.reverse());
      }
    });
  }, []);

  return (
    <Card className="m-4 !border-0" shadow="lg">
      <CardHeader>
        <h4 className="text-xl font-semibold text-violet-700">Messages</h4>
      </CardHeader>
      <Divider />
      <CardBody>
        <div>
          {messages?.map((x, i) => (
            <div
              className="border border-blue-100 shadow-lg rounded-md p-4 my-4"
              key={i}
            >
              <h3>
                <span className="font-semibold text-gray-700 mr-2">Name:</span>
                {x?.firstName + " " + x?.lastName}
              </h3>
              <h4>
                <span className="font-semibold text-gray-700 mr-2">Email:</span>{" "}
                {x?.email}
              </h4>
              <h4>
                <span className="font-semibold text-gray-700 mr-2">
                  Company:
                </span>
                {x?.company}
              </h4>
              <Spacer y={2} />
              <div className="bg-gray-100 dark:bg-slate-600 rounded-md p-1">
                <p>{x?.message}</p>
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
