"use client"

import Navbar from "@/components/Navbar"
import PageWrapper from "@/components/PageWrapper"
import { useState, useRef, useEffect } from "react"

export default function Contact() {
  const defaultHistory = [
    "Sannidhya Ray Terminal v1.0",
    "Type 'help' to see available commands.",
    ""
  ]

  const [history, setHistory] = useState<any[]>(defaultHistory)
  const [input, setInput] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  const commands: any = {
    help: "Commands: email, github, linkedin, resume, clear",
    email: <a href="mailto:sannidhya@example.com">sannidhya@example.com</a>,
    github: <a href="https://github.com/SRay2005" target="_blank">github.com/SRay2005</a>,
    linkedin: <a href="https://linkedin.com">linkedin.com</a>,
    resume: <a href="/resume.pdf" target="_blank">Opening resume...</a>,
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
      </div>
    </PageWrapper>
  )
}