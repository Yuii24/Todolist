# 使用 Node.js 作為基礎鏡像
FROM node:20-alpine

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

# 設定環境變數
ENV NODE_ENV=production

# 開放應用埠號
EXPOSE 3000

# 啟動應用
CMD ["npm", "run", "start:dev"]
