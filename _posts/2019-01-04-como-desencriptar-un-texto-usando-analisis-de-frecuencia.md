---
layout: page
title: "Como desencriptar un texto usando análisis de frecuencia"
date:   2019-01-04 00:00:01 -0300
---

Recientemente encontré una oferta laboral en la que como proceso de preselección pedía desencriptar el siguiente texto y explicar el procedimiento realizado:

ΣΦΨΞΔλΨΔΛΣΦΔλΨξΔϗΞΔΦΨΞϑλΨΛΣΘϑΞϗΦϑλΨΣΞΨλϑΞΨζβΣφΔΨΣΦΨΣΞΨξΛϗ
ΞΞϑΨϖΣΞΨΠΣϖΛΣφΔΞΨΩΨΠΛΣΦϖϗϖϑΨΔΨΞΔΨΘΔφϗΔΨϖΣΨΞϑλΨΓΔΘϗΦϑλΨΣΞΨ
ΔΛΛϗΣΛϑΨαΔΨΣΞΨΔΛΛϗΣΛϑΨαΔΨΣλΨξΔΦϖΣΛΔΨϖΣΨΦϗΣξΞΔΨλβΨΠϑΦΓΡϑΨΔ
ΞΨαϗΣΦμϑΨΞϑΨλΔΞβϖΔΦΨΞΔλΨεΞΔβμΔλΨϖΣΞΨΠΔζϑΦΔΞΨΩΨΔΦϗΘΔΦϖϑΨΞΔ
ΨμΛϑΠΔΨΠΔΛΨΣλϑλΨΓΣΛΛϑλΨΣΞΨΔΛΛϗΣΛϑΨαΔΨΣΞΨΔΛΛϗΣΛϑΨαΔΨΞΔλΨΠΣ
ΦΔλΨΩΨΞΔλΨαΔηβϗμΔλΨλΣΨαΔΦΨΠΔΛΨΞΔΨΘϗλΘΔΨλΣΦϖΔΨΞΔλΨΠΣΦΔλΨλϑ
ΦΨϖΣΨΦϑλϑμΛϑλΨΞΔλΨαΔηβϗμΔλΨλϑΦΨΔζΣΦΔλ

Hace poco también leí el libro 'Los códigos secretos' de Simon Singh, donde cuenta y muestra toda la historia de la criptografía y sus usos, muy bueno y lo súper recomiendo.

