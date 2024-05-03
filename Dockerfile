# Use an official Node.js runtime as the base image
FROM node

# Set the working directory in the container
WORKDIR /app

# Install dependencies
COPY . .


# Run Cypress tests
CMD ["npx", "cypress", "run"]
