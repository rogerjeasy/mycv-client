import Project from '../models/Project';

const projectMLData = [
  new Project(
    "Machine Learning Engineer Intern at Earkick (Zurich, Switzerland)",
    "",
    ["As a machine learning intern at Earkick, I worked on a project aimed at developing novel machine learning solutions to infer a person's mental health status from selfie videos, focusing on mood and anxiety prediction. We leveraged open-source video-based emotion recognition datasets and proprietary data from Earkick to train neural network models."],
    ["PyTorch", "OpenCV", "Python", "Git", "Hugging Face", "AWS", "Jupyter Notebook"],
    [
      "Data curation and management: Played a key role in the curation of training datasets, ensuring high-quality data for model training and analysis.",
      "Advanced feature engineering and preprocessing: Implemented sophisticated feature engineering and preprocessing techniques.",
      "Model development for emotion recognition: Spearheaded the training of video-based emotion recognition models, utilizing an open-source research dataset.",
      "Multimodal data integration: Successfully integrated audio data streams with image data to enrich the model’s input, allowing for more robust and comprehensive analysis in emotion recognition tasks."
    ]
  ),

  new Project(
    "PhD Research Project 1: Parallel Implementation of Gabor Wavelet Processing in PyTorch",
    " ",
    ["There exists an open-source package called Bob that implements the whole chain of Gabor wavelet processing for images in C++ with Python bindings. This package has been implemented by Manuel Gunther some years ago as part of Bob but it has been deactivated in the last version due to a restructuring and removal of all C++ implementations. In addition, it acks parallelization, hindering its efficiency, and does not support the incorporation of Gabor filters into modern deep learning methods. The goal is to leverage the PyTorch framework to implement the Gabor wavelet processing in the spatial domain and frequency domain, allowing for parallelization on the GPU to explore the full capability of Gabor waveletes."],
    ["PyTorch", "Python", "Git", "Jupyter Notebook"],
    [
      "Implemented the Gabor wavelet family as an extension of the PyTorch Conv2d Module layer in spatial domain and an activation function to turn complex-valued responses into Euler representations. Thus, allows parallelization on the GPU which the current implementation does not have.",
      "Managed to implement the Gabor wavelet processing in frequency domain using torch.fft for the FFT, reducing the running time by 60%. Thus, very suitable to solve computer vision tasks.",
      "Implemented the concept of Gabor jets, which extract all responses at selected (or all) locations within an image, including the I/O functionatility",
      "Integrated new various similarity functions to compare the Gabor jet responses, including the amplitude, Canberra, and disparity similarities. This allows for the comparison of the Gabor jet responses."
    ]
  ),

  new Project(
    "Research Assistant at the University of Pretoria",
    " ",
    ["As a research assistant at the University of Pretoria, I worked on the project \"Simulating Breeding Populations for Machine Learning.\" This project aimed to assess genetic parameters and experimental effects to enhance the performance of existing genomic selection (GS) methods through simulation studies. Additionally, the study employed machine learning models to perform GS, with the goal of improving the accuracy and efficiency of genomic predictions."],
    ["Python", "R", "TensorFlow", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
    [
      "Development of an automated pipeline for breeders: Spearheaded the creation of an innovative pipeline for the Forest Molecular Genetics Program Research Group. This tool enables the generation of synthetic breeding populations at no cost using AlphaSimR and QMSim simulation software.",
      "Efficient data processing: Automated the processing of simulated datasets using Python and R, significantly reducing the analysis time to under 10 minutes for large data sets.",
      "Advanced genetic analysis tools: Enhanced the pipeline to allow breeders to examine the impact of genetic parameters (like the number of markers, heritability, training population size) on genomic selection accuracy. Incorporated features for generating comprehensive 2D and 3D visualizations of these analyses.",
      "Deep learning and machine learning applications: Conducted training and evaluation of various deep learning network architectures and machine learning algorithms for genomic selection. This approach focused on predicting Genomic Estimated Breeding Values (GEBVs) in plant breeding, demonstrating superior performance compared to traditional statistical methods in genomic selection."
    ]
  ),
  // Add more projects as needed
];

export default projectMLData;
