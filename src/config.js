module.exports = {
    PORT: 3000,
    DB: {
      PROD: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}`,
      DEV: `mongodb://mongo:27017/${process.env.MONGO_DB}`,
      TEST: `mongodb://test-mongo:27017/${process.env.MONGO_DB}`,
    }
};
