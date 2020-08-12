---
layout: post
title: "Autenticar aplicaciones clientes de APIs con Auth0."
date:   2019-09-02 00:00:01 -0300
comments: false
categories: [Portfolio]
tags: [Auth0, APIs, Oauth 2.0, Python]
url: "/portfolio/2019/09/02/autenticar-aplicaciones-clientes-de-APIs-con-Auth0.html"
image: "/assets/images/posts/auth0.jpg"
---

En el ámbito laboral, te cuento uno de los mayores desafios que tuve que enfrentar.

## Introducción.

Primero veamos algunas definiciones.

**¿Qué es una API?**

Una [API](https://es.wikipedia.org/wiki/Web_API) (Application Programming Interface) interfaz de programación de 
aplicaciones. Es un conjunto de rutinas que provee acceso a funciones de un determinado software.

Es decir, para no tener que re inventar la rueda uno podría realizar llamadas a APIs ya creadas que provean la 
funcionalidad que queremos.

En nuestro caso estamos trabajando específicamente con *Web APIs*.

![API diseño.](https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/104559387/original/88a2503b41467bbd07990f5d35115e84e38c3888/design-and-develop-rest-apis-using-mvc-web-api.png)

Por ejemplo una aplicación que quiere mostrar el clima, en vez de desarrollar toda la parte de recolección y análisis 
de datos climáticos (lo cual sería costoso) hacen llamadas a alguna API que ya lo implemente, 
por ejemplo [Open weather map](https://openweathermap.org/api).

Por otro lado supongamos una aplicación que en su descripción el usuario pueda poner una canción que le guste. 
Para ahorrar mucho trabajo la aplicación podría realizar llamadas a la [API de Spotify](https://developer.spotify.com/documentation/web-api/).

---

**¿Que es Auth0?**

[Auth0](https://auth0.com/) es una empresa argentina que provee el servicio de autenticación y autorización del usuario
 en un producto, simplificando así el trabajo de desarrollo.

Básicamente les provee a las aplicaciones la *caja de login*, para que no lo tengan que desarrollar ellos mismos, y asi
 evitar gastos y costos de mantención de uno de los puntos críticos de cualquier sistema.

---

**¿Que es Oauth 2.0?**

[Oauth 2.0](https://oauth.net/2/) es un **protocolo** abierto de autenticacion y delegación de permisos de acceso.

Muy utilizado en las redes sociales, por ejemplo: para poder ingresar con tu usuario de *Facebook* a alguna otra 
aplicación, sin darle a este último las credenciales de tu usuario de facebook.

---

## Desarrollo.

En el proyecto de desarrollo en el que trabajo, una de las funcionalidades que provee el sistema es un 
***Administrador de APIs***, el cual permite *crear*, *editar*, *publicar/despublicar* y *eliminar* ***APIs***.

Finalmente, resumiendo en un párrafo lo que estuve desarrollando en el sistema es:
 
 que un *Editor* de APIs pueda proteger *Endpoints* de este con *Auth0* utilizando el protocolo *Oauth 2.0*, 
 para así lograr que solo puedan tener acceso las *aplicaciones clientes* permitidas.

---
