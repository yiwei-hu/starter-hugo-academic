---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Multirate Shading with Piecewise Interpolatory Approximation"
summary: "We present a multirate shading approach via dynamic sparse sampling with piecewise linear reconstruction. "
authors:   
  - admin
  - Yazhen Yuan
  - Rui Wang
  - Zhuo Yang
  - Hujun Bao
tags:
  - Computer Graphics
categories: []
date: 2022-08-26

# Optional external URL for project (replaces project detail page).
external_link: ""

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_code: ""
url_pdf: "https://graphics.cs.yale.edu/sites/default/files/multirate_shading_with_piecewise_interpolatory_approximation.pdf"
url_slides: ""
url_video: "https://youtu.be/48X3KRQ6SPU"

links:
- name: Supplemental Materials
  url: "https://drive.google.com/drive/folders/1oeWY6jygolnWOIR25Vf3Qa7TT6FCA2pO?usp=sharing"
  
# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ""
---

**Abstract**: Evaluating shading functions on geometry surfaces dominates the rendering computation. A high-quality but time-consuming
estimate is usually achieved with a dense sampling rate for pixels or sub-pixels. In this paper, we leverage sparsely sampled
points on vertices of dynamically-generated subdivision surfaces to approximate the ground-truth shading signal by piecewise
linear reconstruction. To control the introduced interpolation error at runtime, we analytically derive an L-infinity error bound and
compute the optimal subdivision surfaces based on a user-specified error threshold. We apply our analysis on multiple shading
functions including Lambertian, Blinn-Phong, Microfacet BRDF and also extend it to handle textures, yielding easy-to-compute
formulas. To validate our derivation, we design a forward multirate shading algorithm powered by hardware tessellator that
moves shading computation at pixels to the vertices of subdivision triangles on the fly. We show our approach significantly
reduces the sampling rates on various test cases, reaching a speedup ratio of 134%~283% compared to dense per-pixel
shading in current graphics hardware

**Video**:
{{< youtube 48X3KRQ6SPU >}}