---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Node Graph Optimization Using Differentiable Proxies"
authors: 
  - admin
  - Paul Guerrero
  - Miloš Hašan
  - Holly Rushmeier
  - Valentin Deschaintre
date: 2022-08-04
doi: "10.1145/3528233.3530733"

# Schedule page publish date (NOT publication's date).
publishDate: 2022-06-10

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "SIGGRAPH 2022"
publication_short: ""

abstract: "Graph-based procedural materials are ubiquitous in content production industries. Procedural models allow the creation of photorealistic materials with parametric control for flexible editing of appearance. However, designing a specific material is a time-consuming process in terms of building a model and fine-tuning parameters. Previous work [Hu et al. 2022; Shi et al. 2020] introduced material graph optimization frameworks for matching target material samples. However, these previous methods were limited to optimizing differentiable functions in the graphs. In this paper, we propose a fully differentiable framework which enables end-to-end gradient based optimization of material graphs, even if some functions of the graph are non-differentiable. We leverage the Differentiable Proxy, a differentiable approximator of a non-differentiable black-box function. We use our framework to match structure and appearance of an output material to a target material, through a multi-stage differentiable optimization. Differentiable Proxies offer a more general optimization solution to material appearance matching than previous work."

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

url_pdf: https://graphics.cs.yale.edu/sites/default/files/node_graph_optimization_using_differentiable_proxies.pdf
url_code:
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
projects: [hu2022diff]

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
