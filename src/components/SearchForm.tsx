"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CalendarIcon, Search, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea"; // Import Textarea component

// Removed eventTypes array as it's no longer needed for a free-text input

interface EventResult {
  name: string;
  description: string;
  date: string;
  location: string;
  link?: string;
}

interface SearchFormProps {
  onSearchResults: (events: EventResult[]) => void;
  onLoadingChange: (loading: boolean) => void;
  onErrorChange: (error: string | null) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearchResults, onLoadingChange, onErrorChange }) => {
  const [startDate, setStartDate] = React.useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = React.useState<Date | undefined>(undefined);
  const [location, setLocation] = React.useState<string>("");
  const [eventType, setEventType] = React.useState<string>(""); // Now a free-text string
  const [cost, setCost] = React.useState<string>("any");
  const [otherDetails, setOtherDetails] = React.useState<string>(""); // New state for other details
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleSearch = async () => {
    setIsLoading(true);
    onLoadingChange(true);
    onErrorChange(null);
    onSearchResults([]); // Clear previous results

    try {
      const { data, error } = await supabase.functions.invoke('search-events', {
        body: {
          location,
          startDate: startDate ? format(startDate, "yyyy-MM-dd") : "any",
          endDate: endDate ? format(endDate, "yyyy-MM-dd") : "any",
          eventType, // Pass the free-text event type
          cost,
          otherDetails, // Pass the new other details
        },
      });

      if (error) {
        console.error("Error invoking Edge Function:", error);
        toast.error("Une erreur est survenue lors de la recherche. Veuillez réessayer.");
        onErrorChange(error.message);
        onSearchResults([]);
        return;
      }

      if (data) {
        onSearchResults(data as EventResult[]);
        toast.success("Recherche terminée avec succès !");
      } else {
        onSearchResults([]);
        toast.info("Aucun événement trouvé pour votre recherche.");
      }

    } catch (err: any) {
      console.error("Unexpected error during search:", err);
      toast.error("Une erreur inattendue est survenue.");
      onErrorChange(err.message || "Erreur inconnue");
      onSearchResults([]);
    } finally {
      setIsLoading(false);
      onLoadingChange(false);
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl">Trouvez votre prochaine activité</CardTitle>
        <CardDescription>Remplissez les champs ci-dessous pour découvrir quoi faire.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="location">Lieu (Ville, Région, Pays)</Label>
          <Input
            id="location"
            placeholder="Ex: Paris, Île-de-France, France"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="startDate">Date de début</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="startDate"
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !startDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {startDate ? format(startDate, "PPP") : <span>Choisissez une date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={setStartDate}
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="endDate">Date de fin (optionnel)</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="endDate"
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !endDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {endDate ? format(endDate, "PPP") : <span>Choisissez une date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={endDate}
                  onSelect={setEndDate}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="eventType">Type d'événement (ex: concert, exposition, sport...)</Label>
          <Input
            id="eventType"
            placeholder="Ex: concert de rock, exposition d'art moderne"
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
          />
        </div>

        {/* New field for other details */}
        <div className="grid gap-2">
          <Label htmlFor="otherDetails">Autres précisions (optionnel)</Label>
          <Textarea
            id="otherDetails"
            placeholder="Ex: pour enfants, en plein air, avec restauration..."
            value={otherDetails}
            onChange={(e) => setOtherDetails(e.target.value)}
            rows={3} // Adjust height as needed
          />
        </div>

        <div className="grid gap-2">
          <Label>Coût</Label>
          <RadioGroup value={cost} onValueChange={setCost} className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="any" id="cost-any" />
              <Label htmlFor="cost-any">Peu importe</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="free" id="cost-free" />
              <Label htmlFor="cost-free">Gratuit</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="paid" id="cost-paid" />
              <Label htmlFor="cost-paid">Payant</Label>
            </div>
          </RadioGroup>
        </div>

        <Button onClick={handleSearch} className="w-full py-3 text-lg" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Recherche en cours...
            </>
          ) : (
            <>
              <Search className="mr-2 h-5 w-5" />
              Rechercher
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default SearchForm;