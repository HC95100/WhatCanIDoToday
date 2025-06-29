"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';

interface SessionContextType {
  session: Session | null;
  user: User | null;
  loading: boolean;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const SessionContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, currentSession) => {
      setSession(currentSession);
      setUser(currentSession?.user || null);
      if (event === 'SIGNED_IN' || event === 'USER_UPDATED') {
        if (window.location.pathname === '/login') {
          navigate('/dashboard');
        }
      } else if (event === 'SIGNED_OUT') {
        // Redirige vers la page d'accueil si l'utilisateur est déconnecté et sur une page protégée
        if (window.location.pathname === '/dashboard' || window.location.pathname === '/favorites') {
          navigate('/');
        }
      }
    });

    // Initial session check
    const checkInitialSession = async () => {
      setLoading(true);
      const { data: { session: initialSession } } = await supabase.auth.getSession();
      setSession(initialSession);
      setUser(initialSession?.user || null);
      setLoading(false);

      // Handle redirects based on initial session
      if (!initialSession && (window.location.pathname === '/dashboard' || window.location.pathname === '/favorites')) {
        navigate('/'); // Redirige vers la page d'accueil
      } else if (initialSession && window.location.pathname === '/login') {
        navigate('/dashboard');
      }
    };

    checkInitialSession();

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <SessionContext.Provider value={{ session, user, loading }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error('useSession must be used within a SessionContextProvider');
  }
  return context;
};