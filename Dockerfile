FROM node:18-buster as build

RUN yarn global add gatsby-cli
WORKDIR /app
ADD . ./
RUN yarn
RUN gatsby build

FROM gatsbyjs/gatsby
COPY --from=build /app/public /pub