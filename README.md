[![Build](https://github.com/librbary/main-backend-node/actions/workflows/node-build.yml/badge.svg?branch=develop)](https://github.com/librbary/main-backend-node/actions/workflows/node-build.yml)   [![Netlify Status](https://api.netlify.com/api/v1/badges/557304d1-dc9c-411b-9649-7f2cb4310324/deploy-status)](https://app.netlify.com/sites/deft-biscuit-c24200/deploys)

## liBRBary Application
> [liBRBary - Buy, Rental, Barter](https://librbary.github.io/librbary-buy-feature/).

## Local workspace setup guidelines
* After checking out your feature branch in your local, first install the packages using below command <br />
``` npm install ```

* To run your project in local, use below command <br />
``` npm start ```

* As, we are using node v18.x, and Netlify is using downgraded version of node. So in case you are facing any "Hash" issues while running the project in local, you can follow below command <br />
``` export NODE_OPTIONS=--openssl-legacy-provider ```

###### How to use Netlify in your local

> **Netlify base URL** - https://develop--librbary.netlify.app

> **API path** - /.netlify/functions/app/(your-api)

**Step 1: Install Netlify CLI** <br />
``` npm install netlify-cli -g ```

**Step 2: Start local development server in repo directory** <br />
``` netlify dev ```

## CI/CD Pipeline
We are using [**github-actions**](https://github.com/librbary/main-backend-node/actions) for continous integration and continous delivery. You can refer the worflows yml to add/update the jobs in the build/deploy workflow yml.