import { Button } from "@/components/ui/button";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Copy } from "lucide-react";
import { useEffect, useRef } from "react";

interface props {
  aiOutput: string;

}

function OutputSection({aiOutput}: props) {
  const editorRef: any = useRef(null);

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  }, [aiOutput]);

  return (
    <div className="bg-card shadow-md border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">Your Result</h2>
        <Button className="flex gap-4" onClick={() => navigator.clipboard.writeText(aiOutput)}>
          <Copy className="w-4 h-4" /> Copy
        </Button>
      </div>
      <Editor ref={editorRef}
        initialValue="Your result content goes here"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={() => console.log(editorRef.current.getInstance().getMarkdown())}
      />
    </div>
  );
}

export default OutputSection;
