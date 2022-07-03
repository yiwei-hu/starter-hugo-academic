---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Controlling Material Appearance by Examples"
summary: "Including paper, supplemental materials and source code"
authors: []
tags: []
categories: []
date: 2022-07-03T15:31:56-04:00

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

url_code: "https://github.com/yiwei-hu/Controlling-Material-Appearance-by-Examples"
url_pdf: "https://graphics.cs.yale.edu/sites/default/files/controlling_material_appearance_by_examples_preprint.pdf"
url_slides: ""
url_video: ""

links:
- name: Supplemental Materials
  url: "https://drive.google.com/drive/folders/11qA_aYd6qCfB8KO948Pl1yluJncLoOi_?usp=sharing"
  
# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ""
---

**Abstract**: Despite the ubiquitousness of materials maps in modern rendering pipelines, their editing and control remains a challenge. In this paper, we present an example-based material control method to augment input material maps based on user-provided material photos. We train a tileable version of MaterialGAN and leverage its material prior to guide the appearance transfer, optimizing its latent space using differentiable rendering. Our method transfers the micro and meso-structure textures of user provided target(s) photographs, while preserving the structure of the input and quality of the input material. We show our methods can control existing material maps, increasing realism or generating new, visually appealing materials.

**Results**: <br>
{{% staticref "uploads/hu2022control/results.html" "newtab" %}}Click here to navigate our results.{{% /staticref %}}

**Citation**:
```
@article {hu2022control,
  title = {Controlling Material Appearance by Examples},
  author = {Hu, Yiwei and Hašan, Miloš and Guerrero, Paul and Rushmeier, Holly and Deschaintre, Valentin},
  journal = {Computer Graphics Forum (Proc. of Eurographics Symposium on Rendering 2022)},
  volume = {41},
  number = {4},
  year = {2022},
}
```