---
abstract: Procedural textures are powerful tools that have been used in graphics for decades. In contrast to the alternative exemplar-based texture synthesis techniques, procedural textures provide user control and fast texture generation with low-storage cost and unlimited texture resolution. However, creating procedural models for complex textures requires a time-consuming process of selecting a combination of procedures and parameters. We present an example-based framework to automatically select procedural models and estimate parameters. In our framework, we consider textures categorized by commonly used high level classes. For each high level class we build a data-driven inverse modeling system based on an extensive collection of real-world textures and procedural texture models in the form of node graphs. We use unsupervised learning on collected real-world images in a texture class to learn sub-classes. We then classify the output of each of the collected procedural models into these sub-classes. For each of the collected models we train a convolutional neural network (CNN) to learn the parameters to produce a specific output texture. To use our framework, a user provides an exemplar texture image within a high level class. The system first classifies the texture into a sub-class, and selects the procedural models that produce output in that sub-class. The pre-trained CNNs of the selected models are used to estimate the parameters of the texture example. With the predicted parameters, the system can generate appropriate procedural textures for the user. The user can easily edit the textures by adjusting the node graph parameters. In a last optional step, style transfer augmentation can be applied to the fitted procedural textures to recover details lost in the procedural modeling process. We demonstrate our framework for four high level classes and show that our inverse modeling system can produce high-quality procedural textures for both structural and non-structural textures.
publication_types:
  - "2"
authors:
  - admin
  - Julie Dorsey
  - Holly Rushmeier
author_notes: []
publication: ACM Transactions on Graphics (SIGGRAPH ASIA 2019)
url_dataset: ""
url_source: ""
url_video: ""
title: A Novel Framework for Inverse Procedural Texture Modeling
doi: 10.1145/3355089.3356516
featured: true
tags: []
image:
  caption: ""
  focal_point: ""
  preview_only: false
date: 2019-12-01
publishDate: 2019-12-01
url_pdf: "https://graphics.cs.yale.edu/sites/default/files/inverse_procedural_texture_modeling_low-res_0.pdf"
url_project: "https://graphics.cs.yale.edu/publications/novel-framework-inverse-procedural-texture-modeling"
url_slides: ""
url_poster: ""
url_code: ""
---