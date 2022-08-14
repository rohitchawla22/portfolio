import { kebabCase } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "AWS Cost Reduction",
    desc: "Took an initiative to identify on how we can reduce our AWS bill and things to keep in mind when deploying and managing existing logical resource on AWS.",
    img: "/static/projects/aws_cost.png",
    link: "https://git.rockfin.com/RocketMortgage/rocket-api/pull/3833",
    github: "https://git.rockfin.com/RocketMortgage/rocket-api/pull/3833",
    tags: ["AWS", "Terraform"],
  },
  {
    id: 1,
    title: "K6-Automation",
    desc: "Run Performance test for Rocket Mortgage Application and preserving results in Dynatrace.",
    img: "/static/projects/loadTest.png",
    link: "https://git.rockfin.com/RocketMortgage/rocket-api/pull/3833",
    github: "https://git.rockfin.com/RocketMortgage/rocket-api/pull/3833",
    tags: ["K6", "Typescript", "Automation", "Mountebank", "AWS", "Dynatrace"],
  },
  {
    id: 2,
    title: "Rocket Rewards POC",
    desc: "Developed a POC during hack-week using MFE and Module Federation",
    img: "/static/projects/rewards.png",
    github: "https://git.rockfin.com/Rocket-Rewards/rewards-mfe",
    tags: ["Module Federation", "Typescript", "React", "MFE", "AWS"],
  },
  {
    id: 3,
    title: "Reusable Web Component - POC",
    desc: "Developed a POC using StencilJs and integrated it into Truebill and Rocket Mortgage Applications",
    img: "/static/projects/stenciljs.png",
    github: "https://git.rockfin.com/RocketMortgage/purchase-nurturing-components",
    tags: ["Typescript", "StencilJs", "AWS"],
  },
  {
    id: 4,
    title: "Dynatrace for RMA",
    desc: "Setting up Dynatrace for Applications living in Rocket Mortgage Application space.",
    img: "/static/projects/dynatrace.png",
    link: "https://iwh55523.live.dynatrace.com/#dashboard;id=ebe4a12f-562e-4197-9a25-e6a50ca02d73;gf=6939532875019878207;gtf=-24h%20to%20now",
    tags: ["Dynatrace", "Terraform", "Infrastructure", "Metrics"],
  },
  {
    id: 5,
    title: "RMA AMEX Integration",
    desc: "Tech Lead for the AMEX deliverable for the project overall for RMA FE Applications.",
    img: "/static/projects/amex.png",
    link: "",
    github: "",
    tags: ["Angular", "Typescript", "React"],
  },
  {
    id: 6,
    title: "Changelog For RMA API",
    desc: "Developed Circle CI automation to automate git release as well as Changelog for every release.",
    img: "/static/projects/changelog.png",
    github: "https://rmaapiv2-docs.rocketmortgage.com/CHANGELOG.html",
    tags: ["shell", "git", "circle", "yaml"],
  },
  {
    id: 7,
    title: "SME for Multiple apps",
    desc: "Acting SME for multiple application within RMA and in FOC. List of apps provided in tags",
    img: "/static/projects/git.png",
    link: "https://git.rockfin.com/RocketMortgage",
    github: "https://git.rockfin.com/RocketMortgage",
    tags: ["RMA API", "Privacy By Design Lambda", "Cherwell Ticket Automater", "Dashboard"],
  },
  {
    id: 8,
    title: "SME for Mobile API's",
    desc: "Developed several features like Esign Digital Signature, Message Board to name a few in Mobile API that supports 1.6 million users of Rocket Mortgage Mobile app.",
    img: "/static/projects/mobile.png",
    link: "https://git.rockfin.com/mobile/api-common",
    github: "https://git.rockfin.com/mobile/api-common",
    tags: ["PHP", "HateOS", "Docker"],
  },
  {
    id: 7,
    title: "RICK",
    desc: "Elixir Application to automatically create Cherwell request from TFS and update it without any manual intervention .",
    img: "/static/projects/rick.png",
    link: "https://git.rockfin.com/AutomateCR/Rick",
    github: "https://git.rockfin.com/AutomateCR/Rick",
    tags: ["Elixir", "Cherwell", "TFS", "Docker"],
  },
  {
    id: 8,
    title: "Circle 2.1 upgrade",
    desc: "Drove the initiative of upgrading RMA pipelines to circle v2.1 and also transferring knowledge about orbs.",
    img: "",
    link: "https://app.circleci.foc.zone/pipelines/github/RocketMortgage?filter=mine",
    tags: ["Circle CI", "Infrastructure", "yaml"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects
