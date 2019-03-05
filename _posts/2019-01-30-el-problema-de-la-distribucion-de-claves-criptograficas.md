---
layout: post
title: "El problema de la distribución de claves criptográficas."
date:   2019-01-30 22:00:01 -0300
comments: true
url: "/2019/01/30/el-problema-de-la-distribucion-de-claves-criptograficas.html"
image: "/assets/images/posts/Argonath.jpg"
image_mini: "/assets/images/posts/Argonath_mini.jpg"
---

![]({{page.image}})

Ya hablamos sobre criptografía en [éste artículo anterior](https://www.nahuelbrandan.com/2019/01/04/como-desencriptar-un-texto-usando-analisis-de-frecuencia.html).

Resulta que hay un problema que ha acosado a los criptógrafos a lo largo de la historia y es **el problema de la distribución de claves criptográficas.**

En éste artículo te voy a comentar de que se trata, y la asombrosa solución desarrollada.

---

# Importancia.

Primero definamos la importancia de contar con métodos de encriptación de mensajes.

En una guerra, si un bando logra obtener las comunicaciones tácticas y/o estratégicas del bando contrario, podría prepararse y hacer las modificaciones necesarias para que la situación salga a su favor, lo mismo sucede con las empresas y los estados.

La información es poder!, tener la información justa en el momento apropiado te puede hacer ganar grandes batallas. O visto desde el otro lado, si tu información secreta sale a la luz te pueden poner en serios aprietos, si no vean *Game of Thrones*.

![](https://www.azquotes.com/picture-quotes/quote-information-is-power-but-like-all-power-there-are-those-who-want-to-keep-it-for-themselves-aaron-swartz-102-27-05.jpg)

**Nota:** La historia de Aaron Swartz, el autor de la cita, es muy interesante y triste a la vez, recomiendo que vean éste documental sobre su vida y las causas honorables por las que luchaba (en lo personal la más importante: la libertad).

<iframe width="853" height="480" src="https://www.youtube.com/embed/mT8FJcIx3HI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

# Historia de encriptación

¿Históricamente como fue el proceso de encriptación de un mensaje?

Supongamos que Ana quiere enviarle un mensaje importante a Bob y quiere que nadie más lo lea.

Lo que hace es encriptar el mensaje mediante algún método, obteniendo así 2 elementos: El mensaje encriptado y la llave para desencriptarlo.

![](http://i68.tinypic.com/2ilixlk.jpg)

En el ejemplo visto en el articulo anterior, el mensaje encriptado es el que vemos escrito apenas al comienzo (ΣΦΨΞΔλΨΔΛΣΦΔλΨξΔϗΞΔΦΨΞϑλ...), y la llave para desencriptarlo sería una lista de símbolos con su traducción a la letra correspondiente (Ψ=' ', Δ='a', Σ='e'...).

El mensaje puede enviarse por cualquier medio, incluso por uno no seguro, dado que por más que alguien intercepte el mensaje y lo copie, sin la llave para desencriptarlo no va a poder hacer nada (aunque ya vimos que ante ciertos métodos de encriptación, éstos se pueden romper por análisis de frecuencia, hay otros mucho más robustos que no).

Por otro lado, la llave tiene que ser enviada por un canal seguro si o si!.

Si alguien intercepta el mensaje y la llave va a ser muy fácil para él obtener el mensaje original.

¿A que me refiero con un canal seguro? A que Ana y Bob se tendrán que juntar personalmente a intercambiar la clave, o contratar a un mensajero de extrema confianza que la transporte.

Pero ¿y si viven alejados, en otros países o continentes? sería impráctico y costoso el juntarse sólo para definir una contraseña segura.

Imagina que querés comprar algo por MercadoLibre y pagarlo con tarjeta de crédito. El banco, para permitirte acceder a su sistema, primero tendría que enviarte mediante un mensajero de extrema confianza una clave de cifrado, escrita en una carta sellada. El mismo proceso lo deberá realizar MercadoLibre para para que puedas ingresar a su sistema. Hacer ésto para millones de personas, y cientos de empresas tendría un problema logístico gigantesco.

De hecho se ha hecho así durante mucho tiempo, por ejemplo: Alemania en la 2GM tenía que transportar libros de códigos periódicamente a cada punto de comunicación, para utilizarlos en sus máquinas ENIGMAS.

![Libro de códigos de la máquina Enigma que Alemania usó durante 2GM](https://www.awesomestories.com/images/user/4230cae2056c6c0b2780fb170451e4d7.jpeg)

**Ahora el problema no está en transportar el mensaje, está en transportar la clave de cifrado!!.**

---

El problema de la distribución de claves ha acosado a los criptógrafos a lo largo de la historia. no importa lo segura que sea una cifra en la teoría, en la práctica puede ser socavada por el problema de la distribución de claves.

Es importante tomarse un minuto para comprender el problema a resolver, éste es: **¿Cómo enviar una clave segura por un medio no seguro (Internet, llamada telefónica, paloma mensajera, telegrama, o por alguna tercera persona desleal capaz de vender una copia del mensaje), tal que incluso si existiera un intruso escuchando la comunicación no podría hacer uso de ella?**

Durante dos mil años se consideró un axioma de la criptografía, una verdad indiscutible, **las claves deberán ser transportadas por canales seguros**, hasta que un grupo de investigadores independientes triunfó contra todo pronóstico y propuso una solución brillante a mediado de los años 70.

![Merkle, Hellman y Diffie](https://regmedia.co.uk/2016/03/01/diffie_hellman.jpg?x=442&y=293&crop=1)

---

# The first solution

El algoritmo de intercambio de claves [Diffie-Hellman-Merkle](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange) es la primera solución al problema planteado. Es un método de intercambio seguro de llaves criptográficas por un canal público.

El algoritmo es el siguiente:

* [Alicia quiere enviar un mensaje importante a Bob así que lo llama por teléfono para definir una clave]

* Alicia y Bob por separado eligen un numero secreto. Supongamos que Alicia elige el 3 y Bob el 5, llamemos a éstos valores **A** & **B**, éstos no se van a decir.

* Alicia y Bob se ponen de acuerdo y eligen 2 números cualquiera: supongamos el 9 y el 11, llamemolos **Y** & **P**.

* Alicia va a calcular **Y<sup>A</sup> mod(P)**, llamaremos al resultado **&alpha;** y se lo dice a Bob.
  En nuestro ejemplo: 9<sup>3</sup> mod(11) = 729 mod(11) = 3

* Análogamente Bob hará **Y<sup>B</sup> mod(P)**, llamaremos al resultado **&beta;** y se lo dice a Alicia.
  En nuestro ejemplo: 9<sup>5</sup> mod(11) = 59049 mod(11) = 1

* Alicia recibe **&beta;** y calcula **&beta;<sup>A</sup> mod(P)** llamaremos al resultado **&gamma;**
  En nuestro ejemplo: 1<sup>3</sup> mod(11) = 1

* Análogamente Bob recibe &alpha; y calcula **&alpha;<sup>B</sup> mod(P)** llamaremos al resultado **&delta;**
  En nuestro ejemplo: 3<sup>5</sup> mod(11) = 243 mod(11) = 1

Resulta que **&gamma;** siempre es igual a **&delta;**, es decir Alicia y Bob han logrado definir una misma clave! (en nuestro ejemplo: 1)

La explicación de ésto es que: **&alpha;<sup>B</sup> mod(P) = Y<sup>AB</sup> mod(P) = Y<sup>BA</sup> mod(P) = &beta;<sup>A</sup> mod(P)**

Ahora desde el punto de vista de un intruso que esté escuchando la conversación no podrá llegar a obtener la clave, por que desconoce **A** & **B**, valores que se mantuvieron en secreto y por que además se utiliza una [función de una sola vía](https://en.wikipedia.org/wiki/One-way_function).

**Notas:**

* En la práctica se utilizan valores muy grandes, dificultando aún más la labor del intruso.
* Por si desconoces la función [mod (módulo)](https://es.wikipedia.org/wiki/Operaci%C3%B3n_m%C3%B3dulo), ésta es bastante simple, si queremos calcular: A mod(B), lo que devuelve la función es el resto de dividir A por B.

  Ejemplos: 5 mod(2) = 1 dado que 5 = 2x2 + 1; 13 mod(10) = 3 dado que 13 = 10x1 + 3

Un video explicativo del proceso:

<iframe width="853" height="480" src="https://www.youtube.com/embed/wLFztjQDdzI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

Suena a algo simple, pero es un muy importante salto en materia criptográfica.

Éste algoritmo es de clave simétrica, es decir, se utiliza la misma clave para encriptar y desencriptar el mensaje.

Un par de años después se desarrollo [RSA](https://es.wikipedia.org/wiki/RSA), el cual es un sistema criptográfico de clave pública que usa algoritmos asimétricos, es decir, la clave para encriptar es distinta de la clave para desencriptar.

---

**PD:** Te preguntarás quizás ¿Que tiene que ver los [monumentos Argonath](https://es.wikipedia.org/wiki/Argonath), custodios de la entrada de Gondor en éste tema? Nada, la iba a utilizar como portada de otro post, pero me resultó tan genial e imponenete que no me pude aguantar no utilizarla.

---

Espero que te haya sido tan interesante como a mi.

Saludos y nos vemos.
