export const env = {
  LANDING_BASE_URL:
    process.env.NEXT_PUBLIC_LANDING_BASE_URL || "http://localhost:3002",
  APP_BASE_URL: process.env.NEXT_PUBLIC_APP_BASE_URL || "http://localhost:3000",
  BUILDER_BASE_URL:
    process.env.NEXT_PUBLIC_BUILDER_BASE_URL || "http://localhost:3001",
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000",
  JOB_SERVER_BASE_URL:
    process.env.NEXT_PUBLIC_JOB_SERVER_BASE_URL || "http://localhost:5001",
};