![Portada del libro](http://www.librosmaravillosos.com/loscodigossecretos/imagenes/portada.jpg)

Así que pensé que sería algo interesante para hacer, me arremangue la camisa y comencé.

---

## Análisis de la situación y suposiciones.

En éste punto sabemos muy poco así que vamos a suponer lo siguiente y ver hacia donde nos lleva.

*   Que el lenguaje original esta en español, dado que la solicitud estaba en éste idioma.
*   Suponemos que se utilizo una de las encriptaciones más simple e históricas, llamado [*cifrado clásico*](https://es.wikipedia.org/wiki/Cifrado_cl%C3%A1sico) más específicamente un subconjunto de éste llamado [cifrado por sustitucion](https://es.wikipedia.org/wiki/Cifrado_por_sustituci%C3%B3n).

    En un cifrado por sustitución, las letras (o grupos de letras) son sistemáticamente reemplazadas en el mensaje por otras letras (o grupos de letras).

![Ejemplo](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/ROT13.png/600px-ROT13.png)

## Analisis de frecuencia.

Para poder romper la encriptación vamos a utilizar el meétodo de [Análisis de frecuencia](https://es.wikipedia.org/wiki/An%C3%A1lisis_de_frecuencias).

Mediante un pequeño programa escrito en **python** vemos los diferentes signos utilizados, y la cantidad de uso de cada uno de ellos:

    def letras_y_cantidad(texto):
        dict_letra_cantidad = {}
        for letra in texto:
            if letra not in dict_letra_cantidad.keys():
                dict_letra_cantidad[letra] = 1
            else:
                dict_letra_cantidad[letra] += 1
        return dict_letra_cantidad

    texto = "ΣΦΨΞΔλΨΔΛΣΦΔλΨξΔϗΞΔΦΨΞϑλΨΛΣΘϑΞϗΦϑλΨΣΞΨλϑΞΨζβΣφΔΨΣΦΨΣΞΨξΛϗΞΞϑΨϖΣΞΨΠΣϖΛΣφΔΞΨΩΨΠΛΣΦϖϗϖϑΨΔΨΞΔΨΘΔφϗΔΨϖΣΨΞϑλΨΓΔΘϗΦϑλΨΣΞΨΔΛΛϗΣΛϑΨαΔΨΣΞΨΔΛΛϗΣΛϑΨαΔΨΣλΨξΔΦϖΣΛΔΨϖΣΨΦϗΣξΞΔΨλβΨΠϑΦΓΡϑΨΔΞΨαϗΣΦμϑΨΞϑΨλΔΞβϖΔΦΨΞΔλΨεΞΔβμΔλΨϖΣΞΨΠΔζϑΦΔΞΨΩΨΔΦϗΘΔΦϖϑΨΞΔΨμΛϑΠΔΨΠΔΛΨΣλϑλΨΓΣΛΛϑλΨΣΞΨΔΛΛϗΣΛϑΨαΔΨΣΞΨΔΛΛϗΣΛϑΨαΔΨΞΔλΨΠΣΦΔλΨΩΨΞΔλΨαΔηβϗμΔλΨλΣΨαΔΦΨΠΔΛΨΞΔΨΘϗλΘΔΨλΣΦϖΔΨΞΔλΨΠΣΦΔλΨλϑΦΨϖΣΨΦϑλϑμΛϑλΨΞΔλΨαΔηβϗμΔλΨλϑΦΨΔζΣΦΔλ"
    letras = letras_y_cantidad(texto)
    print("cantidad de letras = ", len(letras))
    print(letras)

Obteniendo el resultado:

![](http://i68.tinypic.com/15f5a1j.png)

*   Dandonos cierta confirmación de que vamos bien ya que se utilizan 23 signos distintos, un valor cercano a la cantidad de letras en el alfabeto.

*   Además vemos que de mayor a menor en cantidad de usos de un signo es: 74 - 53 - 34 - 31 - 31...

---

Segun [éste artículo](https://es.wikipedia.org/wiki/Frecuencia_de_aparici%C3%B3n_de_letras) en el idioma español la letra 'a' es la más frecuente, seguida de cerca por la letra 'e', pero superior a éstas es el 'espacio', éste último casi duplicando a la letra más frecuente.

Luego reemplazamos el signo Ψ por un espacio, Δ por una 'a' y Σ por una 'e'.

**Nota:** Tener en cuenta por supuesto que esto no es una cuencia exácta, estamos haciendo uso de la probabilidad, "puede fallar" dijo Tusam, si éste fuera el caso se puede volver atrás e intercambiar la 'a' por la 'e' y continuar el proceso.

Agregamos éstas líneas a nuestro programa:

    texto = texto.replace('Ψ', ' ')
    texto = texto.replace('Δ', 'a')
    texto = texto.replace('Σ', 'e')
    print(texto)

Obteniendo:

![](http://i65.tinypic.com/2eyezyp.png)

Analizando éste resultado es muy posible que el signo 'Ξ' sea una 'l', por que en una palabra se repite 2 veces seguidas, y por que se usaria para las palabras 'las' 'los', 'el, 'la'.

![](http://i63.tinypic.com/2iivlf8.png)

Hacemos el reemplazo..

    texto = texto.replace('Ξ', 'l')

Obteniendo:

![](http://i67.tinypic.com/j76c28.png)

Continuando de la misma forma es muy posible que:

*   Ω sea una 'y'
*   ϑ sea una 'o'
*   λ sea una 's'

        texto = texto.replace('Ω', 'y')
        texto = texto.replace('ϑ', 'o')
        texto = texto.replace('λ', 's')

Obteniendo:

![](http://i63.tinypic.com/2j1kcb6.png)

Ésto es un proceso itereativo, donde en cada iteración nos vamos acercando cada vez más al objetivo...

A partir de acá ya es mucho más fácil deducir el resto, ¿Te animás a completarlo?. Buena suerte y nos vemos!.
