# base image to build on top of
FROM node:18-alpine AS binasbobablog
# set the working directory inside the container
WORKDIR /app
# copy over local files to the image
COPY . .
# install the production dependencies 
RUN npm ci
# Build the sveltekit app
RUN npm run build
# Delete source code files that were used to build the app that are no longer needed
# RUN rm -rf src/ static/ tests/ docker-compose.yml
# The USER instruction sets the user name to use as the default user for the remainder of the current stage
USER node:node
# This is the command that will be run inside the image when you tell Docker to start the container
CMD ["node","build/index.js"]