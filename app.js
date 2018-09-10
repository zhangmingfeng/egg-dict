'use strict';

const path = require('path');

module.exports = app => {
    const dictPath = app.config.dict.path || 'dict'; //相对app目录的路径
    app.loader.loadToApp(path.join(app.baseDir, 'app', dictPath), 'dict');
};

