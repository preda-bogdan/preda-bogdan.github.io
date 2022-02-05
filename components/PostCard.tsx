import Link from "next/link";
import Image from "next/image";
import { PostData } from "../lib/markdown/posts";

type PostCardProps = {
    post: PostData
}

export default function PostCard( {post}: PostCardProps ) {
    const { slug, author, coverImage, coverAlt, date, excerpt, title, readingTime } = post;
    console.log( slug );
    return (
        <Link href={`/posts/${slug}`} key={slug}>
            <a>
                <article className="relative flex flex-col rounded-3xl shadow hover:shadow-lg overflow-hidden group">
                    {/* Card Featured Image */}
                    <Image className="h-48 w-full object-cover grayscale hover:grayscale-0 ease-in-out duration-300" width={420} height={420} alt={coverAlt} src={coverImage.img} blurDataURL={coverImage.base64} placeholder={'blur'} />
                    {/* Card Overlay */}
                    <div className="h-48 w-full bg-slate-100 dark:bg-gray-900 absolute inset-x-0 bottom-0 z-1 rounded-tl-3xl translate-y-1/2 ease-in-out duration-200 group-hover:translate-y-0">
                        {/* Card Header */}
                        <div className="relative flex items-center gap-2 p-4 bg-slate-100 dark:bg-gray-900 rounded-tl-3xl">
                            { author && author.imageUrl && <Image width={50} height={50} src={author.imageUrl} alt={`Author: ${author.name}`} className="h-10 w-10 absolute rounded-full object-cover" />}
                            <div className="ml-1">
                                <h3 className="text-xl dark:text-white group-hover:text-violet-400">{title}</h3>
                                <span className="text-sm text-gray-500 dark:text-gray-100">
                                    { author && (
                                        <>
                                            <span className="text-sm font-medium text-gray-900 dark:text-white">{author.name}</span>
                                            <span className="mx-1" aria-hidden="true">&#124;</span>
                                        </>
                                    ) }
                                    <time dateTime={date}>{date}</time>
                                    <span className="mx-1" aria-hidden="true">&middot;</span>
                                    <span>{`${readingTime}min read`}</span>
                                </span>
                            </div>
                        </div>
                        <p className="text-sm px-4 overflow-hidden text-gray-900 dark:text-white">{excerpt}</p>
                        <span className="h-12 text-sm bg-gradient-to-b from-slate-100/75 to-slate-100 dark:from-gray-900/75 dark:to-gray-900 absolute z-2 inset-x-0 bottom-0 px-4 py-2 pt-6 text-indigo-500 text-right">
                            &gt; read more? (Y/n)
                            <span className="ml-1 animate-cursor-blink">_</span>
                        </span>
                    </div>
                </article>
            </a>
        </Link>
    );
}