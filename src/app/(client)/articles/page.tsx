import CardList from "@/app/(client)/articles/ui/CardList";
import {ArticleForm} from "@/app/(client)/articles/ui/ArticleForm";
import {createArticle} from "@/app/actions/articles/articleActions";

export default async function Page() {
  
  const data = await fetch("https://e42d77185b1515.lhr.life/api/articles ")
  const articles = await data.json()
  
  const handleSubmit = async (prevState: { success: boolean }, formData: FormData) => {
    "use server"
    
    const name = formData.get("name")
    const description = formData.get("description")
    const category = formData.get("category")
    const price = Number(formData.get("price"))
    const picture = formData.get("picture")
    const picture_resized = formData.get("picture_resized")
    const isHomepage = formData.get("isHomepage")
    const isFeatured = formData.get("isFeatured")
    const rating = 5;
    
    const featured = isFeatured === "on"
    const homepage = isHomepage === "on"
    
    
    await createArticle({name, description, category, price, featured, homepage, picture, picture_resized, rating})
  }
  
  
  return (
    <>
      <h1>Articles page</h1>
      <CardList articles={articles}/>
      <ArticleForm handleSubmit={handleSubmit}/>
    </>
  )
}