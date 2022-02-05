import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const allowedDirectories = [
    '_posts',
];

export function postsDirectory(target:string = '_posts'): string {
    if ( ! allowedDirectories.includes( target ) ) {
        target = '_posts';
    }
    return join(process.cwd(), 'post_data/', target);
}

export function getPostSlugs( target: string = '' ): string[] {
    return fs.readdirSync( postsDirectory( target ) )
}

export type PostAuthor = {
    name: string,
    imageUrl: string,
}

export type PostData = {
    slug: string,
    title: string,
    content: string,
    author?: PostAuthor,
    [key: string]: any,
}

export function getPostBySlug(slug: string, fields: string[] = [], target: string = ''): PostData {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(postsDirectory( target ), `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const post: PostData = {
        slug: '',
        title: '',
        content: '',
    }

    fields.forEach((field) => {
        if (field === 'slug') {
            post[field] = realSlug
        }
        if (field === 'content') {
            post[field] = content
        }

        if (typeof data[field] !== 'undefined') {
            post[field] = data[field]
        }
    })

    return post
}

export function getAllPosts(fields: string[] = [], target: string = ''): PostData[] {
    const slugs = getPostSlugs( target )
    const posts = slugs
        .map((slug) => getPostBySlug(slug, fields, target))
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    return posts
}
