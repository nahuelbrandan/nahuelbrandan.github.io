---
layout: post
title: "FastAPI, un framework prometedor para Python"
comments: true
date:   2021-02-27 12:00:00 -0300
categories: [Blog]
---

*FastAPI* es un "nuevo" framework de Python, para desarrollo de APIs web, con alta performance, fácil de aprender, 
rápido de implementar y listo para producción. 

Luego de probarlo quede fascinado y con ganas de comenzar a utilizarlo en proyectos.

## Historia

*FastAPI* se inició en diciembre de 2018 y en 2 años escalo hasta ser el tercer framework más popular de Python, 
luego de [Django](https://www.djangoproject.com/) y [Flask](https://flask.palletsprojects.com/en/1.1.x/).

![fuente: https://www.jetbrains.com/lp/python-developers-survey-2020/]({{"/assets/img/elements_in_posts/fastAPI.webp"}}){:class="img-border"}

Es una escalada impresionante. Tener en cuenta que Django y Flask tiene 15 y 10 años respectivamente.

Es un proyecto iniciado por [Tiangolo (Sebastián Ramírez)](https://tiangolo.com/), Colombiano viviendo el Alemania. 
Desarrollador de Software muy productivo. 

Resulta inspirador.

## Ejemplo

Te doy un ejemplo simple para que veas su magia

<pre><code class="language-python">
from typing import Optional

from fastapi import FastAPI
from pydantic import BaseModel


class Item(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    tax: Optional[float] = None


app = FastAPI()


@app.put("/items/{item_id}")
async def create_item(item_id: int, item: Item, q: Optional[str] = None):
    result = {"item_id": item_id, **item.dict()}
    if q:
        result.update({"q": q})
    return result
</code></pre>

Este es un endpoint para una consulta PUT, donde recibe un parametro en path, otro por query y otro por body.

Lo que provee FastAPI es:

* Simplicidad
* Validacion de parámetros y chequeo de tipos
* Conversion de datos  
* Tiene la inteligencia para identificar y determinar por donde se enviaron los parametros
* Respuestas detalladas automáticas en caso de error en la solicitud
* Un endpoint */docs*, con toda una documentacion detallada **autogenerada** e **interactiva** de los endpoints, 
  gracias a integración con [Swagger](https://swagger.io/)
* Muy alta performance, a la par de **NodeJS** y **Go**


![Ejemplo de documentacion interactiva autogenerada]({{"/assets/img/elements_in_posts/fastAPI-swagger-ui-simple.webp"}})

## Datos

* La documentacion es excelente! intuitiva y detallada
* Una comunidad creciente, con más de 200 colaboradores
* Utilizada por *Uber*, *Netflix* y *Microsoft*. [ref1](https://eng.uber.com/ludwig-v0-2/), 
  [ref2](https://netflixtechblog.com/introducing-dispatch-da4b8a2a8072), 
  [ref3](https://github.com/tiangolo/fastapi/pull/26).

## Enlaces

* [Documentación del proyecto](https://fastapi.tiangolo.com/).
* [Código Fuente](https://github.com/tiangolo/fastapi).

## Conclusión

Una herramienta interesante, digna de aprender para añadirla a nuestro repertorio y tenerla bajo el radar.

Comentame qué te parece!
