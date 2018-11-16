//todo cleanup

const dotenv = require('dotenv');

dotenv.load();

const DEVELOPMENT = 'development';
const PRODUCTION = 'production';
const PORT = process.env.PORT || 4070;
const LOG_LEVEL = process.env.LOG_LEVEL || 'info';
const NODE_ENV = process.env.NODE_ENV || DEVELOPMENT;

const STAGING_SSH_HOST = process.env.STAGING_SSH_HOST;
const STAGING_SSH_PORT = process.env.STAGING_SSH_PORT;
const STAGING_SSH_USERNAME = process.env.STAGING_SSH_USERNAME;
const STAGING_SSH_PASSWORD = process.env.STAGING_SSH_PASSWORD;
const DOCKER_USER = process.env.DOCKER_USER;
const DOCKER_IMAGE_NAME = process.env.DOCKER_IMAGE_NAME;
const DOCKER_REGISTRY = process.env.DOCKER_REGISTRY;

const FILE_CONTENT_SECRET = process.env.FILE_CONTENT_SECRET || '123456';
const APP_FILE_CONTENT_ENDPOINT_URL =
  process.env.APP_FILE_CONTENT_ENDPOINT_URL || 'http://localhost:4070/';
const MY_EXTERNAL_URL = process.env.MY_EXTERNAL_URL || APP_FILE_CONTENT_ENDPOINT_URL;

const CLEANUP_DELETED_UPLOADS_LOAD_BATCH = Number(
  process.env.CLEANUP_DELETED_UPLOADS_LOAD_BATCH || 100,
);
const CLEANUP_DELETED_UPLOADS_WITH_LIFETIME_IN_SECONDS = Number(
  process.env.CLEANUP_DELETED_UPLOADS_WITH_LIFETIME_IN_SECONDS || 1 * 24 * 60 * 60,
);

const CLEANUP_PENDING_UPLOADS_LOAD_BATCH = Number(
  process.env.CLEANUP_PENDING_UPLOADS_LOAD_BATCH || 100,
);
const CLEANUP_PENDING_UPLOADS_WITH_LIFETIME_IN_SECONDS = Number(
  process.env.CLEANUP_PENDING_UPLOADS_WITH_LIFETIME_IN_SECONDS || 0.5 * 24 * 60 * 60,
);

const CLEANUP_DELETED_ATTACHMENTS_LOAD_BATCH = Number(
  process.env.CLEANUP_DELETED_ATTACHMENTS_LOAD_BATCH || 100,
);
const CLEANUP_DELETED_ATTACHMENTS_WITH_LIFETIME_IN_SECONDS = Number(
  process.env.CLEANUP_DELETED_ATTACHMENTS_WITH_LIFETIME_IN_SECONDS || 0.5 * 24 * 60 * 60,
);

module.exports = {
  PORT,
  NODE_ENV,
  IS_PRODUCTION: NODE_ENV === PRODUCTION,
  STAGING_SSH_HOST,
  STAGING_SSH_PORT,
  STAGING_SSH_USERNAME,
  STAGING_SSH_PASSWORD,
  DOCKER_USER,
  DOCKER_IMAGE_NAME,
  DOCKER_REGISTRY,
  LOG_LEVEL,
  FILE_CONTENT_SECRET,
  APP_FILE_CONTENT_ENDPOINT_URL,
  MY_EXTERNAL_URL,
  CLEANUP_DELETED_UPLOADS_LOAD_BATCH,
  CLEANUP_DELETED_UPLOADS_WITH_LIFETIME_IN_SECONDS,
  CLEANUP_PENDING_UPLOADS_LOAD_BATCH,
  CLEANUP_PENDING_UPLOADS_WITH_LIFETIME_IN_SECONDS,
  CLEANUP_DELETED_ATTACHMENTS_LOAD_BATCH,
  CLEANUP_DELETED_ATTACHMENTS_WITH_LIFETIME_IN_SECONDS,
};
