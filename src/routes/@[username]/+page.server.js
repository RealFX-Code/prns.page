/** @type {import('./$types').PageServerLoad} */

export const load = (({ params }) => {
    return {
        // return "params"

        // params contains username, accessed via "data.username"
        params
    };
});