import * as React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import CopyButton from "./CopyButton";

export default function CodeBlock({ code, language, style }) {
  return (
    <div className="CodeBlockClass">
      <CopyButton code={code} />
      <SyntaxHighlighter
        language={language}
        style={style}
        wrapLines={true}
        wrapLongLines={true}
        showLineNumbers={true}
        showInlineLineNumbers={false}
        customStyle={{
          border: "1px solid #c3c3c3",
          borderRadius: "5px",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
