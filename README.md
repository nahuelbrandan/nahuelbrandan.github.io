# Personal Website

<div align="center">

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fwww.nahuelbrandan.com)](https://www.nahuelbrandan.com)
[![Made with Jekyll](https://img.shields.io/badge/Made%20with-Jekyll-1f425f.svg)](https://jekyllrb.com/)
[![License: GPL-3.0](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

</div>

This is my personal website built with Jekyll. Visit it at [nahuelbrandan.com](https://www.nahuelbrandan.com).

## 🚀 Features

- Responsive design
- Blog functionality
- Dark/Light mode
- SEO optimized
- Fast loading times

## 🛠️ Technologies

- [Jekyll](https://jekyllrb.com/) - Static site generator
- [Ruby](https://www.ruby-lang.org/) - Programming language
- [Docker](https://www.docker.com/) - Container platform

## 📋 Prerequisites

- Docker and Docker Compose (for Docker mode)
- Ruby 2.7+ and Bundler (for manual mode)

## 🚀 Getting Started

### Docker Mode (Recommended)

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/nahuelbrandan.github.io.git
    cd nahuelbrandan.github.io
    ```

2. Start the development server:
    ```bash
    docker compose up -d
    ```

3. Access the website at [localhost:4000](http://localhost:4000/)

### Manual Mode

1. Install system dependencies:
    ```bash
    sudo apt install ruby ruby-dev libffi-dev build-essential zlib1g-dev
    ```

2. Install Ruby gems:
    ```bash
    sudo gem install bundle jekyll
    sudo gem install bundler -v 2.1.4
    sudo gem update
    ```

3. Install project dependencies:
    ```bash
    bundle install
    ```

4. Start the development server:
    ```bash
    bundle exec jekyll serve --livereload
    ```

## 🔧 Development

### Running the Server

Different options for running the development server:

- Basic server: `bundle exec jekyll serve`
- With **live reload**: `bundle exec jekyll serve --livereload`
- With **drafts posts**: `bundle exec jekyll serve --drafts --livereload`

### Updating Dependencies

1. Access the Docker container:
    ```bash
    docker compose run jekyll bash
    ```

2. Update gems:
    ```bash
    bundle update
    ```

## 🐛 Troubleshooting

### Common Issues

1. **Listen error: unable to monitor directories for changes**
   ```bash
   echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
   ```

2. **Port 4000 is in use**
   ```bash
   fuser -n tcp -k 4000
   ```

## 📝 License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.


## 📫 Contact

- Website: [nahuelbrandan.com](https://www.nahuelbrandan.com)
- GitHub: [@nahuelbrandan](https://github.com/nahuelbrandan)
