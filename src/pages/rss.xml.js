import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  
  return rss({
    title: 'DeeBlog',
    description: 'Tech insights, experiments, and learnings. Direct, no-bs, just useful stuff.',
    site: context.site,
    items: posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map(post => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/posts/${post.slug}/`,
      })),
    customData: `<language>en-us</language>`,
  });
}
