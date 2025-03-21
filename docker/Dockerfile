# 建立第一階段（build stage）
FROM node:20-alpine AS builder

# 設定工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json（優化 Docker 層）
COPY package*.json ./

# 安裝依賴
RUN npm install

# 複製專案檔案
COPY . .

# 編譯 TypeScript
RUN npm run build

# 建立第二階段（runtime stage）
FROM node:20-alpine

# 設定工作目錄
WORKDIR /app

# 設定環境變數
ENV NODE_ENV=production

# 複製執行所需的檔案（只複製必要的檔案）
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# 開放應用埠號
EXPOSE 3000

# 啟動應用
CMD ["node", "dist/main.js"]

