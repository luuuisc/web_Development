# ¿Qúe es SASS? sus ventajas y consideraciones 

Es básicamente CSS con superpoderes 

- SASS = Syntatically Awesome StyleSheet
- Se le considera un estándar en la industria 
- Compatible con muchos frameworks CSS 

## Ventajas  
1. Mejor orden y estructura 
2. Características que no existen en CSS o con mejor soporte 
3. Soporta código CSS 

## Desventajas 
1. Una nueva sintaxis por aprender 
2. No es nativo en el navegador 
3. Se debe compilar con alguna herramienta 
4. La anidación puede causar problemas 

## Sintaxis de SASS

### Variables 

```sass
$color: #e1e1e1;
$separacion: 5 rem;
$fuente: Arial, Helvetica;
````

### ¿Cómo se utilizan?
```sass
$color: #e1e1e1;
h1 {
    color: $color;
}
p {
    color: $color;
}
````

### Anidación en SASS
- Sintaxis 
```sass
div 
    display: flex;
    h1
        margin-top: 10 rem;
    p 
        margin-top: 10rem;
````

- Resultado 
```sass
div {
    display: flex;
}
div h1 {
    margin-top: 10 rem;
}
div p {
    margin-top: 10 rem;
}
```

### Extensiones SASS 
- .sass (No es tan común de usar)
```sass
.header 
    display: flex;
    .logo
        margin-top: 10rem;
```

- .scss
```sass
.header {
    display: flex;
    .logo {
        margin-top: 10rem;
    }
}
```

### SASS se compila 
⚠️ No es soportado nativamente por el navegador, por lo tanto deberá ser compilado a un archivo **.css**