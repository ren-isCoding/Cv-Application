import React from "react"
import Education from "./Education"
import Experience from "./Experience"

export default function MainInfo({ cv }) {
    const { desc } = cv.personalInfo
    return (
        <div className="main-info-section">
            <section>
                <h3>Description</h3>
                <div className="info-desc">
                    {desc ? desc : "Short description about yourself."}
                </div>
            </section>
            <Education />
            <Experience />
        </div>
    )
}
