const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

// This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
module.exports = phase => {
  // when started in development mode `next dev` or `yarn dev`
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  // when `next build` or `yarn build` is used
  const isProd = phase === PHASE_PRODUCTION_BUILD
  // when is running on Qovery
  const isProdQovery = process.env.QOVERY_IS_PRODUCTION === "True"

  console.log(`isDev:${isDev}  isProd:${isProd} isProdQovery:${isProdQovery}`)

  const env = {
    GRAPHQL_SERVER_URL: (() => {
      if (isProdQovery) return 'https://rrmvkauvtlmn51uq-nxun73i1pgl3m4ga-app.qovery.io/graphql'
      if (isProd) return 'http://localhost:8000/graphql'
      if (isDev) return 'http://localhost:8000/graphql'
      return 'GRAPHQL_SERVER_URL:not (isDev,isProd)'
    })(),
  }

  // next.config.js object
  return {
    env,
  }
}
