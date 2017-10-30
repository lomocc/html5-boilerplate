FROM nginx:stable
COPY dist/www /usr/share/nginx/html
RUN chmod -R 777 /usr/share/nginx/html
