"use client"

import Navbar from "@/components/Navbar"
import PageWrapper from "@/components/PageWrapper"

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
              I’m a dual-degree undergraduate at BITS Pilani with interests in
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
      </div>
    </PageWrapper>
  )
}