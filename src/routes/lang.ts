import { en } from './lang/en';
import { no } from './lang/no';

export interface language {
	username: {
		names: string;
		pronouns: string;
		flags: string;
		links: string;
		words: string;
		card: {
			title: string;
			dark: string;
			light: string;
		};
	};
	inclusivity: {
		title: string;
		subtitle: string;
	};
	home: {
		title: string;
		subtitle: string;
	};
	loading: string;
}

export interface langInterface {
	de?: language;
	en: language;
	eo?: language;
	es?: language;
	fr?: language;
	gl?: language;
	it?: language;
	ja?: language;
	ko?: language;
	lad?: language;
	nl?: language;
	no?: language;
	pl?: language;
	pt?: language;
	ro?: language;
	ru?: language;
	sv?: language;
	tok?: language;
	tr?: language;
	ua?: language;
	vi?: language;
	yi?: language;
	zh?: language;
}

// TODO: add translations for all languages avaiable in the "lang" interface.
let lang: langInterface = {
	en: en,
	no: no
};

export { lang };
