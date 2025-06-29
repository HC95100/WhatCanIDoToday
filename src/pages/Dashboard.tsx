"use client";

import React, { useState } from 'react';
import { useSession } from '@/integrations/supabase/auth';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchForm from "@/components/SearchForm"; // Import SearchForm
import EventResults from "@/components/EventResults"; // Import EventResults

interface EventResult {
  name: string;
  description: string;
  date: string;
  location: string;
  link?: string;
}

const Dashboard = () => {
  const { user, loading } = useSession();
  const navigate = useNavigate();

  const [events, setEvents] = useState<EventResult[]>([]);
  const [searchLoading, setSearchLoading] = useState<boolean>(false);
  const [searchError, setSearchError] = useState<string | null>(null);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <p className="text-gray-600 dark:text-gray-400">Chargement du tableau de bord...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center">
        <Card className="w-full max-w-lg shadow-lg text-center mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Bienvenue, {user.email} !</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <p className="text-gray-700 dark:text-gray-300">
              Ceci est votre tableau de bord. Ici, vous pourrez gérer vos préférences, vos recherches récentes et vos événements enregistrés.
            </p>
            {/* Removed the buttons from here as they are in the Header */}
          </CardContent>
        </Card>

        {/* Search Form and Results */}
        <SearchForm
          onSearchResults={setEvents}
          onLoadingChange={setSearchLoading}
          onErrorChange={setSearchError}
        />
        <EventResults events={events} loading={searchLoading} error={searchError} />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;