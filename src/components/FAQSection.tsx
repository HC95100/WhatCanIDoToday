"use client";

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FAQSection = () => {
  const faqs = [
    {
      question: "Comment fonctionne la recherche d'événements ?",
      answer: "Vous pouvez rechercher des événements en spécifiant un lieu (ville, région, pays), une date (ou laisser vide pour n'importe quelle date), un type d'événement (emploi, sport, culture, etc.) et un coût (gratuit, payant, ou peu importe). L'application utilise l'IA pour trouver des événements pertinents en fonction de vos critères."
    },
    {
      question: "Puis-je enregistrer des événements favoris ?",
      answer: "Oui, si vous êtes connecté, vous pouvez cliquer sur le bouton 'Ajouter aux favoris' sous chaque événement trouvé. Ces événements seront ensuite accessibles depuis la page 'Mes Favoris' via le menu en haut."
    },
    {
      question: "Comment me connecter ou créer un compte ?",
      answer: "Cliquez sur le bouton 'Se connecter' dans l'en-tête. Vous serez redirigé vers une page où vous pourrez vous inscrire avec votre adresse e-mail et un mot de passe, ou vous connecter si vous avez déjà un compte."
    },
    {
      question: "Que faire si je ne trouve pas d'événements ?",
      answer: "Si aucun événement n'est trouvé, essayez d'élargir vos critères de recherche. Par exemple, supprimez la date, choisissez 'Peu importe' pour le coût, ou sélectionnez 'Autre' pour le type d'événement. L'IA fait de son mieux pour trouver des correspondances."
    },
    {
      question: "Mes données sont-elles sécurisées ?",
      answer: "Oui, vos données sont stockées de manière sécurisée avec Supabase, qui gère l'authentification et la base de données. Vos informations personnelles et vos favoris sont protégés."
    }
  ];

  return (
    <Card className="w-full max-w-3xl mx-auto mt-12 shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Questions Fréquentes (FAQ)</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default FAQSection;