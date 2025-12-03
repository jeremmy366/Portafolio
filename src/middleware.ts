import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
    const response = await next();

    if (response.status === 404) {
        // Here we could redirect to a custom 404 page or the home page
        // For this single-page portfolio, redirecting to home might be better UX
        // but let's keep it simple and just return the 404 for now, 
        // or we could redirect /en/something to /en/

        const pathname = context.url.pathname;
        if (pathname.startsWith('/en/') && pathname !== '/en/') {
            return context.redirect('/en/');
        } else if (pathname !== '/' && !pathname.startsWith('/en/')) {
            return context.redirect('/');
        }
    }

    return response;
});
