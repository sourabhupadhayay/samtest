FROM nginx:1.23.1-alpine
RUN apk upgrade
MAINTAINER gourav.s@techroversolutions.com
LABEL ENV=development
LABEL PROJECT=BUBBLEAPP
EXPOSE 6510
COPY www/ /usr/share/nginx/html/
COPY default.conf /etc/nginx/nginx.conf
RUN chown -R nginx:nginx /usr/share/nginx/html/ && chmod -R 755 /usr/share/nginx/html/ && \
        chown -R nginx:nginx /var/cache/nginx && \
        chown -R nginx:nginx /var/log/nginx && \
        chown -R nginx:nginx /etc/nginx/conf.d
RUN touch /var/run/nginx.pid && \
        chown -R nginx:nginx /var/run/nginx.pid

USER nginx
CMD ["nginx", "-g", "daemon off;"]
