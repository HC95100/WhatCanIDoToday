"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useSession } from '@/integrations/supabase/auth';

const Header = () => {
  const navigate = useNavigate();
  const { user, loading } = useSession();

  const handleAuthButtonClick = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  return (
    <header className="w-full py-6 bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-left">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            WhatCanIDoToday.com
          </h1>
          <p className="mt-1 text-md sm:text-lg">
            Découvrez quoi faire aujourd'hui (ou un autre jour) !
          </p>
        </div>
        <Button onClick={handleAuthButtonClick} disabled={loading} className="ml-4">
          {loading ? "Chargement..." : (user ? "Tableau de bord" : "Se connecter")}
        </Button>
      </div>
    </header>
  );
};

export default Header;