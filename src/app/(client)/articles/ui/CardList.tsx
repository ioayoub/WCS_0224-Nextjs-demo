import {ArticleType} from "@/lib/definitions";

export default function CardList({ articles } : { articles : ArticleType[]}) {
  
  
  return (
    
    <div className="flex flex-col">
      {articles.map((a: ArticleType) => (
        <span key={a.id}>{a.name}</span>
      )) }
      
    </div>
  )
  
}