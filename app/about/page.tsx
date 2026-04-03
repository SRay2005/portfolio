"use client"

import Navbar from "@/components/Navbar"
import PageWrapper from "@/components/PageWrapper"

const highlights = [
  {
    title: "Interdisciplinary Engineering",
    desc: "Dual-degree student in Electronics & Communication Engineering and Physics with strong mathematical and systems foundations.",
  },
  {
    title: "Applied Machine Learning",
    desc: "Worked on AI-based image forensics, survival analysis, and signal-level feature extraction using CNNs and ensemble models.",
  },
  {
    title: "Space Systems Exposure",
    desc: "Hands-on experience with CubeSat subsystems, multispectral imaging, and satellite payload design through Team Anant.",
  },
  {
    title: "Industry Experience",
    desc: "Industry exposure through internships, focusing on engineering workflows, automation, and real-world systems.",
  },
]

const stats = [
  { value: "B.E ECE",    label: "BITS Pilani" },
  { value: "M.S Physics", label: "BITS Pilani" },
  { value: "7.32",        label: "CGPA" },
  { value: "2028",        label: "Graduation" },
]

export default function About() {
  return (
    <PageWrapper>
      <div className="about-page">
        <Navbar />

        <h1 className="about-title">ABOUT ME</h1>
        <div className="about-line"></div>

        <p className="about-subtitle">
          I work at the intersection of software, hardware, and intelligence
        </p>

        <div className="about-top">
          <img src="/profile.jpg" className="about-image" />

          <div className="about-bio">
            <h2>Who Am I?</h2>
            <p>
              I'm a dual-degree undergraduate at BITS Pilani with interests in
              machine learning, space systems, and engineering design.
            </p>

            <div className="about-tags">
              <span>Machine Learning</span>
              <span>Image Processing</span>
              <span>Remote Sensing</span>
              <span>Software Development</span>
              <span>Python</span>
              <span>Electronics</span>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="about-highlights">
          {highlights.map((h, i) => (
            <div key={i} className="about-highlight-item">
              <h3>{h.title}</h3>
              <p>{h.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="about-stats">
          {stats.map((s, i) => (
            <div key={i} className="about-stat">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>

      </div>
    </PageWrapper>
  )
}