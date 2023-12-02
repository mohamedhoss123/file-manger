import { Icon } from "@iconify/react";

function FileInput() {
  return (
    <>
      <div className="group">
        <div className="border-2 border-gray-400 group-hover:border-blue-500 group-hover:text-blue-500 transition-all relative p-5 h-52 rounded-lg border-dashed flex justify-center items-center">
          <div className="flex gap-4 items-center">
            <Icon
              icon={"solar:upload-linear"}
              className="text-5xl text-gray-400 group-hover:text-blue-500"
            />
          </div>
          <input
            type="file"
            name=""
            id=""
            multiple
            onChange={(e)=> console.log(e.target.files)}
            className="absolute inset-0 cursor-pointer opacity-0"
          />
        </div>
      </div>
    </>
  );
}

export default FileInput;
