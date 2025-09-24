---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Procedural Material Generation with Reinforcement Learning"
authors: 
  - Beichen Li
  - admin
  - Paul Guerrero
  - Miloš Hašan
  - Liang Shi
  - Valentin Deschaintre
  - Wojciech Matusik
date: 2024-09-16
doi: "10.1145/3687979"

# Schedule page publish date (NOT publication's date).
publishDate: 2024-09-16

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["0"]

# Publication name and optional abbreviated publication name.
publication: "ACM Transactions on Graphics (SIGGRAPH ASIA 2024)"
publication_short: ""

abstract: "Modern 3D content creation heavily relies on procedural assets. In particular, procedural materials are ubiquitous in the industry, but their manipulation remains challenging. Previous work conditionally generates procedural graphs that match a given input image. However, the parameter generation step limits how accurately the generated graph matches the input image, due to a reliance on supervision with scarcely available procedural data. We propose to improve parameter prediction accuracy for image-conditioned procedural material generation by leveraging reinforcement learning (RL) and present the first RL approach for procedural materials. RL circumvents the limited availability of procedural data, the domain gap between real and synthetic materials, and the need for end-to-end differentiable loss functions. Given a target image, we retrieve a procedural material and use an RL-trained transformer model to predict a set of parameters that reconstruct the target image as closely as possible. We show that using RL significantly improves parameter prediction to match a given target image compared to supervised methods on both synthetic and real target images. "

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

url_pdf: https://dl.acm.org/doi/10.1145/3687979
url_code: https://github.com/adobe-research/ProcMatRL
url_dataset:
url_poster:
url_project:
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
