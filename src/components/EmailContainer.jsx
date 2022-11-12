import { EmailContainerStyle } from "./styles/EmailContainerStyle";
import { ReactComponent as Clipboard } from "../assets/icons/clipboard.svg";
import { ReactComponent as EmailIcon } from "../assets/icons/email.svg";
import React, { useEffect, useState } from "react";

// shows confirmation when user copies email
const copyTextMessages = [
  ". . .",
  "Copied!",
  "Copied, again!",
  "hmmm.. Copied!",
  "OKK, ITS COPIED!",
  "Want it in the mail?",
];

const EmailContainer = ({ email }) => {
  const [copyText, setCopyText] = useState(copyTextMessages[0]);
  // update the state after copy to allow copying again
  // this is used only for animating the approved color
  const [clipboard, setClipboard] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setClipboard(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [clipboard]);

  const copyToClipBoard = () => {
    const copyTextIndex = copyTextMessages.indexOf(copyText) + 1;
    !clipboard && setCopyText(copyTextMessages[copyTextIndex < copyTextMessages.length ? copyTextIndex : 0]);

    navigator.clipboard.writeText(email);

    setClipboard(true);
  };

  return (
    <EmailContainerStyle
      className="emailContainer"
      clipboard={clipboard}
      copyText={copyText}
      onClick={copyToClipBoard}
      tabIndex={0}
      title="Click to copy to clipboard"
    >
      <div className="emailIconContainer">
        <EmailIcon />
        <div className="clipboard">
          <Clipboard />
        </div>
      </div>
      <div className="emailInfoContainer">
        <div className="emailTextContainer">
          <p className="emailText">Email me at:</p>
          <p className="email">{email}</p>
        </div>
      </div>
    </EmailContainerStyle>
  );
};

export default EmailContainer;
