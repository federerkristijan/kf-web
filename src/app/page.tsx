import { LiveQuery } from "next-sanity/preview/live-query";
import { sanityFetch, token } from "../lib/sanity.fetch";
import { homePageQuery } from "@/lib/sanity.queries";
import PreviewProvider from "@/components/preview/PreviewProvider";
import { HeroSection } from "@/components/pages/HeroSection";
import ContactSection from "@/components/pages/ContactSection";
import ProjectsSection from "@/components/pages/ProjectsSection";
import { aboutVars, projectsTitles, projectsVars, skills } from "@/utils/variables";
import AboutPage from "@/components/pages/AboutPage";

async function getData() {
  const data = await sanityFetch(homePageQuery, token);
  return data;
}

export default async function Page() {
  const data = await getData();

  return (
    <PreviewProvider token={token || ""}>
      <LiveQuery
        query={homePageQuery}
        initialData={data}
        throwOnMissingProvider={false}
        enabled={false}
      >
        {/* Hero Section */}
        <section>
          <HeroSection
            title={data?.heroSection?.title || ""}
            subtitle={data?.heroSection?.subtitle || "Fullstack Developer"}
          />
        </section>

        {/* About Section */}
        <section>
          <AboutPage title={aboutVars.title} description={aboutVars.description} skills={skills} />
        </section>

        {/* Projects Section */}
        <section id="projects">
          <ProjectsSection
            title={projectsTitles.title}
            subtitle={projectsTitles.subtitle}
            projects={projectsVars}
          />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <ContactSection />
        </section>
      </LiveQuery>
    </PreviewProvider>
  );
}
