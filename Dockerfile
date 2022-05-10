FROM node:18-alpine3.14

LABEL author='double_cl@163.com/chenc'

WORKDIR /myapp

RUN yarn config set registry https://registry.npmmirror.com/

COPY . /myapp

RUN yarn && yarn run build

EXPOSE 3000

CMD ["npm", "start"]
