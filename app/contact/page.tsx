"use client"

import Navbar from "@/components/Navbar"
import { useState, useRef, useEffect } from "react"

export default function Contact() {
  const defaultHistory = [
    "Type 'help' to see available commands.",
    "Type the command and press Enter",
    ""
  ]

  const [history, setHistory] = useState<any[]>(defaultHistory)
  const [input, setInput] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const commands: any = {
    help: "Commands: email, github, linkedin, cv, clear",
    email: <a href="mailto:sannidhya.ray2005@gmail.com">sannidhya.ray2005@gmail.com</a>,
    github: <a href="https://github.com/SRay2005" target="_blank">github.com/SRay2005</a>,
    linkedin: <a href="https://linkedin.com/in/sannidhya-ray" target="_blank">linkedin.com/in/sannidhya-ray</a>,
    cv: <a href="/resume.pdf" target="_blank">Opening cv...</a>,
  }

  const handleCommand = (cmd: string) => {
    if (cmd === "clear") {
      setHistory(defaultHistory)
      return
    }

    let output = commands[cmd] || "Command not found"

    setHistory((prev: any) => [...prev, `> ${cmd}`, output])
  }

  // Always focus input after history updates
  useEffect(() => {
    inputRef.current?.focus()
  }, [history])

  return (
    <div className="contact-page">
      <Navbar />

      <div
        className="terminal"
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

      {/* Direct links */}
      <div className="contact-links">
        <h2>Contact</h2>
        <a href="mailto:sannidhya.ray2005@gmail.com">Email</a>
        <a href="https://github.com/SRay2005" target="_blank">GitHub</a>
        <a href="https://linkedin.com/in/sannidhya-ray" target="_blank">LinkedIn</a>
        <a href="/resume.pdf" target="_blank">Download Résumé</a>
      </div>
    </div>
  )
}