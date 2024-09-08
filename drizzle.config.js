/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://AceprepAI_owner:oGtMkl9TQZ5z@ep-yellow-bar-a6b3ik97.us-west-2.aws.neon.tech/AceprepAI?sslmode=require',
  }
};