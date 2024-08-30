module.exports = ({env}) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook: env('DEPLOY_HOOK'),
      apiToken: env('GIT_API_TOKEN'),
      appFilter: env('APP_FILTER'),
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    }
  },
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        page: {
          field: 'slug',
          references: 'title',
        },
        product: {
          field: 'slug',
          references: 'title',
        },
      },
    },
  },
});
