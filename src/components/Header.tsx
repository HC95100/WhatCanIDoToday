"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useSession } from '@/integrations/supabase/auth';
import { supabase } from '@/integrations/supabase/client';

const Header = () => {
  const navigate = useNavigate();
  const { user, loading } = useSession();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/'); // Redirige vers la page d'accueil après déconnexion
  };

  return (
    <header className="w-full py-8 bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center relative">
        {/* Title and Slogan - Centered absolutely on large screens, centered normally on small screens */}
        <div className="text-center mb-4 sm:mb-0 sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:w-auto">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            WhatCanIDoToday.com
          </h1>
          <p className="mt-1 text-md sm:text-lg">
            Découvrez quoi faire aujourd'hui (ou un autre jour) !
          </p>
        </div>
        {/* Buttons - Centered on small screens, pushed to the right on large screens */}
        <div className="flex items-center gap-2 flex-shrink-0 w-full justify-center sm:w-auto sm:ml-auto">
          {user ? ( // Si l'utilisateur est connecté, affiche les boutons "Mes Favoris" et "Déconnexion"
            <>
              <Button onClick={() => navigate('/favorites')} variant="secondary" className="whitespace-nowrap">
                Mes Favoris
              </Button>
              <Button onClick={handleLogout} variant="secondary" className="whitespace-nowrap">
                Déconnexion
              </Button>
            </>
          ) : ( // Sinon, affiche les boutons "S'inscrire" et "Se connecter"
            <>
              <Button onClick={() => navigate('/signup')} variant="secondary" className="whitespace-nowrap">
                S'inscrire
              </Button>
              <Button onClick={() => navigate('/login')} variant="secondary" className="whitespace-nowrap">
                Se connecter
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;