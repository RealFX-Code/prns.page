
interface language {
    username : {
        names     : string,
        pronouns  : string,
        flags     : string,
        links     : string,
        words     : string,
        card      : {
            title : string,
            dark  : string,
            light : string,
        }
    },
    inclusivity   : {
        title     : string,
        subtitle  : string
    },
    home          : {
        title     : string,
        subtitle  : string
    }
    loading       : string
}

interface lang {
    en   : language,
    es  ?: language,
    ja  ?: language,
    lad ?: language,
    pl  ?: language,
    pt  ?: language,
    ro  ?: language,
    ru  ?: language,
    sv  ?: language,
    ua  ?: language,
    vi  ?: language,
}

// TODO: add translations for all languages avaiable in the "lang" interface.
let lang : lang = {
    en: {
        username: {
            names     : "Names",
            pronouns  : "Pronouns",
            flags     : "Flags",
            links     : "Links",
            words     : "Words",
            card      : {
                title : "Card Image",
                dark  : "Dark Card",
                light : "Light Card"
            }
        },
        inclusivity   : {
            title     : "Inclusive terms",
            subtitle  : "Tons of terms used daily aren't as inclusive as you might think, Here's a good list on substitutes to use instead;"
        },
        home          : {
            title     : "prns.realfx.rocks",
            subtitle  : "An alternate front-end to <a href=\"https:\/\/pronouns.page\/\">prnouns.page</a>"
        },
        loading       : "Loading, Sit tight!"
    }
}

export { lang };