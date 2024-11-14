export interface AITool {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  url: string;
  image: string;
  isPaid: boolean;
}

export const categories = [
  "Large Language Models",
  "Image Generation",
  "Audio & Speech",
  "Video Creation",
  "Code Assistance",
  "Productivity",
  "Research Tools",
] as const;

export const tools: AITool[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    description:
      "Advanced language model for conversation and content generation",
    category: "Large Language Models",
    tags: ["conversation", "writing", "analysis"],
    url: "https://chat.openai.com",
    image:
      "https://images.unsplash.com/photo-1705001091400-4348f2aad6b6?q=80&w=200&h=200&auto=format&fit=crop",
    isPaid: true,
  },
  {
    id: "midjourney",
    name: "Midjourney",
    description: "AI art and image generation through natural language prompts",
    category: "Image Generation",
    tags: ["art", "design", "creativity"],
    url: "https://midjourney.com",
    image:
      "https://images.unsplash.com/photo-1703819796773-ee27caa7f067?q=80&w=200&h=200&auto=format&fit=crop",
    isPaid: true,
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    description: "AI pair programmer that helps you write better code faster",
    category: "Code Assistance",
    tags: ["programming", "development", "productivity"],
    url: "https://github.com/features/copilot",
    image:
      "https://images.unsplash.com/photo-1705001091400-4348f2aad6b6?q=80&w=200&h=200&auto=format&fit=crop",
    isPaid: true,
  },
  {
    id: "rask-ai",
    name: "Rask AI",
    description: "大规模智能视频定位",
    category: "Video Creation",
    tags: ["video", "audio", "speech", "translate"],
    url: "https://zh.rask.ai/",
    image:
      "https://rask.ai/cdn-cgi/image/width=960,format=auto,fit=scale-down/https://cdn.prod.website-files.com/63ab2ba4785d7f058efab318/642973bc6c28f475e0f8c538_rask-logo-black.svg",
    isPaid: true,
  },
  {
    id: "vidu-studio",
    name: "Vidu Studio",
    description: "Vidu，让想象发生。Vidu 是全球领先的AI内容生产平台",
    category: "Video Creation",
    tags: ["video", "picture", "text"],
    url: "https://www.vidu.studio/zh",
    image: "https://www.vidu.studio/logo.svg",
    isPaid: true,
  },
];
