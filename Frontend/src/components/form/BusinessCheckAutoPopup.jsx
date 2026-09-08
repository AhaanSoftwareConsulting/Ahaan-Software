import React, { useState, useEffect } from "react";
import BusinessCheckForm from "./BusinessCheckForm"
import "./BusinessCheckAutoPopup.css";

// How long to wait after the homepage loads before the form pops up (ms)
const AUTO_OPEN_DELAY_MS = 2500;

const BusinessCheckAutoPopup=()=> {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), AUTO_OPEN_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") closePopup();
    }
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function closePopup() {
    setOpen(false);
    setDismissed(true);
  }

  return (
    <>
      {dismissed && !open && (
        <button className="bap-reopen" onClick={() => setOpen(true)}>
          🚀 Take the business check
        </button>
      )}

      {open && (
        <div className="bap-overlay" onClick={closePopup}>
          <div className="bap-panel" onClick={(e) => e.stopPropagation()}>
            <button className="bap-close" aria-label="Close" onClick={closePopup}>
              ×
            </button>
            <BusinessCheckForm />
          </div>
        </div>
      )}
    </>
  );
}
export default BusinessCheckAutoPopup;