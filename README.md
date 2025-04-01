# GeoPark

### Puesta en marcha de la aplicación:
Nada más clonarlo, tendremos que instalar las dependencias de npm, ejecutando
```bash
npm install
```

Posteriormente, tendremos que tener el contenedor docker de MongoDB encendido y la base de datos importada. Una vez lo tengamos, abrimos una terminal en el directorio principal del proyecto y ejecutamos:
```bash
npm run dev
```

Después, desplegaremos el live-server de `index.html` en el directorio del cliente. En otro terminal:
```bash
npm install -g live-server
live-server .\cliente\
```

En ese momento, se nos abrirá una pestaña del navegador con la aplicación funcionando
