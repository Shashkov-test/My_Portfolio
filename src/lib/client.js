import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: '2bvb0v3p',
    dataset: 'production',
    apiVersion: '2023-03-07',
    /* useCdn: true, */
    token: 'skazZ377tFmjdF3WnZHPSVQ1jshV6LndCbjaHuwxd37eWBDi545vC1TQ9rUTDLVvh8Foux2HbgHcXJgs90aQGGEcLFvhWBmuGeX97R0VXF0pLTYkU5EPJnqhtkzOu5fK7I9v2JYE9P5XcJCGq5dIaSVCz1y9C8hVzgoMOjg1koY0IgaGnjAT'
});