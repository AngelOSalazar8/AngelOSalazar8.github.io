export const personalInfo = {
  name: "Hola!, Soy Ángel Mariel Osalde Salazar",
  location: "Yucatán, México",
  email: "Angelvg268@gmail.com",
  github: "https://github.com/Ninthharp8",
  linkedin: "https://www.linkedin.com/in/angel-osalde-salazar",
};

export const workExperience = [
   {
    company: "Laboratorio de Machine Learning y Visión por Computadora",
    location: "Mérida, Yucatán",
    position: "Servicio Social",
    period: "Sep 2024 - Mar 2025",
    achievements: [
      "Contribución al proyecto de inteligencia artificial en el sector salud ofrecido por la Uady, enfocado en mejorar la detección del parásito del chagas mediante redes neuronales de aprendizaje profundo y técnicas de aprendizaje supervisado.",
      "Entrenamiento y optimización de modelos YOLO en Python para la detección del parásito de Chagas.",
      "Generación y almacenamiento de estadísticas de entrenamiento y validación del modelo en formato CSV para su posterior análisis.",
      "Aplicación de técnicas avanzadas de ciencia de datos para interpretar los resultados, identificar patrones y evaluar el desempeño de cada modelo.",
      "Creación de visualizaciones y gráficos para representar la evolución de las métricas clave y determinar el modelo más eficiente en la detección del parásito."
    ],
  },
  {
    company: "Unidad de soporte y mantenimiento de equipo de cómputo",
    location: "Mérida, Yucatán",
    position: "Practicante",
    period: "Sep 2023 - Ene 2024",
    achievements: [
      "Instalación y configuración de sistemas operativos (Windows, Linux, MacOS).",
      "Automatización de tareas administrativas utilizando herramientas de Microsoft 365 y Google Workspace.",
      "Documentación de procedimientos y actividades en operaciones de TI.",
      "Propuesta e implementación de soluciones TIC para mejorar la eficiencia en la resolución de problemas del sistema.",
    ],
  },
];

export const education = [
  {
    institution: "Universidad Autónoma de Yucatán",
    location: "Mérida, Yucatán",
    degree: "Licenciatura en ciencias de la computación",
    period: "Sep 2020 - May 2025",
    achievements: [
      "Formación en fundamentos de programación, estructuras de datos, bases de datos, redes y sistemas operativos.",
      "Aplicación práctica de conocimientos mediante proyectos desarrollados en C++, Python (incluyendo aprendizaje automático) y tecnologías web.",
      "Uso de herramientas como Git, Visual Studio Code, Jupyter Notebook, MySQL y MongoDB durante prácticas y trabajos académicos."
    ],
  },
];
export const skills = {
  programmingLanguages: [
    "TypeScript",
    "JavaScript",
    "Python",
    "C/C++",
    "Java",
  ],
  frontendDevelopment: [
    "Nextjs",
    "Reactjs",
    "Tailwind CSS",
    "Angular",
    "bootstrap 5",
    "HTML",
    "CSS",
  ],
  backendDevelopment: [
    "Nodejs", 
    "Expressjs",
    "Arquitectura MVC"
  ],
  databaseAndStorage: [
    "PostgreSQL",
    "MongoDB",
    "MySQL"
  ],
  cloudAndDevOps: [
    "AWS",
    "Microsoft 365",
    "Google WorkSpace",
    "Git",
    "GitHub",
  ],
  toolsAndServices: [
    "Visual Studio Code",
    "Postman",
    "Microsoft Word",
    "Microsoft Excel",
    "Google Docs",
    "Google Sheets",
    "Google Colab",
    "JupyterNotebook",
  ],
  aiAndMachineLearning: [
  "Aprendizaje Supervisado",
  "Aprendizaje no supervisado",
  "Entrenamiento, Validación y Pruebas",
  "vision por computadora",
  "TensorFlow",
  "scikit-learn",
  "Pandas",
  "OpenCV",
  "Keras",
  "YOLO",
  "Pytorch",
],
operatingSystems:[
  "Windows",
  "Linux",
],
lenguajes:[
  "Ingles (B1)",
  "Español Nativo",
]
};

