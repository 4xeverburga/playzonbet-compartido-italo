module.exports =  ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
      host: 'awseb-e-3c6ar4ujpy-stack-awsebrdsdatabase-twqmfmtyyrja.c7ocegwio2cm.us-east-1.rds.amazonaws.com',
      port: env.int('DATABASE_PORT', 5432),
      database: 'strapi',
      user: 'postgres',
      password: 'c_m_$_stvg3_enV',
      ssl: {
        sslmode: 'require',
        rejectUnauthorized: false,
      },
		}
	}
});
