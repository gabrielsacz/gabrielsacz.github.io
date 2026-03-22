import Link from 'next/link'
import { getPostBySlug, getAllPostSlugs } from '@/lib/posts'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  return {
    title: `${post.title} | Gabriel Sanchez`,
    description: post.description,
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  return (
    <main className="min-h-screen bg-background">
      <article className="mx-auto max-w-2xl px-6 py-16">
        {/* Back Link */}
        <Link 
          href="/"
          className="mb-12 inline-flex items-center gap-2 font-serif text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <span aria-hidden="true">&larr;</span>
          Back
        </Link>

        {/* Post Header */}
        <header className="mb-12 mt-8">
          <time className="font-mono text-sm text-muted-foreground">
            {formatDate(post.date)}
          </time>
          <h1 className="mt-2 font-serif text-4xl font-normal tracking-tight text-foreground text-balance">
            {post.title}
          </h1>
        </header>

        {/* Post Content */}
        <div 
          className="prose prose-neutral prose-lg max-w-none font-serif prose-headings:font-serif prose-headings:font-normal prose-p:leading-relaxed prose-a:text-foreground prose-a:underline prose-a:underline-offset-4 prose-code:font-mono prose-code:text-sm prose-pre:bg-muted prose-pre:font-mono"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </main>
  )
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
