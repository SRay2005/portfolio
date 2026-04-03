"use client"

import Navbar from "@/components/Navbar"

export default function About() {
  return (
    <div className="about-page">
      <Navbar />

      <h1 className="about-title">ABOUT ME</h1>
      <div className="about-line"></div>

      <p className="about-subtitle">
        I work at the intersection of software, hardware, and intelligence
        <br />
        Building systems that bridge algorithms with the physical world.
      </p>

      {/* Top Section */}
      <div className="about-top">
        <img src="/profile.jpg" className="about-image" />

        <div className="about-bio">
          <h2>Who Am I?</h2>
          <p>
            I’m a dual-degree undergraduate at BITS Pilani with strong interests in
            machine learning, space systems, and engineering design. I enjoy building
            things end-to-end — from models and code to real systems.
          </p>

          <div className="about-tags">
            <span>Machine Learning</span>
            <span>Image Processing</span>
            <span>Remote Sensing</span>
            <span>Software Development</span>
            <span>Python Development</span>
            <span>Space Hardware</span>
          </div>
        </div>
      </div>

      {/* Info Sections */}
      <div className="about-sections">
        <div>
          <h3>Interdisciplinary Engineering</h3>
          <p>
            Dual-degree student in Electronics & Communication Engineering and Physics
            with strong mathematical and systems foundations.
          </p>
        </div>

        <div>
          <h3>Applied Machine Learning</h3>
          <p>
            Worked on AI-based image forensics, survival analysis, and signal-level
            feature extraction using CNNs and ensemble models.
          </p>
        </div>

        <div>
          <h3>Space Systems Exposure</h3>
          <p>
            Hands-on experience with CubeSat subsystems, multispectral imaging, and
            satellite payload design through Team Anant.
          </p>
        </div>

        <div>
          <h3>Industry Experience</h3>
          <p>
            Industry exposure through internships, focusing on engineering workflows,
            automation, and real-world systems.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="about-stats">
        <div>
          <h2>B.E ECE</h2>
          <p>BITS Pilani</p>
        </div>

        <div>
          <h2>M.S Physics</h2>
          <p>BITS Pilani</p>
        </div>

        <div>
          <h2>7.32</h2>
          <p>CGPA</p>
        </div>

        <div>
          <h2>2027</h2>
          <p>Graduation</p>
        </div>
      </div>
    </div>
  )
}