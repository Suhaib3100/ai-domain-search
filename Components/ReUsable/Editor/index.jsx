import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import { buttonList } from "./utility";
const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

export default function TextEditor({
  defaultValue,
  height,
  setDefaultStyle,
  onImageUpload,
  onChange,
  setContent,
  appendContents,
}) {
  return (
    <div>
      <SunEditor
        defaultValue={defaultValue}
        setContents={setContent}
        height={height}
        // autoFocus
        setOptions={{
          buttonList,
        }}
        onChange={onChange}
        setDefaultStyle={setDefaultStyle}
        onImageUpload={onImageUpload}
        appendContents={appendContents}
      />
    </div>
  );
}
