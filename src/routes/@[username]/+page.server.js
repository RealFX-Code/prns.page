/** @type {import('./$types').PageServerLoad} */

export const load = (({ params }) => {
    return {
        // return "params", this return is `data.*`

        params
    };
});