import React from "react"
import kirill from "../assets/kirill.png"

export default function Info() {
    return(
        <main className="info--container">
            <img className="info--picture" src={kirill} />
            <div className="info--id-container">
                <h1 className="info--id-name">Kirill Lassounski</h1>
                <p className="info--id-job-title">Java Software Engineer</p>
                <a href="https://www.thealgorich.com" className="info--id-website">www.thealgorich.com</a>
            </div>
            <div className="info--buttons-container">
                <a href="mailto:ino@thealgorich.com" className="info--buttons-email">
                    <i class="fa fa-envelope" aria-hidden="true"></i>E-mail
                </a>
                <a href="https://www.thealgorich.com" className="info--buttons-linkedin">
                    <i class="fab fa-linkedin"></i>LinkedIn
                </a>
            </div>
        </main>
    )
}