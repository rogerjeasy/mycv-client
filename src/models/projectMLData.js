import Project from '../models/Project';

const projectMLData = [
  new Project(
    "Machine Learning Intern at Earkick",
    " ",
    ["As a machine learning intern at Earkick, I worked on developing a machine learning model for music recommendation. The model was trained on a dataset of user listening history and music features to predict the next song a user would like to listen to. The model was deployed as a web application and integrated with the Earkick music platform."],
    ["PyTorch", "OpenCV", "Python", "Git", "Hugging Face", "AWS", "Jupyter Notebook"],
    [
      "Data curation and management: Played a key role in the curation of training datasets, ensuring high-quality data for model training and analysis.",
      "Advanced feature engineering and preprocessing: Implemented sophisticated feature engineering and preprocessing techniques.",
      "Model development for emotion recognition: Spearheaded the training of video-based emotion recognition models, utilizing an open-source research dataset.",
      "Multimodal data integration: Successfully integrated audio data streams with image data to enrich the model’s input, allowing for more robust and comprehensive analysis in emotion recognition tasks."
    ]
  ),

  new Project(
    "Research Assistant at the University of Pretoria",
    " ",
    ["As a research assistant at the University of Pretoria, I worked on developing a machine learning model for predicting the spread of infectious diseases. The model was trained on a dataset of historical disease outbreaks and environmental factors to predict the likelihood of future outbreaks. The model was deployed as a web application and integrated with the university’s public health platform."],
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
