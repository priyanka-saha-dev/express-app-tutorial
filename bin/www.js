const app = require('../app-middleware');
const config = require('../config');

app.listen(config.APP_PORT, () => console.log(`listening to ${config.APP_PORT}`));
