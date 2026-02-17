# ---------------------------------------
# Stage 1: Build (พ่อครัวปรุงอาหาร)
# ---------------------------------------
FROM node:20-alpine AS builder

WORKDIR /app

# ก๊อปปี้ใบรายการของ (เพื่อให้ Docker Cache ได้)
COPY package*.json ./

# ติดตั้งของ (ใช้ npm ci ตามที่เราเพิ่งแก้ระบบมา!)
RUN npm ci

# ก๊อปปี้โค้ดทั้งหมด
COPY . .

# สั่ง Build (จะได้โฟลเดอร์ dist ออกมา)
RUN npm run build

# ---------------------------------------
# Stage 2: Serve (เด็กเสิร์ฟ Nginx)
# ---------------------------------------
FROM nginx:alpine

# ก๊อปปี้ของที่ทำเสร็จแล้ว (dist) มาใส่ Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# เปิดพอร์ต 80
EXPOSE 80

# รัน Nginx
CMD ["nginx", "-g", "daemon off;"]