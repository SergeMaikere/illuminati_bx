import Featured from './components/featured/Featured';
import Categories from './components/categories/Categories';
import CardList from './components/cardList/CardList';
import Menu from './components/menu/Menu';
import { getAllCategories } from '../utils/Categories';
import { getEditorChoice, getPopularPosts, getRecentPosts } from '../utils/Posts';

export default async function Home() {
    const categories = await getAllCategories()
    const recents = await getRecentPosts()
    const popular = await getPopularPosts()
    const editorChoices = await getEditorChoice()
    return (
        <div>
            <Featured/>
            <Categories categories={categories}/>
            <div className=" mt-10 md:grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                    <CardList title="Articles Récents" cards={recents}/>
                </div>
                <div>
                    <Menu popular={popular} categories={categories} editor={editorChoices}/>
                </div>
            </div>
        </div>
    )
}
