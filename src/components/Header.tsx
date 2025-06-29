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
    <header className="w-full py-6 bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 flex items-center">
        <div className="flex-1 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            WhatCanIDoToday.com
          </h1>
          <p className="mt-1 text-md sm:text-lg">
            Découvrez quoi faire aujourd'hui (ou un autre jour) !
          </p>
        </div>
        <div className="flex items-center gap-2 ml-auto">
          {user ? ( // Si l'utilisateur est connecté, affiche les boutons "Mes Favoris" et "Déconnexion"
            <>
              <Button onClick={() => navigate('/favorites')} variant="secondary">
                Mes Favoris
              </Button>
              <Button onClick={handleLogout} variant="secondary">
                Déconnexion
              </Button>
            </>
          ) : ( // Sinon, affiche les boutons "S'inscrire" et "Se connecter"
            <>
              <Button onClick={() => navigate('/signup')} variant="secondary">
                S'inscrire
              </Button>
              <Button onClick={() => navigate('/login')} variant="secondary">
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