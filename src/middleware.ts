import { defineMiddleware } from 'astro:middleware';
import { createSupabaseClient } from './lib/supabase';

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  const { client, isAuthenticated } = createSupabaseClient(context.cookies);

  // Public routes that don't need auth redirection
  const publicPaths = ['/pricing', '/features', '/about', '/api/', '/docs'];
  const isPublicPath = publicPaths.some((p) => pathname.startsWith(p));

  // Root path: redirect authenticated users to workspace picker
  if (pathname === '/' && isAuthenticated) {
    // Verify the session is still valid
    const { data: { user } } = await client.auth.getUser();

    if (user) {
      // Check how many orgs the user belongs to
      const { data: memberships } = await client
        .from('org_members')
        .select('org_id, organizations(slug)')
        .eq('user_id', user.id);

      if (memberships && memberships.length === 1) {
        // Single org — redirect straight to the app
        const slug = (memberships[0] as any).organizations?.slug;
        const appDomain = import.meta.env.PUBLIC_APP_DOMAIN || 'nerops.ai';
        return context.redirect(`https://${slug}.${appDomain}`);
      }

      if (memberships && memberships.length > 1) {
        // Multiple orgs — show workspace picker
        return context.redirect('/workspaces');
      }

      // No orgs — show onboarding
      return context.redirect('/onboarding');
    }
  }

  // Workspace picker: require auth
  if (pathname === '/workspaces' && !isAuthenticated) {
    return context.redirect('/');
  }

  return next();
});
