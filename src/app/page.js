"use client";
import HeroSection from "@/Components/HeroSection";
import Image from "next/image";
import { useContacts } from "@/context/ContactContext";

export default function Home() {
   const { contacts } = useContacts();
  return (
    <div>
      <HeroSection></HeroSection>
      <main>
        
      </main>
      <div>
      {contacts.map((c) => (
        <h2 key={c.id}>{c.name}</h2>
      ))}
    </div>
    </div>
  );
}
