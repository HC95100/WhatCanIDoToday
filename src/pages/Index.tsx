"use client";

import React from 'react';
import { MadeWithDyad } from "@/components/made-with-dyad";
import Header from "@/components/Header";
import SearchForm from "@/components/SearchForm";
import EventResults from "@/components/EventResults";
import FAQSection from "@/components/FAQSection"; // Import the new FAQSection

interface EventResult {
  name: string;
  description: string;
  date: string;
  location: string;
  link?: string;
}

const Index = () => {
  const [events, setEvents] = React.useState<EventResult[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center">
        <SearchForm
          onSearchResults={setEvents}
          onLoadingChange={setLoading}
          onErrorChange={setError}
        />
        <EventResults events={events} loading={loading} error={error} />
        <FAQSection /> {/* Add the FAQSection here */}
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default Index;