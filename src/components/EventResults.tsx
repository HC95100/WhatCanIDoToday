"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

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
            {event.link && (
              <Button asChild variant="outline" className="mt-2">
                <a href={event.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  En savoir plus
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default EventResults;