import { Listbox, ListboxItem } from "@nextui-org/react";
import { useState } from "react";
import { Icon } from "@iconify/react";

function ContextMenu({xYPosistion,context}) {

  return (
    <>
        {context && (
          <div
            style={{ top: xYPosistion.y, left: xYPosistion.x }}
            className="fixed bg-white z-10 border rounded-xl w-40 p-1 shadow-md">
            <Listbox aria-label="Actions" onAction={(key) => alert(key)}>
              <ListboxItem  
              startContent={<Icon icon="solar:add-folder-broken" height={25} />} key="new-folder">مجلد جديد</ListboxItem>
              <ListboxItem  
              startContent={<Icon icon="solar:copy-broken" height={25} />} key="copy">نسخ عنون الرابط</ListboxItem>
              <ListboxItem  
              startContent={<Icon icon="fluent:text-edit-style-character-a-32-regular" height={25} />}
                key="rename">إعادة التسمية</ListboxItem>
              <ListboxItem  
              startContent={<Icon icon="solar:trash-bin-minimalistic-broken" height={25} />} 
                key="delete"
                className="text-danger"
                variant="flat"
                color="danger">
                حذف الملف
              </ListboxItem>
            </Listbox>
          </div>
        )}
    </>
  );
}

export default ContextMenu;
