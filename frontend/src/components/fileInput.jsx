import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { CircularProgress } from "@nextui-org/react";
function FileInput({ isUploading }) {
  const [uploadProgress, setUploadProgress] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setUploadProgress((v) => (v >= 100 ? 0 : v + 1));
    }, 200);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="group">
        <div
          className={` ${isUploading ?"border border-solid":"border-2 border-dashed" } border-gray-400 group-hover:border-blue-500 
          transition-all relative p-5 h-52 rounded-lg  flex justify-center items-center`}>
          <div className="flex gap-4 items-center">
            {isUploading ? (
              <CircularProgress
                className="scale-[3]"
                aria-label="Loading..."
                size="lg"
                value={uploadProgress}
                color={
                  uploadProgress > 70
                    ? "success"
                    : uploadProgress > 30
                    ? "warning"
                    : "danger"
                }
                showValueLabel
              />
            ) : (
              <Icon
                icon={"solar:upload-linear"}
                className="text-7xl text-gray-400 group-hover:text-blue-500"
              />
            )}
          </div>
          <input
            type="file"
            name=""
            id=""
            multiple
            onChange={(e) => console.log(e.target.files)}
            className="absolute inset-0 cursor-pointer opacity-0"
          />
        </div>
      </div>
    </>
  );
}

export default FileInput;
