import {
  Button,
  Progress,
  Breadcrumbs,
  BreadcrumbItem,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  useDisclosure,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import ContextMenu from "./components/contextMenu";
import FileInput from "./components/fileInput";
import { useEffect } from "react";
import { createFolder } from "./api/api";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [context, setContext] = useState(false);
  const [xYPosistion, setXyPosistion] = useState({ x: 0, y: 0 });
  const showNav = (event) => {
    event.preventDefault();
    setContext(false);
    const positionChange = {
      x: event.pageX,
      y: event.pageY,
    };
    setXyPosistion(positionChange);
    setContext(true);
  };

  const [data, setData] = useState("");

  useEffect(() => {
  }, []);

  function handleFolderSubmit(data) {
    const fromatedData = JSON.stringify(data)
    alert(fromatedData)
    createFolder(fromatedData).then((res) => console.log(res));

  }

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <form
          onSubmit={handleSubmit(handleFolderSubmit)}
          className="flex flex-col gap-3">
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 mx-5">
                  إنشاء مجلد جديد
                </ModalHeader>
                <ModalBody>
                  <Input
                    {...register("name")}
                    size="sm"
                    variant="bordered"
                    label="إسم المجلد"
                  />
                  <Input
                    {...register("path")}
                    size="sm"
                    variant="bordered"
                    defaultValue={window.location.pathname}
                    label="تحديد موقع المجلد"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    الغاء
                  </Button>
                  <Button
                    type="submit"
                    color="success"
                    className="text-white"
                    onPress={onClose}>
                    تأكيد
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </form>
      </Modal>

      <div
        onContextMenu={showNav}
        onClick={() => setContext(false)}
        className="h-screen">
        <div className="container mx-auto px-3">
          <br />

          <div className="flex justify-between items-center">
            <Breadcrumbs>
              <BreadcrumbItem
                endContent={
                  <Icon
                    icon="solar:home-bold-duotone"
                    className="text-blue-500"
                    height={25}
                  />
                }>
                الرئسية
              </BreadcrumbItem>
            </Breadcrumbs>

            <div className="flex gap-5">
              <Button
                color="primary"
                endContent={
                  <Icon icon="solar:upload-bold-duotone" height={25} />
                }>
                رفع
              </Button>
              <Button
                color="primary"
                endContent={
                  <Icon icon="solar:add-folder-bold-duotone" height={25} />
                }
                onPress={onOpen}>
                مجلد جديد
              </Button>
            </div>
          </div>

          <hr className="my-4" />
          <Progress aria-label="Loading..." value={60} className="my-6" />
          <FileInput />
        </div>
      </div>
    </>
  );
}

export default App;
