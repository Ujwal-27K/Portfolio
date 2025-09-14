const blog = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    excerpt:
      "Learn the best practices for structuring large React applications with proper state management and component architecture.",
    image:
      "data:image/png;base64,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",
    category: "React",
    tags: ["React", "Architecture", "Best Practices"],
    url: "https://dev.to/drruvari/building-scalable-react-applications-design-patterns-and-architecture-39a0",
  },
  {
    id: 2,
    title: "Why Developers Love WARP IDE",
    excerpt:
      "Explore the features of WARP IDE and how it boosts productivity for modern developers.",
    image:
      "https://i.ytimg.com/vi/k9BRhSbVSpI/maxresdefault.jpg",
    category: "Tools",
    tags: ["IDE", "WARP", "Productivity"],
    url: "https://www.warp.dev/blog/introducing-warp-code-prompt-to-prod",
  },
  {
    id: 3,
    title: "AI in Modern Web Development",
    excerpt:
      "Discover how AI is transforming frontend and backend development, from code generation to intelligent UI.",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*37S6zf0csN_gTjuJo-cw-Q.jpeg",
    category: "AI",
    tags: ["AI", "Web Development", "Automation"],
    url: "https://medium.com/@dev.muhammadazeem/embracing-the-future-the-rise-of-ai-in-web-development-c2a781f71059",
  },
  {
    id: 4,
    title: "LeetCode Patterns: A Guide to Efficient Problem Solving",
    excerpt:
      "Master DSA interviews by learning the most common LeetCode patterns and how to approach them.",
    image:
      "https://www.designgurus.io/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fdownload%2Fstorage%2Fv1%2Fb%2Fdesigngurus-prod.appspot.com%2Fo%2Farticle%252F64a645a15157ab559962f364%252Fimg%3A783450-ae68-811-e25-0a3e517e45f7.jpg%3Fgeneration%3D1751889720299051%26alt%3Dmedia&w=3840&q=75&dpl=dpl_HLpY1Et7vvVbof76SsVj2QVgCC39",
    category: "DSA",
    tags: ["LeetCode", "Patterns", "DSA"],
    url: "https://www.designgurus.io/blog/top-lc-patternss",
  },
  {
    id: 5,
    title: "Top Platforms to Boost Your DSA Skills",
    excerpt:
      "A curated list of the best online platforms to practice DSA and prepare for coding interviews.",
    image:
      "https://i.ytimg.com/vi/SdNA_901Z2g/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAfpwlVxRYELXZXq9FUngau0qGLyQ",
    category: "DSA",
    tags: ["DSA", "Practice", "Platforms"],
    url: "https://dev.to/naime_molla/top-10-free-resources-to-learn-data-structures-and-algorithms-in-2024-4i4j",
  },
  {
    id: 6   ,
    title: "JobCode.in: The Hidden Gem for Job Seekers",
    excerpt:
      "JobCode.in offers curated job listings and resources tailored for Indian tech professionals. Find out why it's a must-use platform for job seekers!",
    image:
      "data:image/png;base64,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",
    category: "Career",
    tags: ["Jobs", "JobCode.in", "India", "Career"],
    url: "https://jobcode.in",
  },
];
export default blog;
