---
abstract: Procedural modeling is now the de facto standard of material modeling in industry. Procedural models can be edited and are easily extended, unlike pixel-based representations of captured materials. In this article, we present a semi-automatic pipeline for general material proceduralization. Given Spatially Varying Bidirectional Reflectance Distribution Functions (SVBRDFs) represented as sets of pixel maps, our pipeline decomposes them into a tree of sub-materials whose spatial distributions are encoded by their associated mask maps. This semi-automatic decomposition of material maps progresses hierarchically, driven by our new spectrum-aware material matting and instance-based decomposition methods. Each decomposed sub-material is proceduralized by a novel multi-layer noise model to capture local variations at different scales. Spatial distributions of these sub-materials are modeled either by a by-example inverse synthesis method recovering Point Process Texture Basis Functions (PPTBF) or via random sampling. To reconstruct procedural material maps, we propose a differentiable rendering-based optimization that recomposes all generated procedures together to maximize the similarity between our procedural models and the input material pixel maps. We evaluate our pipeline on a variety of synthetic and real materials. We demonstrate our method’s capacity to process a wide range of material types, eliminating the need for artist designed material graphs required in previous work. As fully procedural models, our results expand to arbitrary resolution and enable high-level user control of appearance.
publication_types:
  - "2"
authors:
  - admin
  - Chengan He
  - Valentin Deschaintre
  - Julie Dorsey
  - Holly Rushmeier
author_notes: []
publication: ACM Transactions on Graphics (Presented at SIGGRAPH 2022)
title: An Inverse Procedural Modeling Pipeline for SVBRDF Maps
doi: 10.1145/3502431
featured: true
tags: []
projects:
  - hu2022
image:
  caption: ""
  focal_point: ""
  preview_only: false
date: 2022-01-04
publishDate: 2022-01-04
url_dataset: ""
url_pdf: "https://graphics.cs.yale.edu/sites/default/files/ipmm_preprint.pdf"
url_project: ""
url_slides: ""
url_poster: ""
url_code: ""
url_source: ""
url_video: ""
---
