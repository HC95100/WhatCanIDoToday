"use client";

import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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

          {/* Support et aide */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="/aide" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Centre d'aide
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Nous contacter
                </a>
              </li>
              <li>
                <a href="/a-propos" className="text-gray-400 hover:text-white transition-colors text-sm">
                  À propos de nous
                </a>
              </li>
              <li>
                <a href="/plan-du-site" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Plan du site
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
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md transition-colors">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div>
              <p className="text-gray-400 text-sm mb-3">Suivez-nous</p>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
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