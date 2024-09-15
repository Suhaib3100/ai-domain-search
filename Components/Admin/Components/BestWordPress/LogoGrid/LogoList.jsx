import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
export default function LogoG() {
  const [hostingData, setHostingData] = useState();
  const token = JSON.parse(localStorage.getItem("lg_tk"));
  useEffect(() => {
    axios.get("/api/best-wp-hosting").then((res) => {
      setHostingData(res.data);
    });
  }, []);
  const handleClick = (x) => {
    const deleteLogo = confirm("Are you sure want to delete this logo?");
    if (deleteLogo) {
      axios
        .post("/api/best-wp-hosting/delete-logo", {
          uniqueId: x.uniqueId,
          token,
        })
        .then((res) => {
          toast(res.data?.message, { position: "bottom-right" });
        })
        .catch((err) => {
          toast.error("Some Error Occurred", { position: "bottom-right" });
        });
    }
  };
  return (
    <div className="py-14">
      <Toaster />
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <h3 className="font-semibold text-sm text-gray-600 text-center">
          {hostingData?.logoGridTitle?.title ||
            "TRUSTED BY USERS FROM AROUND THE WORLD"}
        </h3>

        <div className="mt-6">
          <ul className="flex gap-y-6 flex-wrap items-center justify-center [&>*]:px-12 lg:divide-x">
            {hostingData?.addHostingLogo?.map((x, i) => (
              <li className="flex-none w-60" key={i}>
                <img
                  src={x?.hostingLogo.split("public")[1] || "/hostig"}
                  className="cursor-pointer"
                  onClick={() => handleClick(x)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
