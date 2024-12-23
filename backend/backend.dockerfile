# Builder Stage
FROM node:20 AS builder

WORKDIR /build

# Install dependencies
COPY package*.json ./
RUN npm ci

# Rebuild bcrypt for compatibility with Node.js
RUN npm rebuild bcrypt --build-from-source

# Copy Prisma files and generate client
COPY prisma ./prisma
RUN npx prisma generate

# Copy application code and build
COPY . .
RUN npm run build

# Runner Stage
FROM node:20 AS runner

WORKDIR /app

# Set environment variables
# ENV NODE_ENV=production

# Copy built application and dependencies
COPY --from=builder /build/node_modules node_modules/
COPY --from=builder /build/package*.json package*.json
COPY --from=builder /build/dist dist/

EXPOSE 4000

# Run the application
CMD [ "node", "dist/index.js" ]
