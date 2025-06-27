"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Heart } from "lucide-react";
import { useSession } from '@/integrations/supabase/auth';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface EventResult {
  name: string;
  description: string;
  date: string;
  location: string;
  link?: string;
}

interface EventResultsProps {
  events: EventResult[];
  loading: boolean;
  error: string | null;
}

const EventResults: React.FC<EventResultsProps> = ({ events, loading, error }) => {
  const { user } = useSession();

  const handleAddToFavorites = async (event: EventResult) => {
    if (!user) {
      toast.error("Veuillez vous connecter pour ajouter des événements à vos favoris.");
      return;
    }

    const { name, description, date, location, link } = event;

    const { data, error } = await supabase
      .from('user_favorites')
      .insert([
        {
          user_id: user.id,
          name,
          description,
          date,
          location,
          link,
        },
      ]);

    if (error) {
      console.error("Error adding to favorites:", error);
      toast.error("Erreur lors de l'ajout aux favoris. Veuillez réessayer.");
    } else {
      toast.success("Événement ajouté à vos favoris !");
    }
  };

  if (loading) {
    return (
      <div className="w-full max-w-3xl mx-auto mt-8 p-6 text-center text-gray-600 dark:text-gray-400">
        Recherche d'événements en cours...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-3xl mx-auto mt-8 p-6 text-center text-red-600 dark:text-red-400">
        Erreur lors de la recherche : {error}
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="w-full max-w-3xl mx-auto mt-8 p-6 text-center text-gray-600 dark:text-gray-400">
        Aucun événement trouvé pour vos critères. Essayez d'ajuster votre recherche !
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto mt-8 grid gap-4">
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">Événements trouvés</h2>
      {events.map((event, index) => (
        <Card key={index} className="shadow-md">
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
              <Button onClick={() => handleAddToFavorites(event)} className="flex items-center">
                <Heart className="mr-2 h-4 w-4" />
                Ajouter aux favoris
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default EventResults;