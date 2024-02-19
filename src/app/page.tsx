import Featured from './components/featured/Featured';
import Categories from './components/categories/Categories';
import CardList from './components/cardList/CardList';
import Menu from './components/menu/Menu';

export default function Home() {
    return (
        <div className="bg-teal-300">
            <Featured/>
            <Categories/>
            <div className="flex flex-col md:flex-row">
                <CardList/>
                <Menu/>
            </div>
        </div>
    )
}
