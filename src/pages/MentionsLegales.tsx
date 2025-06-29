"use client";

import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Mentions Légales</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Propriété intellectuelle</h2>
          <p className="mb-4">
            Le site WhatCanIDoToday.com et l'ensemble de son contenu (textes, images, vidéos, logos, icônes, sons, logiciels) sont protégés par les dispositions du Code de la propriété intellectuelle et par les conventions internationales relatives au droit d'auteur.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de l'éditeur.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Données personnelles</h2>
          <p className="mb-4">
            Le traitement des données personnelles collectées sur ce site est régi par notre Politique de confidentialité, accessible via le lien dédié en bas de page.
          </p>
          <p className="mb-4">
            Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
          </p>
          <p>
            Pour exercer ces droits, contactez-nous à : <a href="mailto:privacy@whatcanidotoday.com" className="text-blue-500 hover:underline">privacy@whatcanidotoday.com</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Éditeur du site</h2>
          <p>Nom de l'éditeur : Chohabi</p>
          <p>Statut : Entrepreneur individuel / Micro-entrepreneur</p>
          <p>Code postal : 95100</p>
          <p>Ville : Argenteuil</p>
          <p>Pays : France</p>
          <p>Email : <a href="mailto:contact@whatcanidotoday.com" className="text-blue-500 hover:underline">contact@whatcanidotoday.com</a></p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Directeur de publication</h2>
          <p>Directeur de publication : Chohabi Hamza</p>
          <p>Email : <a href="mailto:contact@whatcanidotoday.com" className="text-blue-500 hover:underline">contact@whatcanidotoday.com</a></p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Hébergement</h2>
          <p>Hébergeur : Hostinger International Ltd.</p>
          <p>Adresse : 61 Lordou Vironos Street, 6023 Larnaca, Chypre</p>
          <p>Site web : <a href="https://www.hostinger.fr" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">hostinger.fr</a></p>
          <p className="mb-4">Email : <a href="mailto:support@hostinger.com" className="text-blue-500 hover:underline">support@hostinger.com</a></p>

          <p>Infrastructure technique : Dyad</p>
          <p className="mb-4">Site web : <a href="https://www.dyad.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">dyad.com</a></p>

          <p>Base de données : Supabase Inc.</p>
          <p>Adresse : 970 Toa Payoh North #07-04, Singapore 318992</p>
          <p>Site web : <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">supabase.com</a></p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Limitation de responsabilité</h2>
          <p className="mb-4">
            L'éditeur s'efforce de fournir des informations aussi précises que possible sur le site WhatCanIDoToday.com. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
          </p>
          <p>
            L'éditeur ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications indiquées, soit de l'apparition d'un bug ou d'une incompatibilité.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Droit applicable et juridiction</h2>
          <p>
            Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="mb-4">
            Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter :
          </p>
          <p>Email : <a href="mailto:contact@whatcanidotoday.com" className="text-blue-500 hover:underline">contact@whatcanidotoday.com</a></p>
        </section>

        <p className="text-sm text-gray-500 dark:text-gray-400 text-right">Dernière mise à jour : 29 juin 2025</p>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegales;