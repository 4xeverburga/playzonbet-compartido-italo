module.exports = ({ env }) => ({
  port: env.int("PORT", 8080),
  auth: {
    secret: '3grXt9ATLwp69t7OU365vA==',
  },
  apiToken: {
    salt: 'YbMu7WadNNzOm3LTAqyKNQ==',
  },
  transfer: {
    token: {
      salt: '7Z6FKt60PT1ueWP0OJl6RQ==',
    },
  },
  flags: {
    nps: env.bool("FLAG_NPS", true),
    promoteEE: env.bool("FLAG_PROMOTE_EE", true),
  },
});
