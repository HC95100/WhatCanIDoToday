"use client";

import React, { useState } from 'react';
import { Linkedin, Mail } from 'lucide-react'; // Import Linkedin icon
import { supabase } from '@/integrations/supabase/client'; // Import Supabase client
import { toast } from 'sonner'; // Import toast for notifications

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubscribe = async () => {
    if (!email) {
      toast.error("Veuillez entrer votre adresse e-mail.");
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Veuillez entrer une adresse e-mail valide.");
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email: email }]);

      if (error) {
        console.error("Error subscribing to newsletter:", error);
        if (error.code === '23505') { // Unique violation code
          toast.info("Cette adresse e-mail est déjà inscrite à la newsletter.");
        } else {
          toast.error("Erreur lors de l'inscription à la newsletter. Veuillez réessayer.");
        }
      } else {
        toast.success("Merci de vous être inscrit à notre newsletter !");
        setEmail(''); // Clear the input
      }
    } catch (err) {
      console.error("Unexpected error during newsletter subscription:", err);
      toast.error("Une erreur inattendue est survenue.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {/* Changed to 3 columns */}
          {/* Logo et description */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">WhatCanIDoToday.com</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Découvrez les meilleurs événements près de chez vous.
              Concerts, expositions, sports, culture... Ne ratez plus rien !
            </p>
          </div>

          {/* Liens légaux */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Informations légales</h4>
            <ul className="space-y-2">
              <li>
                <a href="/mentions-legales" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="/confidentialite" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="/conditions-generales" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Conditions générales
                </a>
              </li>
              <li>
                <a href="/cookies" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Gestion des cookies
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter et réseaux sociaux */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Restez connecté</h4>

            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-gray-400 text-sm mb-3">
                Recevez les meilleurs événements par email
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-3 py-2 text-sm text-gray-900 rounded-l-md focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
                <button
                  onClick={handleNewsletterSubscribe}
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md transition-colors"
                  disabled={isSubmitting}
                >
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div>
              <p className="text-gray-400 text-sm mb-3">Suivez-nous</p>
              <div className="flex space-x-3">
                <a href="https://www.linkedin.com/in/hamza-chohabi-b15a4b2a5" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 WhatCanIDoToday.com - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;