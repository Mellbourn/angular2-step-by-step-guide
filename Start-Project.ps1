Remove-Item *.js
Start-Process -NoNewWindow .\node_modules\.bin\tsc -ArgumentList '--watch', '-m', 'commonjs', '-t', 'es5', '--experimentalDecorators', '--emitDecoratorMetadata', 'app.ts' 
.\node_modules\.bin\http-server