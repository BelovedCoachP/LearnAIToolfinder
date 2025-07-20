// Educational AI Tool Navigator Data
const educationalToolNodes = {
  start: {
    title: "Find Your Perfect Educational AI Tools",
    description: "Choose your educational goal to discover AI tools that will transform your teaching and learning experience:",
    options: [
      { text: "📝 Create Learning Objectives & Curriculum", node: "objectives", icon: "📝" },
      { text: "📚 Develop Course Content & Modules", node: "content", icon: "📚" },
      { text: "🎨 Design Presentations & Visual Materials", node: "presentations", icon: "🎨" },
      { text: "📊 Create Assessments & Rubrics", node: "assessments", icon: "📊" },
      { text: "🔍 Research & OER Content Creation", node: "research", icon: "🔍" },
      { text: "🎬 Produce Educational Videos", node: "videos", icon: "🎬" },
      { text: "🤖 General AI Writing & Brainstorming", node: "general_ai", icon: "🤖" }
    ]
  },

  objectives: {
    title: "Learning Objectives & Curriculum Development",
    description: "AI tools to help create clear, measurable learning objectives and structure your curriculum:",
    tools: [
      { 
        name: "ChatGPT 4o mini (free)", 
        description: "Perfect for brainstorming learning objectives, creating Bloom's taxonomy-based outcomes, and structuring curriculum frameworks",
        category: "Generative AI",
        link: "https://chat.openai.com/",
        tasks: ["Learning objectives", "Curriculum planning", "Competency mapping"]
      },
      { 
        name: "Claude.AI", 
        description: "Excellent for analyzing curriculum standards, creating detailed course outlines, and ensuring alignment between objectives and assessments",
        category: "Generative AI",
        link: "https://claude.ai/",
        tasks: ["Standards alignment", "Course structure", "Assessment planning"]
      },
      { 
        name: "Copilot", 
        description: "Integrated with Microsoft Office - great for creating curriculum documents, lesson plans, and objective matrices in Word and Excel",
        category: "Generative AI",
        link: "https://copilot.microsoft.com/",
        tasks: ["Document creation", "Template generation", "Collaboration"]
      },
      { 
        name: "Perplexity", 
        description: "Research current educational standards, best practices in curriculum design, and find examples from other institutions",
        category: "Generative AI",
        link: "https://www.perplexity.ai/",
        tasks: ["Standards research", "Best practices", "Benchmarking"]
      }
    ],
    options: [
      { text: "🏠 Back to Main Menu", node: "start" },
      { text: "📚 Explore Content Creation", node: "content" }
    ]
  },

  content: {
    title: "Course Content & Module Development",
    description: "Create engaging course materials, modules, and educational content:",
    tools: [
      { 
        name: "ChatGPT 4o mini (free)", 
        description: "Generate module outlines, create explanatory content, develop activities, and write discussion prompts for any subject",
        category: "Generative AI",
        link: "https://chat.openai.com/",
        tasks: ["Module outlines", "Activity creation", "Content writing"]
      },
      { 
        name: "Claude.AI", 
        description: "Excellent for creating structured learning materials, breaking down complex topics, and ensuring logical content flow",
        category: "Generative AI",
        link: "https://claude.ai/",
        tasks: ["Content structuring", "Topic breakdown", "Learning sequences"]
      },
      { 
        name: "Gemini", 
        description: "Great for multimodal content creation - combine text with images, create interactive examples, and generate diverse content formats",
        category: "Generative AI",
        link: "https://gemini.google.com/",
        tasks: ["Multimodal content", "Interactive examples", "Format variety"]
      },
      { 
        name: "Mistral", 
        description: "Open-source option for generating educational content with strong reasoning capabilities for technical subjects",
        category: "Generative AI",
        link: "https://mistral.ai/",
        tasks: ["Technical content", "STEM materials", "Detailed explanations"]
      }
    ],
    options: [
      { text: "🏠 Back to Main Menu", node: "start" },
      { text: "🎨 Create Presentations", node: "presentations" }
    ]
  },

  presentations: {
    title: "Educational Presentations & Visual Materials",
    description: "Design engaging presentations and visual learning materials:",
    tools: [
      { 
        name: "Gamma App", 
        description: "AI-powered presentation creator perfect for educational content - automatically designs professional slides from your content outline",
        category: "Presentations",
        link: "https://gamma.app/",
        tasks: ["Auto-design slides", "Educational templates", "Interactive content"]
      },
      { 
        name: "Beautiful AI", 
        description: "Smart design-focused presentation tool that ensures your educational content looks professional and engaging",
        category: "Presentations",
        link: "https://www.beautiful.ai/",
        tasks: ["Professional design", "Template library", "Brand consistency"]
      },
      { 
        name: "Pitch", 
        description: "Collaborative platform perfect for team-created educational presentations with real-time editing and feedback",
        category: "Presentations",
        link: "https://pitch.com/",
        tasks: ["Team collaboration", "Real-time editing", "Feedback integration"]
      },
      { 
        name: "Tome", 
        description: "Narrative-driven presentation format ideal for storytelling in education and creating engaging learning experiences",
        category: "Presentations",
        link: "https://tome.app/",
        tasks: ["Storytelling", "Narrative structure", "Interactive elements"]
      },
      { 
        name: "SlidesAI", 
        description: "Generate complete presentations from just a topic or outline - perfect for quick lecture creation",
        category: "Presentations",
        link: "https://www.slidesai.io/",
        tasks: ["Quick generation", "Topic-based creation", "Outline expansion"]
      },
      { 
        name: "Canva", 
        description: "Create educational posters, infographics, and visual aids with AI-powered design suggestions and educational templates",
        category: "Presentations",
        link: "https://www.canva.com/",
        tasks: ["Infographics", "Educational posters", "Visual aids"]
      }
    ],
    options: [
      { text: "🏠 Back to Main Menu", node: "start" },
      { text: "📊 Create Assessments", node: "assessments" }
    ]
  },

  assessments: {
    title: "Assessments & Rubrics Creation",
    description: "Design fair, comprehensive assessments and detailed rubrics:",
    tools: [
      { 
        name: "ChatGPT 4o mini (free)", 
        description: "Create quiz questions, exam prompts, rubrics, and assessment criteria aligned with your learning objectives",
        category: "Generative AI",
        link: "https://chat.openai.com/",
        tasks: ["Quiz generation", "Rubric creation", "Assessment alignment"]
      },
      { 
        name: "Claude.AI", 
        description: "Excellent for creating detailed rubrics, assessment matrices, and ensuring fair evaluation criteria across different skill levels",
        category: "Generative AI",
        link: "https://claude.ai/",
        tasks: ["Detailed rubrics", "Fair criteria", "Skill-level alignment"]
      },
      { 
        name: "Copilot", 
        description: "Generate assessment documents in Word, create grade tracking sheets in Excel, and develop comprehensive evaluation frameworks",
        category: "Generative AI",
        link: "https://copilot.microsoft.com/",
        tasks: ["Document creation", "Grade tracking", "Framework development"]
      },
      { 
        name: "Gemini", 
        description: "Create diverse question types, including visual assessments, and generate multiple assessment versions for academic integrity",
        category: "Generative AI",
        link: "https://gemini.google.com/",
        tasks: ["Question variety", "Visual assessments", "Multiple versions"]
      }
    ],
    options: [
      { text: "🏠 Back to Main Menu", node: "start" },
      { text: "🔍 Research Tools", node: "research" }
    ]
  },

  research: {
    title: "Research & OER Content Creation",
    description: "Find reliable sources, create OER materials, and conduct educational research:",
    tools: [
      { 
        name: "Perplexity", 
        description: "AI-powered search with real-time sources - perfect for finding current research, statistics, and credible information for your content",
        category: "Generative AI",
        link: "https://www.perplexity.ai/",
        tasks: ["Current research", "Source verification", "Fact-checking"]
      },
      { 
        name: "You.com", 
        description: "Search engine with built-in AI chat - great for research while creating content, finding OER materials, and academic resources",
        category: "Generative AI",
        link: "https://you.com/",
        tasks: ["Academic search", "OER discovery", "Resource compilation"]
      },
      { 
        name: "Claude.AI", 
        description: "Analyze research papers, synthesize information from multiple sources, and create comprehensive literature reviews",
        category: "Generative AI",
        link: "https://claude.ai/",
        tasks: ["Paper analysis", "Information synthesis", "Literature reviews"]
      },
      { 
        name: "Gemini", 
        description: "Research across multiple formats, analyze images and documents, and create multimedia OER content",
        category: "Generative AI",
        link: "https://gemini.google.com/",
        tasks: ["Multimedia research", "Document analysis", "OER creation"]
      }
    ],
    options: [
      { text: "🏠 Back to Main Menu", node: "start" },
      { text: "🎬 Create Videos", node: "videos" }
    ]
  },

  videos: {
    title: "Educational Video Production",
    description: "Create engaging educational videos and multimedia content:",
    tools: [
      { 
        name: "Visla", 
        description: "AI-powered video editing and creation platform perfect for educational content with automated editing features",
        category: "Video Creation",
        link: "https://www.visla.us/",
        tasks: ["Auto editing", "Educational templates", "Content repurposing"]
      },
      { 
        name: "Pika", 
        description: "Generate realistic educational videos from text prompts - great for creating visual explanations and demonstrations",
        category: "Video Creation",
        link: "https://pika.art/",
        tasks: ["Text-to-video", "Visual explanations", "Concept demonstrations"]
      },
      { 
        name: "InVideo", 
        description: "Templates and AI editing specifically designed for educational and training videos with easy customization",
        category: "Video Creation",
        link: "https://invideo.io/",
        tasks: ["Educational templates", "Training videos", "Easy customization"]
      },
      { 
        name: "Synthesia", 
        description: "Create videos with AI presenters - perfect for consistent educational content delivery and multilingual materials",
        category: "Video Creation",
        link: "https://www.synthesia.io/",
        tasks: ["AI presenters", "Consistent delivery", "Multilingual content"]
      },
      { 
        name: "HeyGen", 
        description: "AI avatar creation for educational videos - great for personalized instruction and engaging student presentations",
        category: "Video Creation",
        link: "https://www.heygen.com/",
        tasks: ["Avatar creation", "Personalized instruction", "Student engagement"]
      }
    ],
    options: [
      { text: "🏠 Back to Main Menu", node: "start" },
      { text: "🤖 General AI Tools", node: "general_ai" }
    ]
  },

  general_ai: {
    title: "General AI Platforms for Education",
    description: "Versatile AI tools for various educational tasks and creative projects:",
    tools: [
      { 
        name: "ChatGPT 4o mini (free)", 
        description: "The most versatile educational AI - perfect for lesson planning, content creation, student support, and administrative tasks",
        category: "Generative AI",
        link: "https://chat.openai.com/",
        tasks: ["Lesson planning", "Student support", "Content creation", "Admin tasks"]
      },
      { 
        name: "Claude.AI", 
        description: "Excellent reasoning and analysis - great for complex educational challenges, policy development, and detailed content review",
        category: "Generative AI",
        link: "https://claude.ai/",
        tasks: ["Complex analysis", "Policy development", "Content review"]
      },
      { 
        name: "Copilot", 
        description: "Seamlessly integrated with Microsoft Office tools - essential for educators using Word, PowerPoint, Excel, and Teams",
        category: "Generative AI",
        link: "https://copilot.microsoft.com/",
        tasks: ["Office integration", "Document creation", "Team collaboration"]
      },
      { 
        name: "Gemini", 
        description: "Google's multimodal AI - perfect for Google Workspace users, handling text, images, and integration with Drive and Classroom",
        category: "Generative AI",
        link: "https://gemini.google.com/",
        tasks: ["Google integration", "Multimodal tasks", "Classroom management"]
      },
      { 
        name: "Poe", 
        description: "Access multiple AI models in one platform - great for comparing outputs and finding the best AI for specific educational tasks",
        category: "Generative AI",
        link: "https://poe.com/",
        tasks: ["Model comparison", "Diverse perspectives", "Task optimization"]
      }
    ],
    options: [
      { text: "🏠 Back to Main Menu", node: "start" }
    ]
  }
};
