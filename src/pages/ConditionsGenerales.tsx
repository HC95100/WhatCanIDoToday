"use client";

import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button"; // Import Button
import { ArrowLeft } from "lucide-react"; // Import ArrowLeft icon
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ConditionsGenerales = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-3xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-center flex-grow">Conditions Générales d'Utilisation</h1>
          <Button onClick={() => navigate('/')} variant="outline" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à la recherche
          </Button>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Objet et description du service</h2>
          <p className="mb-4">
            WhatCanIDoToday.com est une plateforme de découverte d'événements permettant aux utilisateurs de rechercher et consulter des activités selon leurs critères personnalisés (lieu, date, type, coût). Le service utilise l'intelligence artificielle pour proposer des suggestions d'événements pertinentes basées sur les préférences des utilisateurs.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Acceptation des conditions</h2>
          <p className="mb-4">
            L'utilisation du site WhatCanIDoToday.com implique l'acceptation pleine et entière des présentes conditions générales d'utilisation. Si vous n'acceptez pas ces conditions, nous vous invitons à ne pas utiliser notre service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Accès au service</h2>
          <h3 className="text-xl font-semibold mb-2">Conditions d'accès</h3>
          <p className="mb-4">
            Le service est accessible gratuitement à tout utilisateur disposant d'un accès Internet. Les frais d'accès et d'utilisation du réseau de télécommunication sont à la charge de l'utilisateur.
          </p>
          <h3 className="text-xl font-semibold mb-2">Disponibilité</h3>
          <p className="mb-4">
            Nous nous efforçons de maintenir le service accessible 24h/24 et 7j/7, mais ne pouvons garantir une disponibilité absolue. Des interruptions peuvent survenir pour maintenance, mise à jour ou cas de force majeure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Obligations des utilisateurs</h2>
          <h3 className="text-xl font-semibold mb-2">Usage conforme</h3>
          <p className="mb-4">
            Vous vous engagez à utiliser le service uniquement pour rechercher des informations sur des événements et activités. Tout usage détourné ou malveillant est strictement interdit.
          </p>
          <h3 className="text-xl font-semibold mb-2">Interdictions</h3>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>Perturber le fonctionnement du service</li>
            <li>Tenter d'accéder aux données d'autres utilisateurs</li>
            <li>Utiliser des robots ou scripts automatisés</li>
            <li>Reproduire, copier ou revendre les contenus du site</li>
            <li>Transmettre des contenus illégaux ou offensants</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">Responsabilité utilisateur</h3>
          <p className="mb-4">
            Vous êtes responsable de l'utilisation que vous faites du service et des conséquences qui peuvent en découler.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Propriété intellectuelle</h2>
          <h3 className="text-xl font-semibold mb-2">Droits sur le site</h3>
          <p className="mb-4">
            Le site WhatCanIDoToday.com, sa structure, son design et ses fonctionnalités sont protégés par le droit d'auteur. Toute reproduction non autorisée est interdite.
          </p>
          <h3 className="text-xl font-semibold mb-2">Contenus des événements</h3>
          <p className="mb-4">
            Les informations sur les événements proviennent de sources tierces. Nous ne revendiquons aucun droit sur ces contenus et respectons les droits de propriété intellectuelle des organisateurs d'événements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Limitation de responsabilité</h2>
          <h3 className="text-xl font-semibold mb-2">Exactitude des informations</h3>
          <p className="mb-4">
            Nous nous efforçons de fournir des informations exactes et à jour, mais ne pouvons garantir l'exactitude, la complétude ou l'actualité des informations d'événements fournies par des sources tierces ou l'API Gemini.
          </p>
          <h3 className="text-xl font-semibold mb-2">Dommages exclus</h3>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>Les dommages indirects ou immatériels</li>
            <li>La perte de données ou d'opportunités</li>
            <li>Les préjudices liés à l'utilisation d'informations inexactes</li>
            <li>Les dysfonctionnements techniques indépendants de notre volonté</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">Limitation de garantie</h3>
          <p className="mb-4">
            Le service est fourni "en l'état" sans garantie expresse ou implicite de fonctionnement parfait ou d'adéquation à un usage particulier.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Protection des données personnelles</h2>
          <p className="mb-4">
            Le traitement de vos données personnelles est régi par notre Politique de confidentialité, accessible via le lien dédié. Nous nous engageons à respecter la réglementation RGPD en vigueur.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Modifications du service</h2>
          <p className="mb-4">
            Nous nous réservons le droit de modifier, suspendre ou interrompre tout ou partie du service à tout moment, avec ou sans préavis. Les modifications importantes des conditions générales vous seront notifiées.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Droit applicable et juridiction</h2>
          <p className="mb-4">
            Les présentes conditions sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents après tentative de résolution amiable.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="mb-4">
            Pour toute question relative aux présentes conditions :
          </p>
          <p>Email : <a href="mailto:contact@whatcanidotoday.com" className="text-blue-500 hover:underline">contact@whatcanidotoday.com</a></p>
          <p>Adresse : [Votre adresse complète]</p>
        </section>

        <p className="text-sm text-gray-500 dark:text-gray-400 text-right">Dernière mise à jour : 29 juin 2025</p>
      </main>
      <Footer />
    </div>
  );
};

export default ConditionsGenerales;