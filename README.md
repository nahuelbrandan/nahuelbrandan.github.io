### Descripción.

Ésta es mi genial página web, la pueden visualizar en: [https://www.nahuelbrandan.com](https://www.nahuelbrandan.com)

### Ejecución localmente, diferentes formas.

    bundle exec jekyll serve    

    bundle exec jekyll serve --livereload

    bundle exec jekyll serve --drafts --livereload

* La segunda forma no necesita hacer un refresh de la página ante cada cambio que hagamos.
* La tercera forma se le agrega la visualización de los drafts (publicaciones en proceso de construcción.)

### Pre requisitos.

requiere tener instalado previamente *ruby*, *bundle* y *jekyll*, esto se realiza con:

    sudo apt install ruby ruby-dev libffi-dev build-essential zlib1g-dev
    sudo gem install bundle jekyll
    sudo gem install bundler -v 1.17.2
    sudo gem update

    bundle install

### Errores.

* Por problemas con la instalación de Jekyll ver: [Jekyll installation problems.](https://jekyllrb.com/docs/troubleshooting/#installation-problems)
* Al ejecutar, si figura un error del tipo: *FATAL: Listen error: unable to monitor directories for changes.* ejecutar el siguiente comando

        echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

---

### Notas

* Por cada post se tienen 2 imagenes iguales en distinto tamaño. La original y una en miniatura.
* La imagen original preferentemente tendrá un tamaño de: 1300 px * 700 px.
* La imagen de miniatura tendrá un ancho de 350 px.
