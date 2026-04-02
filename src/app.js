// Mobile App - Main Entry
const { uploadFile } = require('./services/FileUploadService');

function init() {
  console.log('Mobile App v1.0.0 initialized');
  return true;
}

function getVersion() {
  return '1.0.0';
}

module.exports = { init, getVersion, uploadFile };
