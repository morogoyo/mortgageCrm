# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:16.20-alpine as build


ENV ENVIRONMENT = ${ENVIRONMENT}

ARG CONFIGURATION=$ENVIRONMENT
# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install --force


# Generate the build of the application
#RUN #npm run build --configuration=${CONFIGURATION}

RUN npm run ng build -- --configuration=development



# Stage 2: Serve app with nginx server


# Use official nginx image as the base image
FROM nginx:latest




# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/nds-front /usr/share/nginx/html

#nginx-file-to-copy=./nginx-custom-$CONFIGURATION.conf/
# Copy our custom nginx config
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf


# Expose port 80
#EXPOSE 80
