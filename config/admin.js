module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4fL41ktyDhtWP4cfhq1kg'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'hNl52aqkAl2r9IjMh1JdHA'),
  },
});
