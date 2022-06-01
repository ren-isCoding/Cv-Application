import React from "react"

export default function OtherOptions({ loadExample }) {
    return (
        <div className="other-options">
            <button className="create-pdf-btn">Create PDF</button>
            <button className="load-example-btn" onClick={(e) => loadExample()}>
                Load Example
            </button>
            <button className="reset-btn">Reset</button>
        </div>
    )
}