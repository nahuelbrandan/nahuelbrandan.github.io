### Descripción.

Esta es mi página web, la pueden visualizar en: [nahuelbrandan.com](https://www.nahuelbrandan.com)

### Instalación.

    sudo apt install ruby ruby-dev libffi-dev build-essential zlib1g-dev
    sudo gem install bundle jekyll
    sudo gem install bundler -v 1.17.2
    sudo gem update

    bundle install

### Ejecución, diferentes formas.

    bundle exec jekyll serve    

    bundle exec jekyll serve --livereload

    bundle exec jekyll serve --drafts --livereload

* La segunda forma no necesita hacer un refresh de la página ante cada cambio que hagamos.
* La tercera forma se le agrega la visualización de los drafts (publicaciones en proceso de construcción.)

### Actualización.

    bundle update

### Errores.

* Por problemas con la instalación de Jekyll ver: [Jekyll installation problems.](https://jekyllrb.com/docs/troubleshooting/#installation-problems)
* Al ejecutar, si figura un error del tipo: *FATAL: Listen error: unable to monitor directories for changes.* ejecutar el siguiente comando

  `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`

* Port is in use or requires root privileges

  `fuser -n tcp -k 4000`

### Recomendaciones.

* Se recomienda que todas las imágenes que se utilicen tengan formato _.webp_ el cual esta optimizado y tiene una mejor 
performance al cargar paginas webs.

  En linux se puede hacer:
  
  * `sudo apt install webp` Instalar el programa.
  * Parados en el directorio de las imágenes ejecutar:
  
    `for f in *.png; do cwebp "$f" "-o" "${f%.png}.webp"; done; for f in *.jpg; do cwebp "$f" "-o" "${f%.jpg}.webp"; done;`

### Desempeño

Resultados obtenidos luego de un análisis con la herramienta _Lighthouse_.

![Desempeño de la página]({{"/assets/img/site/desempeño.webp"}})

Los cuales son valores excelentes!, mostrando el cariño que se le da al sitio.
