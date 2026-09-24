export const projects = [
  {
    id: "pulsefit",
    title: "PulseFit",
    subtitle: "AI-Powered Fitness Monitoring Application",
    badge: "Graduation Project",
    technologies: ["YOLO11-pose", "AI", "Computer Vision", "LLM", "Python"],
    description: "AI-powered fitness and nutrition application focused on workout monitoring and personalized recommendations.",
    highlights: [
      "Real-time pose estimation",
      "Exercise tracking",
      "Form evaluation",
      "95%+ body keypoint detection accuracy",
      "Angle-based heuristics",
      "Personalized workout generation",
      "Progressive overload",
      "Volume tracking",
      "Deload mechanics",
      "ACSM guidelines",
      "Food logging",
      "Fuzzy search",
      "LLM fallback for missing food items"
    ],
    architecture: `User\n↓\nCamera Feed\n↓\nYOLO11 Pose Estimation\n↓\nKeypoint & Angle Analysis\n↓\nForm Evaluation & Rep Counting\n↓\nPersonalized LLM Recommendations`,
    github: "#"
  },
  {
    id: "agentic-rag-retail",
    title: "Agentic RAG Retail Analytics System",
    technologies: ["YOLO", "Llama-3", "LangChain", "LightGBM", "Qdrant", "OpenCV", "Hugging Face Embeddings"],
    description: "An AI-powered retail analytics system that allows store managers to query customer behavior, analytics, documentation, and sales forecasts using natural language.",
    highlights: [
      "Customer tracking",
      "Zone occupancy",
      "Dwell time",
      "Visitor counts",
      "Heatmaps",
      "Live analytics API",
      "LangChain tool-calling agent",
      "Qdrant",
      "LightGBM forecasting",
      "Prompt injection guardrails",
      "LangSmith tracing"
    ],
    architecture: `Camera\n↓\nYOLO Customer Tracking\n↓\nAnalytics Engine\n↓\nAgent\n↙ ↓ ↘\nCV Analytics | RAG | Sales Forecasting\n↓\nNatural Language Answer`,
    github: "#"
  },
  {
    id: "kyc",
    title: "Automated KYC Onboarding System",
    technologies: ["LangGraph", "YOLO11", "PaddleOCR", "InsightFace", "MediaPipe", "FastAPI", "PostgreSQL"],
    description: "End-to-end identity verification system using an Egyptian National ID and live selfie.",
    highlights: [
      "Computer vision",
      "OCR",
      "Face verification",
      "Liveness detection",
      "LLM-based data cleaning",
      "LangGraph orchestration",
      "FastAPI",
      "PostgreSQL"
    ],
    architecture: `User\n↓\nFastAPI\n↓\nLangGraph\n↓\nDocument Detection\n↓\nOCR\n↓\nData Cleaning\n↓\nLiveness + Face Match\n↓\nDecision (Approve / Manual Review / Reject)`,
    github: "#"
  },
  {
    id: "social-media",
    title: "AI-Powered Social Media Publishing System",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Supabase", "SQLAlchemy", "Alembic", "Groq", "APScheduler", "OAuth 2.0"],
    description: "Automated content generation and publishing system for social media platforms with advanced scheduling and OAuth 2.0 integration.",
    highlights: [
      "Automated content generation",
      "Platform-specific captions",
      "Automated scheduling",
      "LinkedIn API",
      "OAuth 2.0",
      "CSRF protection",
      "AES-GCM token encryption",
      "HMAC webhooks",
      "SQLAlchemy",
      "Alembic",
      "Adapter-based publishing",
      "Retry / exponential backoff"
    ],
    architecture: `User\n↓\nFastAPI\n↓\nContent Generation (Groq)\n↓\nScheduler (APScheduler)\n↓\nPlatform Adapter\n↓\nLinkedIn API`,
    github: "#"
  }
];
