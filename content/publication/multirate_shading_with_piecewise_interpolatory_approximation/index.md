---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Multirate Shading with Piecewise Interpolatory Approximation"
authors:   
  - admin
  - Yazhen Yuan
  - Rui Wang
  - Zhuo Yang
  - Hujun Bao
date: 2022-08-13
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2022-08-13

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "Conditionally Accepted to Pacific Graphics 2022, Journal (CGF) Track"
publication_short: ""

abstract: "Evaluating shading functions on geometry surfaces dominates the rendering computation. A high-quality but time-consuming
estimate is usually achieved with a dense sampling rate for pixels or sub-pixels. In this paper, we leverage sparsely sampled
points on vertices of dynamically-generated subdivision surfaces to approximate the ground-truth shading signal by piecewise
linear reconstruction. To control the introduced interpolation error at runtime, we analytically derive an L-infinity error bound and
compute the optimal subdivision surfaces based on a user-specified error threshold. We apply our analysis on multiple shading
functions including Lambertian, Blinn-Phong, Microfacet BRDF and also extend it to handle textures, yielding easy-to-compute
formulas. To validate our derivation, we design a forward multirate shading algorithm powered by hardware tessellator that
moves shading computation at pixels to the vertices of subdivision triangles on the fly. We show our approach significantly
reduces the sampling rates on various test cases, reaching a speedup ratio of 134%~283% compared to dense per-pixel
shading in current graphics hardware"

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
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
