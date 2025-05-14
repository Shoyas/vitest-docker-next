# 1. Base image
FROM node:20-alpine AS base

# 2. Set working directory
WORKDIR /app

# 3. Copy package.json and lock file
COPY package*.json ./

# 4. Install dependencies
RUN npm ci

# 5. Copy rest of the project files
COPY . .

# 6. Build the Next.js app
RUN npm run build

# 7. Production image
FROM node:20-alpine AS runner

# 8. Set working directory again for the production image
WORKDIR /app

# 9. Copy only the necessary files from the build image
COPY --from=base /app/package*.json ./
COPY --from=base /app/.next .next
COPY --from=base /app/public ./public
COPY --from=base /app/next.config.ts ./
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/src ./src
COPY --from=base /app/tsconfig.json ./
COPY --from=base /app/next-env.d.ts ./

# 10. Expose port and run the app
EXPOSE 3000
CMD ["npm", "start"]
