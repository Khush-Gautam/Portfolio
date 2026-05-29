type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    p: string;
    h2: string;
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Khush Gautam — 3D Portfolio",
    fullName: "Khush Gautam",
    email: "khushgautam18@gmail.com",
  },

  hero: {
    name: "Khush Gautam",
    p: [
      "Frontend Developer • Problem Solver",
      "Startup Enthusiast • Team Leader • Builder"
    ],
  },

  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: {
        span: "Your Email",
        placeholder: "What's your email?",
      },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },

  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a frontend developer passionate about building modern, responsive,
      and interactive web applications. I specialize in React, JavaScript,
      and UI development. I enjoy leading teams in hackathons, exploring
      startup ideas, and solving real-world problems through code.`,
    },

    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },

    works: {
      p: "My work",
      h2: "Projects.",
      content: `These projects showcase my frontend development skills, API integration,
      and UI/UX design abilities. Each project demonstrates my ability to build
      real-world applications and work with modern web technologies.`,
    },
  },
};