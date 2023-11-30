import { Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";

function App() {
  return (
    <>
      <div className="container mx-auto px-3">
        <br />
        <div className="flex gap-5">
          <Icon
            icon={"solar:zip-file-bold-duotone"}
            className="text-5xl drop-shadow-md text-blue-500"
          />
          <Icon
            icon={"solar:folder-bold-duotone"}
            className="text-5xl drop-shadow-md text-blue-500"
          />
          <Icon
            icon={"solar:file-bold-duotone"}
            className="text-5xl drop-shadow-md text-blue-500"
          />
        </div>
        <hr className="my-4" />
        <div className="group">
          <div className="border-3 group-hover:border-blue-500 group-hover:text-blue-500 transition-all relative p-5 h-52 rounded-lg border-dotted flex justify-center items-center">
            <div className="flex gap-4 items-center">
              <Icon
                icon={"solar:upload-linear"}
                className="text-5xl drop-shadow-md text-gray-600 group-hover:text-blue-500"
              />
            </div>
            <input
              type="file"
              name=""
              id=""
              multiple
              className="absolute inset-0 cursor-pointer opacity-0"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
