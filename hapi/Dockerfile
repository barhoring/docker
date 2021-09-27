FROM node:12-stretch
USER node
RUN mkdir /home/node/code

# now USER node owns the workdir and can do npm ci
WORKDIR /home/node/code
COPY --chown=node:node package-lock.json package.json ./

RUN npm i
COPY --chown=node:node . .
CMD ["node", "index.js"]