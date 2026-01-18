"use client";

import Link from "next/link";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center space-y-8">
        {/* Heading */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Contact Me
          </h1>
          <p className="text-muted-foreground">
            Feel free to reach out — I’m always open to opportunities and conversations.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="space-y-4">
          {/* Email */}
          <div className="flex items-center justify-center gap-4 p-4 rounded-xl border border-border bg-card">
            <Mail className="w-5 h-5 text-primary" />
            <a
              href="mailto:sannidhya.ray2005@gmail.com"
              className="hover:underline"
            >
              sannidhya.ray2005@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-center gap-4 p-4 rounded-xl border border-border bg-card">
            <Phone className="w-5 h-5 text-primary" />
            <span className="hover:underline">+91 9205733240</span>
          </div>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/sannidhya-ray"
            target="_blank"
            className="flex items-center justify-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary transition"
          >
            <Linkedin className="w-5 h-5 text-primary" />
            <span className="hover:underline">LinkedIn</span>
          </Link>

          {/* GitHub */}
          <Link
            href="https://github.com/SRay2005"
            target="_blank"
            className="flex items-center justify-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary transition"
          >
            <Github className="w-5 h-5 text-primary" />
            <span className="hover:underline">GitHub</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
