FROM node:16.18.0-alpine as builder
LABEL MAINTAINER="WANMIN"
WORKDIR /build
COPY . .
## 这里会自动构建出 dist文件目录，所以ci可以push的时候可以取到构建的html静态文件
RUN npm config set registry https://registry.npmmirror.com/ && npm install && npm run build

FROM nginx:alpine
LABEL MAINTAINER="WANMIN"
COPY --from=builder /build/dist /usr/share/nginx/html/k8s-manager
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf