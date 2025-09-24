---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "AniTex: light-geometry consistent PBR Material Generation for Animatable Objects"
authors: 
  - Jieting Xu
  - Ziyi Xu
  - Guoyuan An
  - admin
  - Rengan Xie
  - Zhijian Liu
  - Dianbing Xi
  - Wenjun Song
  - Yuchi Huo
  - Rui Wang
date: 2025-09-23
# doi: "10.1145/3687979"

# Schedule page publish date (NOT publication's date).
publishDate: 2025-09-23

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["0"]

# Publication name and optional abbreviated publication name.
publication: "SIGGRAPH ASIA 2025"
publication_short: ""

abstract: "High-quality Physically-Based Rendering (PBR) materials are crucial for visual realism in 3D as set creation, yet existing methods primarily target static objects, leading to challenges in maintain ing multi-frame consistency for animatable entities. To tackle this issue, we introduce AniTex, the first generative pipeline that utilizes diffusion models to synthesize high-quality PBR materials for animat able objects based on text prompts. The pipeline consists of two stages: first, RGB texture maps are generated using a ControlNet-based diffusion model conditioned on geometry and lighting chan nels, ensuring consistent texture generation across various viewpoints and frames. In the second stage, another diffusion model decomposes these RGB texture maps into PBR materials, also conditioned on auxiliary channels for consistency. Finally, the generated PBR material maps are blended across viewpoints and frames to maintain temporal co herence and visual consistency in the object’s an imation. Extensive experiments show that Ani Tex produces more realistic PBR materials for both static and animated objects, outperforming baseline methods in visual appeal."

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

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
