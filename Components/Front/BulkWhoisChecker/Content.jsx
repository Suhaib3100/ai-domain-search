import { Card, CardBody } from "@nextui-org/react";

export default function Content() {
  // const theme = localStorage.getItem('theme')
  return (
    <Card>
      <CardBody>
        <p className="text-2xl font-semibold text-center mb-4 text-blue-950 dark:text-gray-400">
          Bulk Domain Whois Checker
        </p>

        <ul className="">
          <li
            className="list-none my-4 ml-3 font-semibold"
            style={{ fontFamily: "jost" }}
          >
            Supporting hundreds of top-level-domains
          </li>

          <li
            className="list-none my-4 ml-3 font-semibold"
            style={{ fontFamily: "jost" }}
          >
            Check unlimited domains simultaneously
          </li>
          <li
            className="list-none my-4 ml-3 font-semibold"
            style={{ fontFamily: "jost" }}
          >
            Download the results in csv.
          </li>
        </ul>
        <hr />
        <Card
          variant="flat"
          className="mt-2 bg-gray-200 dark:bg-gray-800 rounded-md"
        >
          <CardBody>
            <p className="text-xl" style={{ fontFamily: "jost" }}>
              For best practice, if you have hundreds of domains to check,
              increase the{" "}
              <span className="font-semibold text-blue-800">wait time</span> to
              avoid ip blocking at location server.
            </p>
          </CardBody>
        </Card>
      </CardBody>
    </Card>
  );
}
