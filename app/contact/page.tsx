"use client"

import Navbar from "@/components/Navbar"
import PageWrapper from "@/components/PageWrapper"
import { useState, useRef, useEffect } from "react"

export default function Contact() {
  const defaultHistory = [
    "Type commands and press Enter. Try 'help' to see a list of commands.",
    ""
  ]

  const [history, setHistory] = useState<any[]>(defaultHistory)
  const [input, setInput] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  const commands: any = {
    help: "Commands: email, github, linkedin, cv, clear",
    email: <a href="mailto:sannidhya.ray2005@gmail.com">sannidhya.ray2005@gmail.com</a>,
    github: <a href="https://github.com/SRay2005" target="_blank">github.com/SRay2005</a>,
    linkedin: <a href="https://linkedin.com/in/sannidhya-ray" target="_blank">linkedin.com/in/sannidhya-ray</a>,
    cv: <a href="/resume.pdf" target="_blank">Open CV here</a>,
  }

  const handleCommand = (cmd: string) => {
    if (cmd === "clear") {
      setHistory(defaultHistory)
      return
    }
    let output = commands[cmd] || "Command not found"
    setHistory((prev: any) => [...prev, `> ${cmd}`, output])
  }

  useEffect(() => {
    inputRef.current?.focus()
    terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight)
  }, [history])

  return (
    <PageWrapper>
      <div className="contact-page">
        <Navbar />

        <div style={{ width: "900px" }}>
          <div
            className="terminal"
            ref={terminalRef}
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((line: any, i: number) => (
              <div key={i} className="terminal-line">{line}</div>
            ))}
            <div className="terminal-input">
              <span>&gt;</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleCommand(input.toLowerCase())
                    setInput("")
                  }
                }}
              />
            </div>
          </div>

          {/* Direct links for people who don't want the terminal */}
          <div className="contact-links">
            <a href="mailto:sannidhya.ray2005@gmail.com" className="contact-link">
              Email
            </a>
            <a href="https://github.com/SRay2005" target="_blank" className="contact-link">
              GitHub
            </a>
            <a href="https://linkedin.com/in/sannidhya-ray" target="_blank" className="contact-link">
              LinkedIn
            </a>
            <a href="/resume.pdf" target="_blank" className="contact-link">
              CV
            </a>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}