"use client"

import Navbar from "@/components/Navbar"
import PageWrapper from "@/components/PageWrapper"

const projects = [
  {
    name: "TicTacToeTwo",
    desc: "Real-time multiplayer strategy game with rating system and AI opponents.",
    tech: "Full Stack • Firebase • APIs",
    status: "DEPLOYED",
    link: "https://github.com/SRay2005",
  },
  {
    name: "Imager AI",
    desc: "AI-based image detection using multi-signal forensic analysis.",
    tech: "CNN • FastAPI • Image Forensics",
    status: "MODEL",
  },
  {
    name: "FormulaT",
    desc: "Formula 1 tyre survival prediction using ML models.",
    tech: "Machine Learning • Python • Data Analysis",
    status: "MODEL",
  },
  {
    name: "Liquid Crystal Research",
    desc: "Dielectric characterization of liquid crystals.",
    tech: "Electronics • Physics • Research",
    status: "RESEARCH",
  },
]

export default function Projects() {
  return (
    <PageWrapper>
      <div className="projects-page">
        <Navbar />

        <h1 className="projects-title">PROJECTS</h1>
        <div className="projects-line"></div>
        <p className="projects-sub">MODULES LOADED: 04</p>

        <div className="apps-container">
          {projects.map((p, i) => (
            <div key={i} className="app-card">
              <div className="app-left">
                <div className="app-icon">{p.name[0]}</div>

                <div>
                  <h2>{p.name}</h2>
                  <p className="app-desc">{p.desc}</p>
                  <p className="app-tech">{p.tech}</p>
                </div>
              </div>

              <div className="app-right">
                {p.link ? (
                  <div
                    className={`status clickable ${p.status.toLowerCase()}`}
                    onClick={() => window.open(p.link)}
                  >
                    {p.status}
                  </div>
                ) : (
                  <div className={`status ${p.status.toLowerCase()}`}>
                    {p.status}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}