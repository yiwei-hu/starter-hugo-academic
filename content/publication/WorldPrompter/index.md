---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Generating 360 Video is What You Need For a 3D Scene"
authors: 
  - Zhaoyang Zhang
  - Yannick Hold-Geoffroy
  - Miloš Hašan
  - Ziwen Chen
  - Fujun Luan
  - Julie Dorsey
  - admin
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

abstract: "Generating 3D scenes is still a challenging task due to the lack of readily available scene data. Most existing methods only produce partial scenes and provide limited navigational freedom. We introduce a practical and scalable solution that uses 360° video as an intermediate scene representation, capturing the full-scene context and ensuring consistent visual content throughout the generation. We propose WorldPrompter, a generative pipeline that synthesizes traversable 3D scenes from text prompts. WorldPrompter incorporates a conditional 360° panoramic video generator, capable of producing a 128-frame video that simulates a person walking through and capturing a virtual environment. The resulting video is then reconstructed as Gaussian splats by a fast feedforward 3D reconstructor, enabling a true walkable experience within the 3D scene. Experiments demonstrate that our panoramic video generation model, trained with a mix of image and video data, achieves convincing spatial and temporal consistency for static scenes. This is validated by an average COLMAP matching rate of 94.6%, allowing for high-quality panoramic Gaussian splat reconstruction and improved navigation throughout the scene. Qualitative and quantitative results also show it outperforms the state-of-the-art 360° video generators and 3D scene generation models."
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
url_project: https://zhaoyangzh.github.io/publication/2025_siggraphasia_worldprompter/
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
