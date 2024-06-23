import * as React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaRegCopy } from "react-icons/fa";

function CopyButton({ code }) {
  return (
    <button className="CopyButtonClass">
      <CopyToClipboard text={code} onCopy={() => alert("Copied!")}>
        <div>
          <FaRegCopy />
        </div>
      </CopyToClipboard>
    </button>
  );
}

export default CopyButton;
