"use client";

import React, { useEffect, useState } from 'react';
import { useSession } from '@/integrations/supabase/auth';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, HeartCrack } from "lucide-react";
import { MadeWithDyad } from '@/components/made-with-dyad';
import Header from '@/components/Header';
import { toast } from 'sonner';

interface FavoriteEvent {
  id: string;
  user_id: string;
  name: string;
  description: string;
  date: string;
  location: string;
  link?: string;
}

const Favorites = () => {
  const { user, loading } = useSession();
  const [favoriteEvents, setFavoriteEvents] = useState<FavoriteEvent[]>([]);
  const [isLoadingFavorites, setIsLoadingFavorites] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (!user) {
        setIsLoadingFavorites(false);
        return;
      }

      setIsLoadingFavorites(true);
      setError(null);
      const { data, error } = await supabase
        .from('user_favorites')
        .select('*')
        .eq('user_id', user.id);

      if (error) {
        console.error("Error fetching favorites:", error);
        setError("Erreur lors du chargement de vos favoris.");
        toast.error("Erreur lors du chargement de vos favoris.");
      } else {
        setFavoriteEvents(data || []);
      }
      setIsLoadingFavorites(false);
    };

    if (!loading && user) {
      fetchFavorites();
    }
  }, [user, loading]);

  const handleRemoveFavorite = async (eventId: string) => {
    if (!user) return;

    const { error } = await supabase
      .from('user_favorites')
      .delete()
      .eq('id', eventId)
      .eq('user_id', user.id);

    if (error) {
      console.error("Error removing favorite:", error);
      toast.error("Erreur lors de la suppression du favori.");
    } else {
      setFavoriteEvents(prev => prev.filter(event => event.id !== eventId));
      toast.success("Événement retiré de vos favoris.");
    }
  };

  if (loading || isLoadingFavorites) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <p className="text-gray-600 dark:text-gray-400">Chargement de vos favoris...</p>
      </div>
    );
  }

  if (!user) {
    return null; // Redirect handled by SessionContextProvider
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">Mes Événements Favoris</h2>
        {error && (
          <div className="w-full max-w-3xl mx-auto mt-4 p-4 text-center text-red-600 dark:text-red-400">
            {error}
          </div>
        )}
        {favoriteEvents.length === 0 && !error ? (
          <div className="w-full max-w-3xl mx-auto mt-8 p-6 text-center text-gray-600 dark:text-gray-400">
            <HeartCrack className="mx-auto h-12 w-12 mb-4" />
            <p>Vous n'avez pas encore d'événements favoris. Ajoutez-en depuis la page d'accueil !</p>
            <Button onClick={() => window.location.href = '/'} className="mt-4">
              Retour à la recherche
            </Button>
          </div>
        ) : (
          <div className="w-full max-w-3xl mx-auto grid gap-4">
            {favoriteEvents.map((event) => (
              <Card key={event.id} className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl">{event.name}</CardTitle>
                  <CardDescription>{event.date} - {event.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">{event.description}</p>
                  <div className="flex flex-wrap gap-2 justify-end">
                    {event.link && (
                      <Button asChild variant="outline">
                        <a href={event.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          En savoir plus
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    <Button variant="destructive" onClick={() => handleRemoveFavorite(event.id)}>
                      Retirer des favoris
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default Favorites;