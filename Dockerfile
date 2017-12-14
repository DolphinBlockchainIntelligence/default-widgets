# docker build -t default-widgets . && docker run -d --name default-widgets -e "WEBPORT=80" -e "REGURL=http://localhost:3010" -p 5005:80 default-widgets
# docker tag default-widgets suenot/default-widgets
# docker push suenot/default-widgets
#
FROM node:7.10-alpine
LABEL maintainer="Eugen Soloviov"
COPY server /server
COPY client /server/public
COPY register.json /server/register.json
WORKDIR /server
RUN npm install
CMD ["node","index.js"]
