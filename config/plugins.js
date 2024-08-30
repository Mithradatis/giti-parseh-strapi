module.exports = ({env}) => ({
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
