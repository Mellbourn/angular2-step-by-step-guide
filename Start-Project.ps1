Remove-Item *.js
Start-Process .\node_modules\.bin\tsc -ArgumentList '--watch', '-m', 'commonjs', '-t', 'es5', '--experimentalDecorators', '--emitDecoratorMetadata', 'app.ts', 'show-properties.ts', 'FriendsService.ts' 
.\node_modules\.bin\http-server