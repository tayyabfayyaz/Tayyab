# Get the nodejs version 18 from docker hub
FROM node:18-alpine

# set working directory
WORKDIR /app

# copy package.json and package-lock.json
COPY package*.json ./

# install dependencies
RUN npm install

# copy all files
COPY . .

# build the application
RUN npm run build

# expose port 3000
EXPOSE 3000

# start the application
CMD ["npm", "start"]