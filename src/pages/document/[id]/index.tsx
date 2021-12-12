import type { NextPage } from "next";
import dynamic from "next/dynamic";

const TextEditor = dynamic(() => import("src/components/editor/TextEditor"), {
  ssr: false,
});

const DocumentPage: NextPage = () => {
  return (
    <div>
      <TextEditor />
    </div>
  );
};

export default DocumentPage;
