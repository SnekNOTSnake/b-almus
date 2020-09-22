# ⛰️ B-Almus

A static site I built for my dad, a civil engineer.

## 🗡️ Features

This work is built using:

- React
- Gatsby
- Netlify

## ⛷️ Installation

```bash
cp sample.env .env.development; cp sample.env .env.production
yarn

yarn run develop
```

## Deployment

```bash
yarn run clean && yarn run build

yarn run netlify:login
yarn run netlify:deploy
```

Then, configure the Netlify site's environment variables: `GATSBY_GOOGLE_ANALYTICS_TRACKING_ID`, `SITE_RECAPTCHA_KEY`, and `SITE_RECAPTCHA_SECRET`
