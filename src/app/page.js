"use client";
import HeroSection from "@/Components/HeroSection";
import Image from "next/image";
import { useContacts } from "@/context/ContactContext";
import FriendCard from "@/Components/FriendCard";

export default function Home() {
  const { contacts } = useContacts();
  return (
    <div className="bg-gray-50">
      <HeroSection></HeroSection>
      <main className="max-w-5xl bg-gray-50 mx-auto px-6 py-8">
        <h2 className="text-xl font-medium text-gray-800 mb-5">Your Friends</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {contacts.map((contact) => (
            <FriendCard key={contact.id} contact={contact} />
          ))}
        </div>
      </main>
    </div>
  );
}
