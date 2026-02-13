---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "HiMat: DiT-based Ultra-High Resolution SVBRDF Generation"
authors: 
  - Zixiong Wang
  - Jian Yang
  - admin
  - Miloš Hašan
  - Beibei Wang
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
publication: "Computer Graphics Forum, Proc. of Eurographics (EG 2026)"
publication_short: ""

abstract: "Creating ultra-high-resolution spatially varying bidirectional reflectance functions (SVBRDFs) is critical for photorealistic 3D content creation, to faithfully represent fine-scale surface details required for close-up rendering. However, achieving 4K generation faces two key challenges: (1) the need to synthesize multiple reflectance maps at full resolution, which multiplies the pixel budget and imposes prohibitive memory and computational cost, and (2) the requirement to maintain strong pixel-level alignment across maps at 4K, which is particularly difficult when adapting pretrained models designed for the RGB image domain. We introduce HiMat, a diffusion-based framework tailored for efficient and diverse 4K SVBRDF generation. To address the first challenge, HiMat performs generation in a high-compression latent space via DC-AE, and employs a pretrained diffusion transformer with linear attention to improve per-map efficiency. To address the second challenge, we propose CrossStitch, a lightweight convolutional module that enforces cross-map consistency without incurring the cost of global attention. Our experiments show that HiMat achieves high-fidelity 4K SVBRDF generation with superior efficiency, structural consistency, and diversity compared to prior methods. Beyond materials, our framework also generalizes to related applications such as intrinsic decomposition."
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

url_pdf: https://arxiv.org/abs/2508.07011
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
