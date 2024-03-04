import Pagination from '../pagination/Pagination';
import Card from '../card/Card';
import { getRecents } from '../../utils/getRecents';

const CardList = ({ className }) => {

    return (
        <div className="mt-10 pb-12 sm:pb-24 border-b border-gray-300">
            <h2 className="text-4xl font-serif">Articles Récents</h2>
            {getRecents().map( 
                obj => <Card 
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
