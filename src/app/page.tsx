import Featured from './components/featured/Featured';
import Categories from './components/categories/Categories';
import CardList from './components/cardList/CardList';
import Menu from './components/menu/Menu';
import { getRecents } from './utils/getRecents';
import { getAllCategories } from './utils/Categories';

export default async function Home() {
    const categories = await getAllCategories()
    return (
        <div>
            <Featured/>
            <Categories categories={categories}/>
            <div className=" mt-10 md:grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="md:col-span-2"><CardList title="Articles Récents" cards={getRecents()}/></div>
                <div><Menu/></div>
            </div>
        </div>
    )
}
