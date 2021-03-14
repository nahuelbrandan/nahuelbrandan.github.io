---
layout: post
title: "About the importance of having your website"
comments: true
date:   2020-08-17 18:00:00 -0300
image: "/assets/img/posts/prod.webp"
thumbnail: "/assets/img/posts/prod.png"
categories: [Article]
lang: en
ref: having-your-website
---

Si te encuentras en el mundo de la informática, considero que es muy didáctico el tener alguna página web en 
producción, es decir, accesible al público en general. 

No importa tanto la temática, ya sea un sitio web sobre el tema que te interese, una página personal como muestra 
de portfolio, un juego, un blog, lo que sea.

Una vez comenzado con el proyecto, empezás a notar diferentes temas necesarios a desarrollar.

---

Te voy a contar mi caso, desarrollando este propio sitio web y los temas que fui aprendiendo en el camino.

#### Hosting.
Indica donde se alojará tu sitio web. Existen muchos servicios disponibles, con un coste desde unos $3 USD al mes.

Yo elegí el servicio [Github Pages](https://pages.github.com/). Es gratis, de calidad y práctico dado que se 
administra directamente desde un repositorio de _Github_.

#### Dominio.
_Github Pages_ te provee una URL por defecto para acceder desde la web a tu sitio, es de la forma: 
_https://username.github.io_ o _https://username.github.io/repository-name/_, los cuales estan bien, pero si queremos tener 
una URL más profesional tenemos que comprar un dominio y vincularlo con el repositorio.

Yo lo compré en [Hostinger](https://www.hostinger.com.ar/), con un costo de +-$600 ARS por año ~= $8 USD. Siendo éste 
mi único gasto fijo.

#### SEO.
>> El mejor lugar para esconder un cadaver es en la segunda página de Google.

SEO (Search Engine Optimization) es la optimización en los motores de búsquedas.

Queremos que nuestro proyecto aparezca en las primeras posiciones de Google y el resto de los buscadores, para eso hay 
que hacer la tarea y aplicar todas las mejoras de SEO que son recomendadas.

#### Responsive.

El consumo desde dispositivos móviles desde hace años esta en aumento, por lo tanto es muy valioso que nuestro 
sitio web este adaptado tambien para poder visualizarse correctamente en estos dispositivos.

A esto es a lo que se refiere con _Responsive Design._

[Bootstrap](https://getbootstrap.com/) es una librería muy utilizada para lograrlo.

#### Performance.
El tiempo de carga del sitio web es una característica importante, si demora mucho en cargar el usuario puede terminar 
yéndose de tu sitio. 

Amazon analizó que pierde el 1% de sus ventas por cada 100ms de tiempo de carga, lo cual es mucho dinero.

Formas de mejorar la performance: Que las imagenes tengan un formato y tamaño apropiado, optimizar los archivos 
estáticos utilizados, entre otros.

---

[Lighthouse](https://developers.google.com/web/tools/lighthouse) Es una herramienta para analizar el desempeño de tu 
web en estas áreas.

Este es el resultados obtenidos en mi página:

![Desempeño de la página]({{"/assets/img/site/desempeño.webp"}})

Los cuales son valores excelentes!.

#### Interactividad.
_Github Pages_ sólo permite sitios estáticos. Como no hay un backend al cual puedas consultar no puede permitir 
interactividad, es decir que el usuario no puede comunicarse de manera recíproca, por ejemplo hacer un comentario, 
llenar un formulario, logearse, etc; todas actividades que implementariamos mediante un backend.

Para resolver este problema existen herramientas externas, que te permiten añadirlas a tu sitio estático para 
agregar funcionalidades.

Por ejemplo yo utilizo [Disqus](https://disqus.com/) para incorporar una caja de comentarios al final de los artículos.

Tambien uso [Formspree](https://formspree.io/) para formularios de contacto.

#### Detalles.
>> La excelencia se muestra en los detalles.

Te vas a encontrar con múltiples detalles durante tu desarrollo, es inevitable. Enfrentar cada uno de ellos aumentará 
nuestro conocimiento.

Por ejemplo:
* ¿Cómo hago para que la barra de navegación desaparezca cuando scrolleo hacia abajo y aparezca cuando scrolleo hacia 
arriba? Tal como se hace en muchos sitios.
* ¿Cómo hago para que las imágenes se muestren de cierto tamaño?
* ¿Qué tipografía me conviene? Podes ver opciones en [Google Fonts](https://fonts.google.com/).
* ¿Cómo definir la imagen que va en la cabecera? Se llama _favicon_.
  ![favicon]({{"/assets/img/elements_in_posts/fav.webp"}})

#### Escritura.
¿Qué tienen los grandes escritores que no tiene uno? me supe preguntar. Si utilizan las mismas palabras, el 
mismo lenguaje, ¿Por qué a ellos les sale tan bien?, ¿Cuál es el secreto?!

El consejo principal es que tenés que leer mucho y escribir mucho.

Stephen King tiene un excelente libro sobre el proceso de escritura. 
ver: [On Writing (Mientras escribo)](http://biblioteka.teatr-obraz.ru/files/file/English_cinema/Stephen_King_On_Writing.pdf)

#### Diseño.
Una forma de aprender es viendo lo proyectos de otros, para usarlos como fuentes de inspiración. En 
[awwwards](https://www.awwwards.com/) podes encontrar grandes ejemplos.

Por otro lado, ¿Como hago imágenes con diseño y rápido? yo utilizo [Canva](https://www.canva.com/), 
gran herramienta e intuitiva.

#### Themes.
A veces es útil en vez de arrancar de cero todo el sitio web, comenzar a partir de un template, un Theme(Tema) 
que alguien más haya creado, al cual vos lo adaptarías a tus gustos.

En [Bootstrapmade](https://bootstrapmade.com/) podes ver algunos.

Otras herramienta que me sirvió es [bootstrap studio](https://bootstrapstudio.io/).

### Conclusiones.
Emprende el proyecto, y sobre las marcha vas a ir resolviendo éstos y muchos conflictos más; va a ser un camino duro 
pero de puro aprendizaje.

Mostrame tu proyecto, lo revisaré con mucho gusto!.

Éxitos y dale para adelante!

---
---
