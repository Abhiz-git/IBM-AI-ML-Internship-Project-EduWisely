import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const domain = await getCollection("domain");
  const subjects = await getCollection("subjects");
  return rss({
    title: "EduWisely",
    description:
      "A website to provide free guidance and resources on various subjects!",
    site: context.site,
    stylesheet: "/rss/styles.xsl",
    items: [
      ...domain.map((d) => ({
        title: d.data.title,
        description: d.data.description,
        pubDate: new Date(),
        link: `/domain/${d.slug}`,
      })),
      ...subjects.map((sub) => ({
        title: sub.data.title,
        description: sub.data.description,
        pubDate: new Date(),
        link: `/subjects/${sub.slug}`,
      })),
    ],
  });
}
