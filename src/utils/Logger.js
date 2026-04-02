// Logger.js - Simple logging utility
class Logger {
  static info(msg) {
    console.log('[INFO] ' + new Date().toISOString() + ' - ' + msg);
  }

  static warn(msg) {
    console.warn('[WARN] ' + new Date().toISOString() + ' - ' + msg);
  }

  static error(msg, err) {
    console.error('[ERROR] ' + new Date().toISOString() + ' - ' + msg, err || '');
  }

  static debug(msg) {
    if (process.env.NODE_ENV === 'development') {
      console.log('[DEBUG] ' + new Date().toISOString() + ' - ' + msg);
    }
  }
}

module.exports = { Logger };
