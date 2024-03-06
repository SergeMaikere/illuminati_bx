import Pagination from '../pagination/Pagination';
import RecentCard from '../recentCard/RecentCard';
import { getRecents } from '../../utils/getRecents';

const CardList = (props) => {

    return (
        <div className="mt-10 pb-12">
            <h2 className="text-4xl font-serif">Articles Récents</h2>
            {props.cards.map( 
                obj => <RecentCard 
                    date={obj.date} 
                    category={obj.category} 
                    title={obj.title} 
                    subtitle={obj.subtitle}
                    description={obj.description} 
                    imgSrc={obj.imgSrc} 
                    imgAlt={obj.imgAlt}
                />
            )}
            <Pagination/>
        </div>
    );
};

export default CardList;
