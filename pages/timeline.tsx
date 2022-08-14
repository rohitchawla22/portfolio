import Heading from "@/components/timeline/Heading";
import More from "@/components/timeline/More";
import Page from "components/utility/Page";
import Projects from "@/components/timeline/Timeline";
import React from "react";

function timeline() {
  return (
    <Page
      currentPage="Timeline"
      meta={{ desc: "I'm an avid self-taught designer too! I publish all my web and creative timeline on Dribbble also." }}
    >
      <Heading />
      <Projects />
      <More />
    </Page>
  );
}

export default timeline;
