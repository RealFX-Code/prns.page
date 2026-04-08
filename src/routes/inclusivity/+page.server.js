/** @type {import('./$types').PageServerLoad} */

export const load = async ({ params }) => {
	const req = await fetch('https://en.pronouns.page/api/inclusive');
	let response = await req.json();
	return {
		// return "params", this return is `data.*`
		response
	};
};
