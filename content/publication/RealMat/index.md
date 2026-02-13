---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "RealMat: Realistic Materials with Diffusion and Reinforcement Learning"
authors: 
  - Xilong Zhou
  - Pedro Figueiredo
  - Miloš Hašan
  - Valentine Deschaintre
  - Paul Guerrero
  - admin
  - Nima Kalantari
date: 2026-02-01
# doi: "10.1145/3687979"

# Schedule page publish date (NOT publication's date).
publishDate: 2026-02-01

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["0"]

# Publication name and optional abbreviated publication name.
publication: "Computer Graphics Forum 2026"
publication_short: ""

abstract: "Generative models for high-quality materials are particularly desirable to make 3D content authoring more accessible. However, the majority of material generation methods are trained on synthetic data. Synthetic data provides precise supervision for material maps, which is convenient but also tends to create a significant visual gap with real-world materials. Alternatively, recent work used a small dataset of real flash photographs to guarantee realism, however such data is limited in scale and diversity. To address these limitations, we propose RealMat, a diffusion-based material generator that leverages realistic priors, including a text-to-image model and a dataset of realistic material photos under natural lighting. In RealMat, we first finetune a pretrained Stable Diffusion XL (SDXL) with synthetic material maps arranged in 2 × 2 grids. This way, our model inherits some realism of SDXL while learning the data distribution of the synthetic material grids. Still, this creates a realism gap, with some generated materials appearing synthetic. We propose to further finetune our model through reinforcement learning (RL), encouraging the generation of realistic materials. We develop a realism reward function for any material image under natural lighting, by collecting a large-scale dataset of realistic material images. We show that this approach increases generated materials' realism compared to our base model and related work."
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

url_pdf:
url_code:
url_dataset:
url_poster:
url_project: https://pedrovfigueiredo.github.io/projects/realmat/index.html
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
