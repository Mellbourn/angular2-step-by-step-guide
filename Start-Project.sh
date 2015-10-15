rm *.js
./node_modules/.bin/tsc --watch -t es6 --experimentalDecorators --emitDecoratorMetadata app.ts display.component.ts friends.service.ts todo.list.ts & 
./node_modules/.bin/http-server