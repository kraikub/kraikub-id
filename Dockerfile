FROM node:18.4.0-alpine as dependencies
WORKDIR /kraikubid
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:18.4.0-alpine as builder
WORKDIR /kraikubid
COPY . .
COPY --from=dependencies /kraikubid/node_modules ./node_modules

ARG NEXT_PUBLIC_KRAIKUB_CLIENT_ID_ARG
ENV NEXT_PUBLIC_KRAIKUB_CLIENT_ID $NEXT_PUBLIC_KRAIKUB_CLIENT_ID_ARG

ARG MONGODB_URL_ARG
ENV MONGODB_URL $MONGODB_URL_ARG


RUN yarn build

FROM node:18.4.0-alpine as runner
WORKDIR /kraikubid

COPY --from=builder /kraikubid/next.config.js ./
COPY --from=builder /kraikubid/next-i18next.config.js ./next-i18next.config.js
COPY --from=builder /kraikubid/public ./public
COPY --from=builder /kraikubid/.next ./.next
COPY --from=builder /kraikubid/node_modules ./node_modules
COPY --from=builder /kraikubid/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]