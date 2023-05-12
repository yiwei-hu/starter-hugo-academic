---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Generating Procedural Materials from Text or Image Prompts"
authors: 
  - admin
  - Paul Guerrero
  - Miloš Hašan
  - Holly Rushmeier
  - Valentin Deschaintre
date: 2023-08-06
doi: "3588432.3591520"

# Schedule page publish date (NOT publication's date).
publishDate: 2023-05-12

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["0"]

# Publication name and optional abbreviated publication name.
publication: "SIGGRAPH 2023"
publication_short: ""

abstract: "Node graph systems are used ubiquitously for material design in computer graphics. They allow the use of visual programming to achieve desired effects without writing code. As high-level design tools they provide convenience and flexibility, but mastering the creation of node graphs usually requires professional training. We propose an algorithm capable of generating multiple node graphs from different types of prompts, significantly lowering the bar for users to explore a specific design space. Previous work (MatFormer) was limited to unconditional generation of random node graphs, making the generation of an envisioned material challenging. We propose a multi-modal node graph generation neural architecture for high-quality procedural material synthesis which can be conditioned on different inputs (text or image prompts), using a CLIP-based encoder. We also create a substantially augmented material graph dataset, key to improving the generation quality. Finally, we generate high-quality graph samples using a regularized sampling process and improve the matching quality by differentiable optimization for top-ranked samples. We compare our methods to CLIP-based database search baselines (which are themselves novel) and achieve superior or similar performance without requiring massive data storage. We further show that our model can produce a set of material graphs unconditionally, conditioned on images, text prompts or partial graphs, serving as a tool for automatic visual programming completion."

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

url_pdf: https://graphics.cs.yale.edu/sites/default/files/generating_procedural_materials_from_text_or_image_prompts.pdf
url_code:
url_dataset:
url_poster:
url_project: "/uploads/hu2023gen/project.html"
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
## projects: [hu2023gen]

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
