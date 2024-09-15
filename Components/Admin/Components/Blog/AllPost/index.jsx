import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
  useDisclosure,
} from "@nextui-org/react";
import Link from "next/link";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import EditIcon from "./EditIcon";
import DeleteIcon from "./DeleteIcon";
import EyeIcon from "./EyeIcon";
import { Toaster } from "react-hot-toast";
import DeleteModal from "./DeleteModal";
export default function AllCustomPages() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [allPost, setAllPost] = useState("");
  const [modalData, setModalData] = useState("");
  const [page, setPage] = useState(1);
  const handleModal = (x) => {
    onOpen();
    setModalData(x);
  };
  useEffect(() => {
    axios
      .get("/api/blog/add-new-post") // using add-new-post as get all Posts
      .then((res) => {
        setAllPost(res.data);
        // console.log(res.data);
      });
  }, []);
  const items = useMemo(() => {
    const start = (page - 1) * 10;
    const end = start + 10;

    return allPost?.slice(start, end);
  }, [page, allPost]);
  return (
    <Card className="m-4 !border-0" shadow="lg">
      <DeleteModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        data={modalData}
      />
      <Toaster />
      <CardHeader className="">
        <h4 className="text-xl font-semibold text-violet-700">
          All Posts [{allPost?.length}]
        </h4>
      </CardHeader>
      <Divider />
      <CardBody>
        <div>
          <Table
            isStriped
            removeWrapper
            aria-label="Example static collection table"
            bottomContent={
              <div className="flex w-full justify-center">
                <Pagination
                  isCompact
                  showControls
                  showShadow
                  color="secondary"
                  page={page}
                  total={Math.ceil(allPost?.length / 10)}
                  onChange={(page) => setPage(page)}
                />
              </div>
            }
          >
            <TableHeader>
              <TableColumn>Headline</TableColumn>
              <TableColumn>Date</TableColumn>
              <TableColumn>Category</TableColumn>
              <TableColumn>Status</TableColumn>
              <TableColumn>View</TableColumn>
              <TableColumn>Edit</TableColumn>
              <TableColumn>Delete</TableColumn>
            </TableHeader>
            <TableBody>
              {allPost ? (
                items?.map((x, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <p className="text-md font-semibold text-gray-800 dark:text-gray-400">
                        {x?.postHeadline}
                      </p>
                    </TableCell>
                    <TableCell>
                      <p className="text-md font-semibold text-gray-800 dark:text-gray-400">
                        {x?.date}
                      </p>
                    </TableCell>
                    <TableCell>
                      <p className="text-md font-semibold text-gray-800 dark:text-gray-400">
                        {x?.category}
                      </p>
                    </TableCell>
                    <TableCell>
                      <p className="text-md font-semibold text-gray-800 dark:text-gray-400">
                        {x?.published === "true" ? (
                          <span className="text-green-600">live</span>
                        ) : (
                          <span className="text-gray-500">draft</span>
                        )}
                      </p>
                    </TableCell>
                    <TableCell>
                      <Link
                        href={`${location.origin}/blog/${x?.permalink}`}
                        target="_blank"
                      >
                        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                          <EyeIcon />
                        </span>
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Link href={`/admin/edit-post/?post_id=${x?.id}`}>
                        <span className="text-lg text-violet-700 cursor-pointer active:opacity-50">
                          <EditIcon />
                        </span>
                      </Link>
                    </TableCell>
                    <TableCell>
                      <span className="text-lg text-danger cursor-pointer active:opacity-50">
                        <DeleteIcon onClick={() => handleModal(x?.id)} />
                      </span>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow key={1}>
                  <TableCell>...</TableCell>
                  <TableCell>...</TableCell>
                  <TableCell>...</TableCell>
                  <TableCell>...</TableCell>
                  <TableCell>...</TableCell>
                  <TableCell>...</TableCell>
                  <TableCell>...</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardBody>
    </Card>
  );
}
