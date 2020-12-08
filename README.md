# ARCANES - site web

Site web pour le projet ARCANES.

## Pile technique

- [Hugo](https://gohugo.io/), générateur de site statique ultra-rapide et fort répandu.
- HTML riche et sémantique (OpenGraph, Schema.org, Dublin Core).
- CSS + [PostCSS](https://postcss.org/) (Autoprefixer, nested, purgeCSS, import) + [TailwindCSS](https://tailwindcss.com/).
- Git pour le versionnement + déploiement.
- Contenu en Markdown (dossier `content/`).
- Configuration en Yaml (fichier `config.yml`).

## 🛠  Installation

1. [Hugo](https://gohugo.io) pour construire le site.
2. [NodeJS](https://nodejs.org/) v10+ et son compagnon `npm` sont requis (pour construire les assets avec [PostCSS-CLI](https://github.com/postcss/postcss-cli)).

À la première installation, il faut reproduire les trois étapes suivantes, en ligne de commande:

```bash
# 1. cloner avec Git
git clone https://github.com/loup-brun/arcanes.ca.git

# 2. se déplacer dans le répertoire
cd arcanes.ca

# 3. installer les dépendances dans le dossier `node_modules/`
npm install 
```

Voilà, c'est prêt!

## 💻 Local

Démarrer un serveur local (http://localhost:1313 by default):

```bash
make serve  # hugo serve --disableFastRender --buildDrafts --buildFuture
```

## 📦 Production

Construire le site dans le répertoire `public/`:

```bash
make build  # rm -rf public && hugo --minify
```

## 🚀 Deploiement

Les fichiers seront générés dans un dossier `public/`.
Il s'agit de les transférer sur un serveur web.
Cela peut être fait manuellement de plusieurs manières (FTP, SSH, Rsync) ou automatiquement grâce à un service de déploiement continu comme [Vercel](https://vercel.com/) ou [Netlify](https://www.netlify.com/).

### Service Vercel/Netlify

Il est possible de configurer un service tiers comme Vercel ou Netlify.
Chaque commit Git déclenchera un nouveau cycle de production.

Cette solution est recommandée.

### Rsync

Transférer les fichiers grâce à Rsync.
Il faut préalablement éditer les variables dans le fichier `commands/deploy.sh` (adresse du serveur, utilisateur, répertoire).

```bash
make deploy  # ./commands/deploy.sh
```

## Shortcodes

### 🖼 img

La balise Markdown pour les images peut être utilisée ainsi:

```md
![Légende + texte de substitution](chemin/de/image.jpg "Titre de l’image")
```

Pour davantage de contrôle sur le balisage des figures, utiliser le shortcode ainsi:

```md
{{< img src="/path/to/img.jpg" class="custom-class" title="Title (optional)" caption="Caption (optional)" >}}
```

Params:

- `alt` *(string)*: alternative text if image cannot be displayed.
- `class` *(string)*: add a class to the `<figure>` object.
- `caption` *(string)*: optional caption. Also translates to the `alt` img attribute
- `src` *(string)*: path to image. Must be an absolute path or relative to project root.
- `title` *(string)*: optional title.

## License

[WTFPL](http://wtfpl.net/about/)
