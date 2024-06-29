---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "TexSliders: Diffusion-Based Texture Editing in CLIP Space"
authors: 
  - Julia Guerrero-Viu
  - Miloš Hašan
  - Arthur Roullier
  - Midhun Harikumar
  - admin
  - Paul Guerrero
  - Diego Gutierre
  - Belen Masia
  - Valentin Deschaintre
date: 2024-06-26
# doi: "3588432.3591520"

# Schedule page publish date (NOT publication's date).
publishDate: 2024-06-26

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["0"]

# Publication name and optional abbreviated publication name.
publication: "SIGGRAPH 2024"
publication_short: ""

abstract: "Generative models have enabled intuitive image creation and manipulation using natural language. In particular, diffusion models have recently shown remarkable results for natural image editing. In this work, we propose to apply diffusion techniques to edit textures, a specific class of images that are an essential part of 3D content creation pipelines. We analyze existing editing methods and show that they are not directly applicable to textures, since their common underlying approach, manipulating attention maps, is unsuitable for the texture domain. To address this, we propose a novel approach that instead manipulates CLIP image embeddings to condition the diffusion generation. We define editing directions using simple text prompts (e.g., aged wood to new wood) and map these to CLIP image embedding space using a texture prior, with a sampling-based approach that gives us identity-preserving directions in CLIP space. To further improve identity preservation, we project these directions to a CLIP subspace that minimizes identity variations resulting from entangled texture attributes. Our editing pipeline facilitates the creation of arbitrary sliders using natural language prompts only, with no ground-truth annotated data necessary."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_pdf: https://graphics.unizar.es/projects/TexSliders/pdf/TexSliders_SIGGRAPH2024_postprint.pdf
url_code:
url_dataset:
url_poster:
url_project: https://graphics.unizar.es/projects/TexSliders
url_slides:
url_source:
url_video:

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
