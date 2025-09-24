---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "OmniVCus: Feedforward Subject-driven Video Customization with Multimodal Control Conditions"
authors: 
 - Yuanhao Cai
 - He Zhang
 - Xi Chen
 - Jinbo Xing
 - admin
 - Yuqian Zhou
 - Kai Zhang
 - Zhifei Zhang
 - Soo Ye Kim
 - Tianyu Wang
 - Yulun Zhang
 - Xiaokang Yang
 - Zhe Lin
 - Alan Yuille
date: 2025-09-24
# doi: "10.1145/3687979"

# Schedule page publish date (NOT publication's date).
publishDate: 2025-09-23

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["0"]

# Publication name and optional abbreviated publication name.
publication: "NeurIPS 2025"
publication_short: ""

abstract: "Existing feedforward subject-driven video customization methods mainly study single-subject scenarios due to the difficulty of constructing multi-subject training data pairs. Another challenging problem that how to use the signals such as depth, mask, camera, and text prompts to control and edit the subject in the customized video is still less explored. In this paper, we first propose a data construction pipeline, VideoCus-Factory, to produce training data pairs for multi-subject customization from raw videos without labels and control signals such as depth-to-video and mask-to-video pairs. Based on our constructed data, we develop an Image-Video Transfer Mixed (IVTM) training with image editing data to enable instructive editing for the subject in the customized video. Then we propose a diffusion Transformer framework, OmniVCus, with two embedding mechanisms, Lottery Embedding (LE) and Temporally Aligned Embedding (TAE). LE enables inference with more subjects by using the training subjects to activate more frame embeddings. TAE encourages the generation process to extract guidance from temporally aligned control signals by assigning the same frame embeddings to the control and noise tokens. Experiments demonstrate that our method significantly surpasses state-of-the-art methods in both quantitative and qualitative evaluations."

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
url_project: https://caiyuanhao1998.github.io/project/OmniVCus/
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
