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
    navigate('/login');
  };

  return (
    <header className="w-full py-6 bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-center sm:text-left flex-grow"> {/* Added flex-grow and adjusted text alignment */}
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            WhatCanIDoToday.com
          </h1>
          <p className="mt-1 text-md sm:text-lg">
            Découvrez quoi faire aujourd'hui (ou un autre jour) !
          </p>
        </div>
        <div className="flex items-center gap-2 mt-4 sm:mt-0"> {/* Added margin top for small screens */}
          {loading ? (
            <Button disabled>Chargement...</Button>
          ) : user ? (
            <>
              <Button onClick={() => navigate('/favorites')} variant="secondary">
                Mes Favoris
              </Button>
              <Button onClick={handleLogout} variant="outline">
                Déconnexion
              </Button>
            </>
          ) : (
            <Button onClick={() => navigate('/login')}>
              Se connecter
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;