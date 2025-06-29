"use client";

import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GestionCookies = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Politique de Gestion des Cookies</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Qu'est-ce qu'un cookie ?</h2>
          <p className="mb-4">
            Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, smartphone, tablette) lors de la visite d'un site web. Il permet de reconnaître votre navigateur et de mémoriser certaines informations vous concernant.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Types de cookies utilisés</h2>
          <h3 className="text-xl font-semibold mb-2">Cookies essentiels (obligatoires)</h3>
          <p className="mb-4">
            Ces cookies sont nécessaires au fonctionnement du site et ne peuvent être désactivés :
          </p>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li><strong>Cookies de session</strong>
              <ul className="list-circle list-inside ml-4">
                <li>Finalité : Maintenir votre session de navigation</li>
                <li>Durée : Supprimés à la fermeture du navigateur</li>
                <li>Données : Identifiant de session anonyme</li>
              </ul>
            </li>
            <li><strong>Cookies de sécurité</strong>
              <ul className="list-circle list-inside ml-4">
                <li>Finalité : Protéger contre les attaques CSRF</li>
                <li>Durée : Durée de la session</li>
                <li>Données : Token de sécurité</li>
              </ul>
            </li>
            <li><strong>Cookies de préférences</strong>
              <ul className="list-circle list-inside ml-4">
                <li>Finalité : Mémoriser vos choix (langue, filtres de recherche)</li>
                <li>Durée : 12 mois</li>
                <li>Données : Préférences utilisateur</li>
              </ul>
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Cookies d'analyse (optionnels)</h3>
          <p className="mb-4">
            Ces cookies nous aident à comprendre l'utilisation du site :
          </p>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li><strong>Cookies de mesure d'audience</strong>
              <ul className="list-circle list-inside ml-4">
                <li>Finalité : Analyser le trafic et améliorer le service</li>
                <li>Durée : 13 mois</li>
                <li>Données : Pages visitées, durée de visite, provenance</li>
                <li>Consentement : Requis</li>
              </ul>
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Cookies de fonctionnalité (optionnels)</h3>
          <p className="mb-4">
            Ces cookies améliorent votre expérience :
          </p>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li><strong>Cookies de géolocalisation</strong>
              <ul className="list-circle list-inside ml-4">
                <li>Finalité : Proposer des événements près de vous</li>
                <li>Durée : 6 mois</li>
                <li>Données : Position approximative</li>
                <li>Consentement : Requis</li>
              </ul>
            </li>
            <li><strong>Cookies de personnalisation</strong>
              <ul className="list-circle list-inside ml-4">
                <li>Finalité : Mémoriser vos événements favoris</li>
                <li>Durée : 24 mois</li>
                <li>Données : Identifiants d'événements</li>
                <li>Consentement : Requis</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Base légale</h2>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>Cookies essentiels : Intérêt légitime (fonctionnement du service)</li>
            <li>Cookies optionnels : Consentement libre et éclairé</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Gestion de vos préférences</h2>
          <h3 className="text-xl font-semibold mb-2">Paramétrage via notre interface</h3>
          <p className="mb-4">
            Vous pouvez modifier vos préférences de cookies à tout moment via le lien "Gestion des cookies" présent en bas de chaque page.
          </p>
          <h3 className="text-xl font-semibold mb-2">Paramétrage via votre navigateur</h3>
          <p className="mb-4">
            Vous pouvez également configurer votre navigateur pour :
          </p>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>Accepter ou refuser les cookies</li>
            <li>Être averti avant l'enregistrement d'un cookie</li>
            <li>Supprimer les cookies stockés</li>
          </ul>
          <p className="mb-4">Instructions par navigateur :</p>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>Chrome : Paramètres &gt; Confidentialité et sécurité &gt; Cookies</li>
            <li>Firefox : Préférences &gt; Vie privée et sécurité &gt; Cookies</li>
            <li>Safari : Préférences &gt; Confidentialité &gt; Cookies</li>
            <li>Edge : Paramètres &gt; Cookies et autorisations de site</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">Conséquences du refus</h3>
          <p className="mb-4">
            Le refus des cookies essentiels peut empêcher l'utilisation normale du site. Le refus des cookies optionnels peut limiter certaines fonctionnalités (géolocalisation, personnalisation).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cookies tiers</h2>
          <h3 className="text-xl font-semibold mb-2">Google (API Gemini)</h3>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>Finalité : Traitement des requêtes de recherche</li>
            <li>Politique : <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://policies.google.com/privacy</a></li>
            <li>Opt-out : <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://tools.google.com/dlpage/gaoptout</a></li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">Supabase</h3>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>Finalité : Gestion de la base de données</li>
            <li>Politique : <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://supabase.com/privacy</a></li>
            <li>Localisation : Singapour (garanties appropriées)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Durée de conservation</h2>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>Cookies de session : Supprimés à la fermeture du navigateur</li>
            <li>Cookies persistants : Entre 6 et 24 mois selon leur fonction</li>
            <li>Suppression automatique à l'expiration</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Vos droits</h2>
          <p className="mb-4">
            Vous disposez des droits suivants concernant les cookies :
          </p>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>Droit d'information sur les cookies utilisés</li>
            <li>Droit de consentement libre pour les cookies optionnels</li>
            <li>Droit de retrait du consentement à tout moment</li>
            <li>Droit d'opposition au traitement</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="mb-4">
            Pour toute question sur notre politique de cookies :
          </p>
          <p>Email : <a href="mailto:privacy@whatcanidotoday.com" className="text-blue-500 hover:underline">privacy@whatcanidotoday.com</a></p>
          <p>Adresse : [Votre adresse complète]</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Modifications</h2>
          <p className="mb-4">
            Cette politique peut être modifiée pour s'adapter aux évolutions techniques ou réglementaires. Les modifications importantes vous seront notifiées via un bandeau d'information.
          </p>
        </section>

        <p className="text-sm text-gray-500 dark:text-gray-400 text-right">Dernière mise à jour : 29 juin 2025</p>
      </main>
      <Footer />
    </div>
  );
};

export default GestionCookies;