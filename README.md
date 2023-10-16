# 概述
angular + spring boot 分页功能及查询

# 环境
node: v18.18.0<br>
anular: 16.2.5<br>
jDK: 17<br>

# docker
```
cd document/docker && docker compose up
```

# nginx
参照 `document/nginx.config` 进行配置（或直接用它替换你本地的 nginx 配置文件）

# 启动后台
```
cd api && mvn install && mvn spring-boot:run
```

# 启动前台
```
cd web && npm install && ng s
```

# 查看
localhost:8015
