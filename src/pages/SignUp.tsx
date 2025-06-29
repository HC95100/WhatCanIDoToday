"use client";

import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Créez votre compte</CardTitle>
          <CardDescription>Bienvenue ! Connectez-vous pour avoir accès à toutes les fonctionnalités.</CardDescription>
        </CardHeader>
        <CardContent>
          <Auth
            supabaseClient={supabase}
            providers={[]}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: 'hsl(var(--primary))',
                    brandAccent: 'hsl(var(--primary-foreground))',
                  },
                },
              },
            }}
            theme="light"
            redirectTo={window.location.origin + '/dashboard'}
            signUp={{
              fields: [
                {
                  name: 'first_name',
                  label: 'Prénom',
                  type: 'text',
                  placeholder: 'Votre prénom',
                  required: true,
                },
                {
                  name: 'last_name',
                  label: 'Nom',
                  type: 'text',
                  placeholder: 'Votre nom',
                  required: true,
                },
              ],
            }}
            defaultView="sign_up"
          />
          <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
            Vous avez déjà un compte ?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">
              Connectez-vous ici
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;