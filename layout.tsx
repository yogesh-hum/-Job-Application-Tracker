import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "ApplyTrack — Organize Your Job Search", description: "Track applications, interviews, resumes and career progress." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
