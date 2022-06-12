const constants = {
  IS_PROD: process.env.NODE_ENV === 'production',
  JWT_SECRET: process.env.JWT_SECRET,
  PORT: process.env.PORT ? parseInt(process.env.PORT) : 3000,
};

export default constants;
