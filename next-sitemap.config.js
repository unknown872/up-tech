/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://uptechnologie-corpororation.com/', // Remplace par l'URL de ton site
    generateRobotsTxt: true, // (optionnel) Génère également un fichier robots.txt
    exclude: ['/admin/*', '/404'],
    transform: async (config, path) => {
        return {
            loc: path, // URL pour chaque page
            changefreq: 'daily',
            priority: 0.7,
            lastmod: new Date().toISOString(),
        };
    },
};
