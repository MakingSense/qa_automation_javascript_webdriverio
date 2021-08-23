FROM node:12

WORKDIR ./
COPY ./package.json ./e2e-daily-execution-script.sh ./e2e-daily-execution-script-on-demand.sh ./
RUN ["chmod", "+x", "./e2e-daily-execution-script.sh"]
RUN ["chmod", "+x", "./e2e-daily-execution-script-on-demand.sh"]
COPY ./tests/ ./tests/
RUN npm install
EXPOSE 3000
