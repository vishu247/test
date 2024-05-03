# Use an official Node.js runtime as the base image
FROM cypress/base:14.17.0

# Set the working directory in the container
WORKDIR /app

# Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm ci --silent

# Copy the rest of your application code
COPY . .

# Run Cypress tests
CMD ["npm", "run", "cypress:run"]
