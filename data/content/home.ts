type Skill = {
  title: string,
  icon: string,
  style?: object
};
type Testimonial = {
  quote: string,
  name: string,
  job: string
};


export const skills: Skill[] = [
  {
    title: "NodeJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    title: "Typescript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    title: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    title: "CircleCi",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain-wordmark.svg",
  },
  {
    title: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    title: "NestJs",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg",
  },
  {
    title: "Elixir",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg",
  },
  {
    title: "Terraform",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
  },
  {
    title: "AWS",
    icon: "https://cdn.cdnlogo.com/logos/a/19/aws.svg",
  },
  {
    title: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    title: "NextJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    style: { filter: "invert(1)" },
  },
  {
    title: "Javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Rohit seems to thrive well if given tasks that will challenge him intellectually, in terms of presenting new types of problems to solve and/or working on technology stacks that are unfamiliar and offer a chance to learn new things." +
      "Rohit is a passionate engineer with a keen eye for improving our pipelines, often taking things on based on his own research and initiative,",
    name: "Ross Anthony",
    job: "Staff Software Engineer - Rocket Mortgage Application",
  },{
    quote:
      "Rohit provided a simple solution to an often complex problem, saving us valuable time researching, and trial & error cycles. Thanks Rohit!",
    name: "James McKain",
    job: "Senior Software Engineer, Infrastructure Stability",
  },
  {
    quote:
      "Taking something ambiguous and turning it into a reality - that is something that you did with this POC and proved it to all that not only it is possible but it is setup to be fast, efficient and futuristic. Your creativity, hard work and grit are the reason why we are where we are at!",
    name: "Manali Sapre",
    job: "Senior Director, Engineering, Rocket Mortgage Application",
  },
];