export const projects = [
  {
    title: "Análisis de Modelos para la Clasificación del Parkinson",
    github: "https://github.com/Ninthharp8/supervised-learning-parkinson.git",
    image:"https://github.com/Ninthharp8/supervised-learning-parkinson/blob/main/results/graphic-comparison-pressicion.png?raw=true",
    tags: ["Python", "Jupyter"],
    description: [
      "Estudié el comportamiento de distintos modelos de machine learning aplicados a la detección de Parkinson usando datos de voz.",
      "Comparé algoritmos como SVM, KNN y Random Forest para evaluar su precisión y confiabilidad.",
      "Analicé métricas como precisión, matriz de confusión y curvas ROC para entender el rendimiento de cada modelo.",
      "El trabajo me permitió familiarizarme con técnicas de clasificación supervisada y su aplicación en el área médica.",
      "Proyecto académico realizado en Jupyter con Python y Scikit-learn."
    ],
  },
  {
    title: "YOLO Chagas Analysis",
    github: "https://github.com/Ninthharp8/yolo-chagas-analysis",
    image: "https://github.com/Ninthharp8/yolo-chagas-analysis/blob/main/results/inferences/trypanosoma3.png?raw=true",
    tags: ["Python", "YOLOv8", "Ultralytics"],
    description: [
       "Detección avanzada de *Trypanosoma cruzi* utilizando modelos YOLO desde la versión 6 hasta la 10 para diagnóstico rápido.",
        "Entrenamiento personalizado y validación cruzada para comparar precisión, recall y métricas mAP entre distintas versiones de YOLO.",
        "Análisis detallado de rendimiento y visualización de resultados con gráficos para optimizar detección en imágenes microscópicas.",
        "Implementación basada en Ultralytics y PyTorch, integrando técnicas de aprendizaje profundo para mejorar la detección de parásitos.",
        "Proyecto realizado como servicio social enfocado en contribuir a la salud pública mediante inteligencia artificial aplicada."
    ],
  },
   {
    title: "Express Mini Proyectos",
    github: "https://github.com/Ninthharp8/express-mini-projects.git",
    image: "https://repository-images.githubusercontent.com/232512685/70107a80-31f8-11ea-9436-66c4dc25c0e2",
    tags: ["Node", "Express", "JavaScript","Java","Html"],
    description: [
      "Demuestra microservicios modulares orientados a sistemas escolares y gestión alumno-docente.",
      "Incluye endpoints para alumnos, profesores y control de asistencia con respuestas en formato JSON.",
      "Integra bases de datos relacionales (MySQL) y no relacionales (MongoDB) para almacenamiento persistente.",
      "Diseñado para ilustrar conceptos básicos de diseño de APIs REST, manejo de formularios y pruebas externas entre tecnologías.",
      "Preparado para la nube: expansión planeada hacia despliegue en AWS con Lambda, EC2 y sistemas de mensajería distribuidos.",
    ],
  },
   {
    title: "Angular Mini Proyectos",
    github: "https://github.com/Ninthharp8/angular-mini-proyectos.git",
    image: "https://www.unimedia.tech/wp-content/uploads/2023/11/angular-e1700824276714-1200x675.png",
    tags: ["Node", "Angular", "JavaScript","Css","Html","TypeScript"],
    description: [
      " Desarrollo de mini proyectos para afianzar conceptos de fundamentos de frontend en Angular mediante práctica aplicada.",
      " Implementación de componentes reutilizables y modulares, favoreciendo una estructura escalable.",
      "Integración de formularios interactivos, filtrado en tiempo real y estilos condicionales con binding bidireccional y manejo de eventos.",
      "Simulación de consumo de APIs utilizando Promesas para modelar flujos de datos asincrónicos.",
      "Cada proyecto fue estructurado de forma independiente para facilitar su comprensión, reutilización y extensión.",
    ],
  },
  /*  {
    title: "Exploración del Funcionamiento de una GAN",
    github: "https://github.com/Ninthharp8/gen-ia-mango-images-using-GAN.git",
    image: "https://github.com/Ninthharp8/gen-ia-mango-images-using-GAN/blob/main/samples/09-gan-mango.jpg?raw=true",
    tags: ["Python",  "Jupyter"],
    description: [
      "Exploré cómo funciona una red generativa antagónica (GAN) entrenando un modelo que genera imágenes de mangos sintéticos.",
      "Obtuve imágenes cada vez más realistas conforme la red aprendía durante las épocas de entrenamiento.",
      "El objetivo fue comprender las etapas del entrenamiento y la arquitectura básica de una GAN.",
      "Este ejercicio me ayudó a visualizar cómo la inteligencia artificial puede generar contenido visual a partir de ruido.",
      "Proyecto académico realizado con TensorFlow y Google Colab."
    ],
  }, */
];

export const awards = [
{
  name: "Data Visualization with Python",
  issuer: "Coursera",
  date: "Dic 2023",
  type: "Certificación",
  position: "Completado"
},
{
  name: "Using Python to Access Web Data",
  issuer: "Coursera",
  date: "Diciembre 2023",
  type: "Certificación",
  position: "Completado"
},
{
  name: "Introduction to Python Programming",
  issuer: "Coursera",
  date: "Diciembre 2023",
  type: "Certificación",
  position: "Completado"
},
{
  name: "Introduction to Linear Algebra and Python",
  issuer: "Coursera",
  date: "Noviembre 2023",
  type: "Certificación",
  position: "Completado"
},
{
  name: " Cisco Networking Academy: Redes de computadora",
  issuer:"Cisco",
  date: " Ene 2024 - May 2024",
  type: "Curso",
  position: "Completado"
},
{
  name: " Cisco Networking Academy: Fundamentos de Ciberseguridad",
  issuer:"Cisco",
  date: " Ene 2024 - May 2024",
  type: "Curso",
  position: "Completado"
},
{
  name: " AWS Academy: Cloud Foundations",
  issuer:"AWS",
  date: " Ago 2024 - Dic 2024",
  type: "Curso",
  position: "Completado"
},
{
  name: " Desarrollo Web Ágil de API y SPA",
  issuer:"Uady",
  date: " Ago 2024 - Dic 2024",
  type: "Curso",
  position: "Completado"
},
];
