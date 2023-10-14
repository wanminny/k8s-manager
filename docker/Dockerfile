FROM node:16.18.0-alpine as builder
LABEL MAINTAINER="wanmin"
WORKDIR /build
COPY . .
RUN npm config set registry https://registry.npmmirror.com/ && npm install && npm run build

FROM nginx:alpine
LABEL MAINTAINER="wanmin"
COPY --from=builder /build/dist /usr/share/nginx/html/k8s-manager
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf