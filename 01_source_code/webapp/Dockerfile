# Base image
FROM node:18-alpine

# Tạo thư mục làm việc
WORKDIR /app

# Copy package.json trước (best practice CI/CD)
COPY package*.json ./

# Không có dependency nhưng vẫn giữ cấu trúc chuẩn
RUN npm install --omit=dev || true

# Copy source code
COPY src ./src

# Chạy app
CMD ["node", "src/index.js"]
