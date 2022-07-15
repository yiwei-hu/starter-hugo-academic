---
title: An Inverse Procedural Modeling Pipeline for SVBRDF Maps
summary: "We present a semi-automatic pipeline for general material proceduralization which
converts SV-BRDF maps to a procedural graph representation without relying on a pre-defined graph as auxiliary input."
authors:
  - admin
  - Chengan He
  - Valentin Deschaintre
  - Julie Dorsey
  - Holly Rushmeier
tags:
- Computer Graphics
date: "2022-01-04"

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: 
  focal_point: Smart

links:
- name: Code (Coming Soon)
  url: "https://github.com/yiwei-hu/SVBRDF-Proceduralization"
- name: Supplemental Materials
  url: "https://drive.google.com/drive/folders/15Q3lar4OIafoWb_APUBkCVSkqvhZWPN0"

url_code: ""
url_pdf: "https://graphics.cs.yale.edu/sites/default/files/ipmm_preprint.pdf"
url_video: "https://www.youtube.com/watch?v=BUppiilIrM8"

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: example
---
**Abstract**: Procedural modeling is now the de facto standard of material modeling in industry. Procedural models can be edited and are easily extended, unlike pixel-based representations of captured materials. In this article, we present a semi-automatic pipeline for general material proceduralization. Given Spatially Varying Bidirectional Reflectance Distribution Functions (SVBRDFs) represented as sets of pixel maps, our pipeline decomposes them into a tree of sub-materials whose spatial distributions are encoded by their associated mask maps. This semi-automatic decomposition of material maps progresses hierarchically, driven by our new spectrum-aware material matting and instance-based decomposition methods. Each decomposed sub-material is proceduralized by a novel multi-layer noise model to capture local variations at different scales. Spatial distributions of these sub-materials are modeled either by a by-example inverse synthesis method recovering Point Process Texture Basis Functions (PPTBF) or via random sampling. To reconstruct procedural material maps, we propose a differentiable rendering-based optimization that recomposes all generated procedures together to maximize the similarity between our procedural models and the input material pixel maps. We evaluate our pipeline on a variety of synthetic and real materials. We demonstrate our method’s capacity to process a wide range of material types, eliminating the need for artist designed material graphs required in previous work. As fully procedural models, our results expand to arbitrary resolution and enable high-level user control of appearance.

**Video**:
{{< youtube BUppiilIrM8 >}}

**Results**: <br>
{{% staticref "uploads/hu2022/index.html" "newtab" %}}Click here to navigate our results.{{% /staticref %}}

**Citation**:
```
@article{hu2022inverse,
  title={An Inverse Procedural Modeling Pipeline for SVBRDF Maps},
  author={Hu, Yiwei and He, Chengan and Deschaintre, Valentin and Dorsey, Julie and Rushmeier, Holly},
  journal={ACM Transactions on Graphics (TOG)},
  volume={41},
  number={2},
  pages={1--17},
  year={2022},
  publisher={ACM New York, NY}
}
```