import { articles } from '@/lib/content'

export default function ArticleList({ headingLevel = 3 }: { headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3'
  return (
    <ol className="article-list">
      {articles.map((article) => (
        <li key={article.href}>
          <time dateTime={article.date}>{article.displayDate}</time>
          <div>
            <Heading><a href={article.href}>{article.title}</a></Heading>
            <p>{article.description}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
