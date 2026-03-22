import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function Home() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-6 py-16">
        {/* Header */}
        <header className="mb-12">
          <h1 className="font-serif text-4xl font-normal tracking-tight text-foreground">
            Gabriel Sanchez
          </h1>
        </header>

        {/* About Section */}
        <section className="mb-16">
          <p className="font-serif text-lg leading-relaxed text-muted-foreground">
            Mathematician and software engineer exploring the elegant connections 
            between abstract theory and practical computation. Writing about mathematics, 
            algorithms, and the art of problem-solving.
          </p>
        </section>

        {/* Posts Section */}
        <section>
          <h2 className="mb-8 font-serif text-sm font-normal uppercase tracking-widest text-muted-foreground">
            Writing
          </h2>
          
          <ul className="space-y-8">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link 
                  href={`/posts/${post.slug}`}
                  className="group block"
                >
                  <article>
                    <time className="font-mono text-sm text-muted-foreground">
                      {formatDate(post.date)}
                    </time>
                    <h3 className="mt-1 font-serif text-xl font-normal text-foreground transition-colors group-hover:text-muted-foreground">
                      {post.title}
                    </h3>
                    <p className="mt-2 font-serif text-base leading-relaxed text-muted-foreground">
                      {post.description}
                    </p>
                  </article>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
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
