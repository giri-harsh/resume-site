import React, { useState } from 'react';
import { Download, ExternalLink, Mail, Linkedin, Github, MapPin, Calendar, Award, Briefcase, GraduationCap, Code, Database, Brain } from 'lucide-react';

const ResumePage = () => {
  const [isPrintMode, setIsPrintMode] = useState(false);

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Bar - Hide on print */}
      <div className="bg-slate-900 text-white py-4 px-6 print:hidden sticky top-0 z-10 shadow-lg">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">Harsh Giri - Resume</h1>
            <p className="text-slate-400 text-sm">Data Science Engineer</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={handleDownloadPDF}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
            >
              <Download size={18} />
              Download PDF
            </button>
            <a 
              href="https://harshgiri.site"
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <ExternalLink size={18} />
              Portfolio
            </a>
          </div>
        </div>
      </div>

      {/* Resume Content */}
      <div className="max-w-4xl mx-auto bg-white shadow-xl my-8 print:my-0 print:shadow-none">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 print:bg-blue-600">
          <h1 className="text-4xl font-bold mb-2">Harsh Giri</h1>
          <p className="text-xl mb-4 text-blue-100">Data Science Engineer | ML Model Development & Deployment</p>
          
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="mailto:2006.harshgiri@gmail.com" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
              <Mail size={16} />
              2006.harshgiri@gmail.com
            </a>
            <a href="https://linkedin.com/in/giri-harsh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
              <Linkedin size={16} />
              linkedin.com/in/giri-harsh
            </a>
            <a href="https://github.com/giri-harsh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
              <Github size={16} />
              github.com/giri-harsh
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={16} />
              Ghaziabad, India
            </span>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-3 pb-2 border-b-2 border-blue-600">Professional Summary</h2>
            <p className="text-slate-700 leading-relaxed">
              Data Science Engineer specializing in end-to-end machine learning systems, from data preprocessing to production deployment. 
              Proven track record in building recommendation systems, predictive models, and explainable AI solutions with measurable impact. 
              Experienced in optimizing model performance, deploying ML systems at scale, and reducing false negatives through advanced techniques.
            </p>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b-2 border-blue-600 flex items-center gap-2">
              <GraduationCap size={24} />
              Education
            </h2>
            <div className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">B.Tech in Computer Science and Engineering (Data Science)</h3>
                  <p className="text-slate-600">Ajay Kumar Garg Engineering College, Ghaziabad</p>
                </div>
                <span className="text-slate-600 font-semibold">2024 - 2028</span>
              </div>
              <p className="text-slate-600 text-sm">Specialized coursework in Machine Learning, Deep Learning, Data Structures, and Statistical Analysis</p>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b-2 border-blue-600 flex items-center gap-2">
              <Briefcase size={24} />
              Experience
            </h2>
            
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">Machine Learning Engineer</h3>
                  <p className="text-slate-600 font-semibold">Microsoft SAP Edunet</p>
                </div>
                <span className="text-slate-600 font-semibold">Jan 2025 - Feb 2025</span>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-2 text-slate-700">
                <li>Developed multi-disease prediction models processing 45,000+ patient records across multiple medical datasets</li>
                <li>Improved model accuracy from 82% to 93.7% through advanced feature engineering and hyperparameter optimization</li>
                <li>Reduced false negatives by 18% implementing SMOTE oversampling and stratified cross-validation techniques</li>
                <li>Deployed Random Forest, SVM, and Neural Network architectures with comprehensive evaluation metrics</li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">Open Source Contributor</h3>
                  <p className="text-slate-600 font-semibold">Apache OpenOffice Foundation</p>
                </div>
                <span className="text-slate-600 font-semibold">2024 - Present</span>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-2 text-slate-700">
                <li>Fixed 5+ critical bugs and optimized codebase in C++, Java, and XML across multiple modules</li>
                <li>Performed comprehensive regression testing on 15+ modules ensuring stability and backward compatibility</li>
                <li>Collaborated with global developer community following Apache Software Foundation contribution guidelines</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b-2 border-blue-600 flex items-center gap-2">
              <Code size={24} />
              Key Projects
            </h2>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-slate-800">AI-Powered Game Recommendation Engine</h3>
                  <a href="https://game.harshgiri.site" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 flex items-center gap-1 text-sm print:hidden">
                    <ExternalLink size={14} />
                    Live
                  </a>
                </div>
                <p className="text-slate-600 text-sm mb-2 italic">Python, Scikit-learn, FastAPI, Streamlit, NumPy, Pandas</p>
                <ul className="list-disc list-outside ml-5 space-y-1 text-slate-700">
                  <li>Built content-based recommendation system processing 50,000+ game metadata entries using KNN and cosine similarity</li>
                  <li>Achieved 92% precision and 0.89 F1-score with sub-35ms inference latency for real-time recommendations</li>
                  <li>Deployed production system handling 1,000+ daily requests via FastAPI backend and Streamlit interface</li>
                  <li>Implemented vectorized similarity computation optimizing memory usage and query response time</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-slate-800">Loan Approval Prediction System</h3>
                  <a href="https://loan.harshgiri.site" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 flex items-center gap-1 text-sm print:hidden">
                    <ExternalLink size={14} />
                    Live
                  </a>
                </div>
                <p className="text-slate-600 text-sm mb-2 italic">Random Forest, GridSearchCV, SHAP, SMOTE, Streamlit</p>
                <ul className="list-disc list-outside ml-5 space-y-1 text-slate-700">
                  <li>Developed explainable loan approval prediction model analyzing 10,000+ financial records</li>
                  <li>Achieved 89.3% accuracy, 0.87 F1-score, and 0.93 ROC-AUC with 21% improvement in recall metrics</li>
                  <li>Integrated SHAP explainability framework providing interpretable feature importance for regulatory compliance</li>
                  <li>Deployed interactive Streamlit application enabling real-time predictions with confidence intervals</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Advanced Data Analytics Portfolio</h3>
                <p className="text-slate-600 text-sm mb-2 italic">Python, Pandas, NumPy, Matplotlib, Seaborn, Statistical Analysis</p>
                <ul className="list-disc list-outside ml-5 space-y-1 text-slate-700">
                  <li>Created 25+ analytical programs performing exploratory analysis across finance, healthcare, and retail domains</li>
                  <li>Implemented regression, classification, and clustering algorithms with comprehensive model evaluation</li>
                  <li>Developed interactive dashboards and visualizations communicating insights to technical and non-technical stakeholders</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b-2 border-blue-600 flex items-center gap-2">
              <Database size={24} />
              Technical Skills
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold text-slate-800 mb-2">ML/AI Specializations</h3>
                <p className="text-slate-700 text-sm">Machine Learning, Recommendation Systems, Feature Engineering, Model Evaluation, Explainable AI (SHAP), Data Preprocessing, Model Deployment, Hyperparameter Optimization</p>
              </div>
              
              <div>
                <h3 className="font-bold text-slate-800 mb-2">ML/DL Frameworks</h3>
                <p className="text-slate-700 text-sm">Scikit-learn, TensorFlow, PyTorch, XGBoost, Keras</p>
              </div>
              
              <div>
                <h3 className="font-bold text-slate-800 mb-2">Data & Analytics</h3>
                <p className="text-slate-700 text-sm">Pandas, NumPy, Matplotlib, Seaborn, SQL, Data Wrangling, Statistical Analysis</p>
              </div>
              
              <div>
                <h3 className="font-bold text-slate-800 mb-2">Deployment & Tools</h3>
                <p className="text-slate-700 text-sm">Streamlit, FastAPI, Docker, Git/GitHub, Bash, Linux, Model Serving</p>
              </div>
              
              <div>
                <h3 className="font-bold text-slate-800 mb-2">Programming Languages</h3>
                <p className="text-slate-700 text-sm">Python, C++, C, SQL</p>
              </div>
              
              <div>
                <h3 className="font-bold text-slate-800 mb-2">ML Techniques</h3>
                <p className="text-slate-700 text-sm">Supervised Learning, Classification, Regression, Clustering, Dimensionality Reduction, Cross-Validation, SMOTE, GridSearchCV</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b-2 border-blue-600 flex items-center gap-2">
              <Award size={24} />
              Certifications
            </h2>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-bold text-slate-800">Oracle Certified Data Science Professional</h3>
                  <p className="text-slate-600 text-sm">Oracle Corporation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-bold text-slate-800">Oracle Certified AI Foundations Associate</h3>
                  <p className="text-slate-600 text-sm">Oracle Corporation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx>{`
        @media print {
          body {
            background: white;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:my-0 {
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          .print\\:bg-blue-600 {
            background-color: #2563eb !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          a {
            color: inherit;
            text-decoration: none;
          }
          @page {
            margin: 0.5in;
          }
        }
      `}</style>
    </div>
  );
};

export default ResumePage;