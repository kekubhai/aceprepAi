/* eslint-disable import/no-anonymous-default-export */
/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema,js",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://AceprepAI_owner:oGtMkl9TQZ5z@ep-delicate-frost-a61kbmq5.us-west-2.aws.neon.tech/AceprepAI?sslmode=require',
  }
}