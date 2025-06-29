"use client";

import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Politique de Confidentialité</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Types de données collectées</h2>
          <h3 className="text-xl font-semibold mb-2">Données de navigation</h3>
          <p className="mb-4">
            Nous collectons automatiquement certaines informations lors de votre visite :
          </p>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>Adresse IP</li>
            <li>Type de navigateur et version</li>
            <li>Système d'exploitation</li>
            <li>Pages visitées et durée de visite</li>
            <li>Référent (site d'où vous venez)</li>
            <li>Données de géolocalisation approximative (ville/région)</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Données de recherche</h3>
          <p className="mb-4">
            Lors de l'utilisation de notre service de recherche d'événements :
          </p>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>Critères de recherche saisis (lieu, date, type d'événement, budget)</li>
            <li>Historique des recherches effectuées</li>
            <li>Événements consultés et favoris</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Données de compte utilisateur (si applicable)</h3>
          <p className="mb-4">
            Si vous créez un compte :
          </p>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>Adresse email</li>
            <li>Mot de passe (chiffré)</li>
            <li>Préférences utilisateur</li>
            <li>Événements sauvegardés</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Finalités du traitement</h2>
          <p className="mb-4">
            Nous utilisons vos données personnelles pour :
          </p>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>Fourniture du service : Recherche et affichage d'événements personnalisés</li>
            <li>Amélioration de l'expérience : Optimisation des résultats et recommandations</li>
            <li>Analyses statistiques : Compréhension de l'utilisation du site (données anonymisées)</li>
            <li>Communication : Réponse à vos demandes de support</li>
            <li>Sécurité : Prévention de la fraude et protection du service</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Base légale du traitement</h2>
          <p className="mb-4">
            Le traitement de vos données repose sur :
          </p>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>Exécution du service : Traitement nécessaire à la fourniture du service demandé</li>
            <li>Intérêt légitime : Amélioration du service et analyses statistiques</li>
            <li>Consentement : Pour les cookies non essentiels et la géolocalisation précise</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Destinataires des données</h2>
          <p className="mb-4">
            Vos données peuvent être partagées avec :
          </p>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>Hostinger : Hébergement du site web</li>
            <li>Supabase : Stockage et gestion de la base de données</li>
            <li>Google (API Gemini) : Traitement des requêtes de recherche d'événements</li>
            <li>Dyad : Plateforme de développement no-code</li>
          </ul>
          <p>
            Ces prestataires sont situés en Union Européenne ou offrent des garanties appropriées de protection des données.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Transferts de données hors UE</h2>
          <p className="mb-4">
            Certains de nos prestataires peuvent traiter vos données en dehors de l'Union Européenne :
          </p>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>Supabase (Singapour) : Encadré par des clauses contractuelles types</li>
            <li>Google (États-Unis) : Certifié sous le Data Privacy Framework</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Durée de conservation</h2>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>Données de navigation : 13 mois maximum</li>
            <li>Données de recherche : 24 mois ou jusqu'à suppression du compte</li>
            <li>Données de compte : Jusqu'à suppression du compte ou 3 ans d'inactivité</li>
            <li>Logs de sécurité : 12 mois maximum</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Vos droits</h2>
          <p className="mb-4">
            Conformément au RGPD, vous disposez des droits suivants :
          </p>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>Droit d'accès : Vous pouvez demander l'accès aux données personnelles que nous détenons sur vous.</li>
            <li>Droit de rectification : Vous pouvez demander la correction de données inexactes ou incomplètes.</li>
            <li>Droit à l'effacement : Vous pouvez demander la suppression de vos données dans certaines conditions.</li>
            <li>Droit à la portabilité : Vous pouvez récupérer vos données dans un format structuré et lisible.</li>
            <li>Droit d'opposition : Vous pouvez vous opposer au traitement de vos données pour des raisons légitimes.</li>
            <li>Droit à la limitation : Vous pouvez demander la limitation du traitement dans certaines situations.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cookies et technologies similaires</h2>
          <h3 className="text-xl font-semibold mb-2">Cookies essentiels</h3>
          <p className="mb-4">
            Nécessaires au fonctionnement du site (session, sécurité, préférences).
          </p>
          <h3 className="text-xl font-semibold mb-2">Cookies d'analyse</h3>
          <p className="mb-4">
            Pour comprendre l'utilisation du site et améliorer nos services (avec votre consentement).
          </p>
          <h3 className="text-xl font-semibold mb-2">Gestion des cookies</h3>
          <p className="mb-4">
            Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur ou notre bandeau de consentement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Sécurité des données</h2>
          <p className="mb-4">
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées :
          </p>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>Chiffrement des données sensibles</li>
            <li>Accès restreint aux données personnelles</li>
            <li>Surveillance des accès et des modifications</li>
            <li>Sauvegardes régulières et sécurisées</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Modifications de la politique</h2>
          <p className="mb-4">
            Cette politique peut être modifiée pour refléter les évolutions de nos pratiques ou de la réglementation. La date de dernière mise à jour est indiquée ci-dessous. Les modifications importantes vous seront notifiées par email ou via un avis sur le site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact et réclamations</h2>
          <p className="mb-4">
            Pour toute question concernant cette politique de confidentialité :
          </p>
          <p>Email : <a href="mailto:privacy@whatcanidotoday.com" className="text-blue-500 hover:underline">privacy@whatcanidotoday.com</a></p>
          <p>Adresse : [Votre adresse complète]</p>
          <p className="mt-4">
            Vous avez également le droit de déposer une réclamation auprès de la CNIL :
          </p>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">cnil.fr</a></li>
            <li>Adresse : 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07</li>
            <li>Téléphone : 01 53 73 22 22</li>
          </ul>
        </section>

        <p className="text-sm text-gray-500 dark:text-gray-400 text-right">Dernière mise à jour : 29 juin 2025</p>
      </main>
      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;