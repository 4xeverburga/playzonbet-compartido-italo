module.exports = ({ env }) => ({
  port: env.int("PORT", 8080),
  app: {
    keys: ['sUUc0++NyaHnmVRiah2fRA==','EtgEhOpa51ODxtQWZIumww==','zkKnunR+EmkWZDs88BORDg==','Z81p3NTYjQFvMTaSyJKxVQ=='],
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
  cron: {
    enabled: true,
  },
});
