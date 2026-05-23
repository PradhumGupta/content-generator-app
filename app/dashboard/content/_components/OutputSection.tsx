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
    const editorInstance = editorRef.current?.getInstance();
    editorInstance?.setMarkdown(aiOutput);
  }, [aiOutput]);

  return (
    <section className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between gap-4 border-b border-gray-200 p-5">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Generated Output
          </p>
          <h2 className="mt-2 text-2xl font-black tracking-tight">Your Result</h2>
        </div>
        <Button className="flex rounded-2xl bg-black px-5 font-semibold text-white hover:bg-gray-800" onClick={() => navigator.clipboard.writeText(aiOutput)}>
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
    </section>
  );
}

export default OutputSection;
