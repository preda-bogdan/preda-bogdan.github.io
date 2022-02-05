import html from 'remark-html'
import { remark } from 'remark';
import { VFile } from 'vfile';

export default async function markdownToHTML( markdown: VFile ) {
    const result = await remark().use(html).process(markdown)
    return result.toString()
}