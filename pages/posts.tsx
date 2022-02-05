import Archive, { ArchiveData } from "../components/layout/Archive";
import { estimateReadingTime } from "../common/utils";
import { getAllPosts } from "../lib/markdown/posts";
import { getPlaiceholder } from "plaiceholder";

export default function Posts({posts}: ArchiveData) {
    return <Archive posts={posts} archiveName="Posts" />
}

export async function getStaticProps() {
    const posts = getAllPosts(['slug', 'excerpt', 'title', 'coverImage', 'author', 'date', 'coverAlt', 'content'])


    const data = await Promise.all(posts.map(async (postData) => {
        const { base64, img } = await getPlaiceholder(postData.coverImage);
        return {
            ...postData,
            coverImage: { base64, img },
            readingTime: estimateReadingTime(postData.content)
        }
    }));

    return { props: { posts: data } }
}