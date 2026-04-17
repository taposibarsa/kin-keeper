"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  // for timeline page
  const [timeline, setTimeline] = useState([]);

const addToTimeline = (entry) => {
  setTimeline((prev) => [entry, ...prev]);
};

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, []);

  return (
    <ContactContext.Provider value={{ contacts, timeline, addToTimeline }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContacts = () => useContext(ContactContext);