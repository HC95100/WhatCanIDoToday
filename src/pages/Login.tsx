"use client";

import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Bienvenue !</CardTitle>
          <CardDescription>Connectez-vous ou inscrivez-vous pour accéder à toutes les fonctionnalités.</CardDescription>
        </CardHeader>
        <CardContent>
          <Auth
            supabaseClient={supabase}
            providers={[]} // Vous pouvez ajouter des fournisseurs comme 'google', 'github' ici
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
            theme="light" // Ou "dark" si vous avez un thème sombre
            redirectTo={window.location.origin + '/dashboard'} // Redirige après connexion
            signUp={{
              // Add custom fields for sign up
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
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;