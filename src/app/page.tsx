import Featured from './components/featured/Featured';
import Categories from './components/categories/Categories';
import CardList from './components/cardList/CardList';
import Menu from './components/menu/Menu';

export default function Home() {
    return (
        <div>
            <Featured/>
            <Categories/>
            <div className=" mt-10 flex flex-col md:flex-row">
                <CardList/>
                <Menu/>
            </div>
        </div>
    )
}
