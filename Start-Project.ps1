Remove-Item *.js
Start-Process .\node_modules\.bin\tsc -ArgumentList '--watch', '-t', 'es6', '--experimentalDecorators', '--emitDecoratorMetadata', 'app.ts', 'display.component.ts', 'friends.service.ts', 'todo.list.ts' 
.\node_modules\.bin\http-server