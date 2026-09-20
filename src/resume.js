// resume.harshgiri.site — content mirrors Harsh_Resume.pdf (2026-09-20) + hackathon results and leadership he confirmed.
// Each bullet lists the skills it evidences (sk) so the skill filter can highlight it.
window.RESUME = {
  name: "Harsh Giri", role: "Agentic AI Engineer", loc: "Delhi, India", email: "2006.harshgiri@gmail.com",
  links: [["LinkedIn", "https://www.linkedin.com/in/giri-harsh", "bag"], ["GitHub", "https://github.com/giri-harsh", "git"], ["Portfolio", "https://harshgiri.site/", "arrow"]],
  tldr: [["45K+", "patient records modelled · 0.96 AUC"], ["<35 ms", "HNSW query latency · 99.5% SLA"], ["15 → 5", "two-stage RAG rerank · 82 tests in CI"], ["5+", "production fixes in Apache OpenOffice"]],
  experience: [
    { t: "ML Apprentice", org: "Microsoft SAP Edunet", when: "Jan 2025 – Mar 2025", b: [
      { x: "Engineered a multi-disease clinical prediction system on <b>45,000+</b> patient records, ensembling Random Forest, SVM, and Neural Networks to boost accuracy from <b>82% → 93.7%</b>, achieve <b>0.96 AUC</b>, and cut adverse-event false negatives by <b>18%</b>.", sk: ["Ensemble Methods", "scikit-learn", "Python"] },
      { x: "Automated feature extraction via PCA and 10-fold cross-validation, implementing SMOTE to improve high-risk minority-class recall by <b>23%</b>, critical for rare drug-interaction detection in clinical decision support systems.", sk: ["PCA", "SMOTE", "K-Fold CV"] },
      { x: "Optimized ML training pipelines with drug co-administration pattern encoding and clinical feature engineering, achieving <b>3×</b> faster experimentation cycles via parallelized cross-validation, reducing model deployment time by <b>40%</b>.", sk: ["Python", "K-Fold CV", "Pandas"] },
    ] },
    { t: "Open-Source Contributor", org: "Apache OpenOffice / GirlScript Summer of Code", when: "2024 – 2026", b: [
      { x: "Contributed <b>5+</b> production bug fixes across C++, Java, and XML in Apache OpenOffice, leveraging AST-based static code analysis across <b>15+</b> modules, improving codebase maintainability by <b>30%</b>.", sk: ["C++", "Java", "Git"] },
      { x: "Implemented CI/CD regression testing workflows integrated with the Apache build system, reducing post-merge defect rates by <b>25%</b> across heterogeneous C++/Java codebases.", sk: ["CI/CD", "C++", "Java"] },
      { x: "Accelerated developer onboarding by authoring Doxygen documentation for <b>15+</b> modules, cutting contributor ramp-up time by an estimated <b>35%</b>.", sk: ["C++"] },
    ] },
  ],
  projects: [
    { t: "Enterprise Grade Agentic RAG", sub: "Guardrailed Q&A over Technical Documentation", stack: "LangGraph, Qdrant, NeMo Guardrails, FastAPI", gh: "https://github.com/giri-harsh/Enterprise-RAG-Pipeline", deep: "https://project.harshgiri.site/#p/erag", b: [
      { x: "Engineered a guardrailed agentic RAG service on FastAPI + LangGraph, routing each turn through a typed-intent state machine with conditional edges, LLM query rewriting for multi-turn coreference, and a thread-scoped checkpointer; a fail-closed NeMo Guardrails (Colang) gate on Llama-3.1-8B blocks jailbreaks and off-topic input before any embedding, vector search, or 70B call.", sk: ["LangGraph", "FastAPI", "NeMo Guardrails", "Prompt Engineering"] },
      { x: "Architected two-stage retrieval — Qdrant cosine ANN <b>top-15</b> → quantised ONNX cross-encoder rerank → <b>top-5</b> — over a <b>64</b>-document corpus seeded with <b>57</b> distractor files, behind a dual-backend abstraction swapping <b>3072</b>-dim Gemini ↔ <b>768</b>-dim MPNet embeddings and Qdrant Cloud ↔ embedded index from a single config flag.", sk: ["Qdrant", "Cross-Encoder Reranking", "HNSW / ANN", "Embeddings"] },
      { x: "Deployed on Cloud Run (non-root container, API-key auth, CORS allowlist) with a Portkey gateway for <b>70B→8B</b> fallback, response caching and retry-on-429/503; instrumented with Logfire/LangSmith tracing and a RAGAS suite (faithfulness, context precision/recall, answer correctness) gated by GitHub Actions CI running <b>82</b> unit tests.", sk: ["Cloud Run", "Docker", "Portkey", "RAGAS", "LangSmith", "CI/CD", "pytest"] },
    ] },
    { t: "AI-Powered Game Recommendation Engine", stack: "KNN, Cosine Similarity, FastAPI, HNSW", gh: "https://github.com/giri-harsh/Game-Recommendation-System", live: "https://game-recommeder.vercel.app/", deep: "https://project.harshgiri.site/#p/gamerec", b: [
      { x: "Engineered a hybrid recommendation engine combining KNN and cosine similarity over <b>50,000+</b> game records, with HNSW indexing achieving <b>&lt;35ms</b> query latency and <b>92%</b> retrieval precision.", sk: ["HNSW / ANN", "scikit-learn", "Python"] },
      { x: "Deployed a production-grade FastAPI backend sustaining <b>1,000+</b> daily requests at <b>99.5%</b> SLA, integrating a Redis caching layer that reduced database load by <b>40%</b> during peak traffic.", sk: ["FastAPI", "Redis"] },
      { x: "Orchestrated end-to-end MLOps pipeline with async REST API endpoints, cutting cold-start inference time by <b>30%</b> and improving system throughput by <b>3×</b> under concurrent load.", sk: ["FastAPI", "CI/CD"] },
    ] },
    { t: "Text Extraction with YOLOv11 and OCR", stack: "YOLOv11, Tesseract, OpenCV", gh: "https://github.com/giri-harsh/Text-Extraction-with-YOLOv11-and-OCR", deep: "https://project.harshgiri.site/#p/yolo", b: [
      { x: "Engineered a two-stage document intelligence pipeline fusing YOLOv11 detection with Tesseract OCR, fine-tuned on <b>8,000+</b> annotated images to achieve mAP@0.5 of <b>91.3%</b> at <b>~95ms</b>/image.", sk: ["PyTorch", "Transfer Learning", "OpenCV"] },
      { x: "Architected an OpenCV preprocessing pipeline (grayscale, adaptive thresholding, binarization) boosting OCR accuracy by <b>28%</b>, enabling <b>650+</b> docs/min with structured JSON output for downstream ETL.", sk: ["OpenCV", "Python"] },
      { x: "Optimized YOLO fine-tuning via mixed-precision training and transfer learning, cutting training convergence by <b>35%</b> while maintaining <b>&gt;90%</b> precision on unseen document layouts.", sk: ["Mixed-Precision Training", "Transfer Learning", "PyTorch"] },
    ] },
  ],
  skills: [
    ["Languages & Tools", ["Python", "C++", "Java", "SQL", "Bash", "Git", "Docker", "Jupyter"]],
    ["LLM, Agentic Systems & Guardrails", ["LangGraph", "LangChain", "Agentic Workflows", "Tool Calling", "Multi-Turn State Management", "Conversational Memory & Checkpointing", "Prompt Engineering", "Structured Output", "Context Window Optimization", "Tokenization", "NeMo Guardrails", "Prompt-Injection & Jailbreak Defense", "Portkey", "Model Fallback & Caching"]],
    ["RAG, Retrieval & Evaluation", ["Qdrant", "FAISS", "ChromaDB", "HNSW / ANN", "Cross-Encoder Reranking", "Two-Stage Retrieval", "Semantic Search", "Chunking Strategies", "Sentence Transformers", "Embeddings", "RAGAS", "LLM-as-Judge", "Hallucination Detection", "Logfire", "LangSmith", "Distributed Tracing"]],
    ["ML, Backend & MLOps", ["PyTorch", "TensorFlow", "scikit-learn", "NumPy", "Pandas", "Ensemble Methods", "CNN (ResNet, VGG)", "Transfer Learning", "Mixed-Precision Training", "PCA", "SMOTE", "K-Fold CV", "FastAPI", "Async REST APIs", "Pydantic", "Streamlit", "Redis", "Cloud Run", "CI/CD", "pytest"]],
  ],
  achievements: [["Build with Agora", "Finalist", "Resolvix — real-time voice agent (solo)"], ["Swytchcode × Knotic", "Finalist", "Warrant — evidence-first support agent, on-site at Paytm"], ["Google AI Studio", "Pre-finalist", "LMLS — five cooperating Gemini agents"], ["VIT Bhopal SoCF 2.0", "Pre-finalist", "VITY — phone-first AI helpline"], ["Sketch'N'Ship 2026", "Pre-finalist", "Inkling — hand-drawn paper as a live input device"], ["Smart India Hackathon 2026", "In progress", "ISRO problem statement — AI dead-reckoning navigation"]],
  leadership: [["ML Center of Excellence, AKGEC", "Lead", "Spearheaded the 2026 intake of ~50 students through a one-month, four-task probation track."], ["CONVOLUTE", "Organiser", "Datathon for 100+ students."]],
  certs: [["Oracle Certified Data Science Professional", "Oracle University", "https://drive.google.com/file/d/1YHHvUrqAwSAgngwChIilhXCRHmm0v4ge/view"], ["Oracle Certified AI Foundations Associate", "Oracle University", "https://drive.google.com/file/d/1abbGcHjpg3mIlgVdJXvZnoaUy5Q93g32/view"]],
  education: { school: "Dr. APJ Abdul Kalam Technical University", deg: "B.Tech in Computer Science (Data Science)", where: "Ghaziabad, Uttar Pradesh", when: "Jun 2024 – May 2028" },
};
