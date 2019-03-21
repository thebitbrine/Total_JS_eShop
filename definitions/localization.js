var COOKIE = '__language';
var allowed = { sk: true, en: true, es: true, cz: true };

F.onLocale = function(req, res) {

    var language = req.query.language;

    // Set the language according to the querystring and store to the cookie
    if (language) {
        if (!allowed[language])
            return 'es';
        res.cookie(COOKIE, language, '2 days');
        return language;
    }

    language = req.cookie(COOKIE);
    if (language) {
        if (allowed[language])
            return language;
        return 'es';
    }

    // Sets the language according to user-agent
    language = req.language;

    if (language.indexOf('sk') > -1)
        return 'sk';

    if (language.indexOf('es') > -1)
        return 'es';

    if (language.indexOf('cz') > -1)
        return 'cz';

    return 'en';

};
