"use client"
import Pagination from '../pagination/Pagination';
import RecentCard from '../recentCard/RecentCard';
import { getRecents } from '../../utils/getRecents';
import { splicer, voyeur } from '../../utils/Helper';
import { useContext } from 'react';
import { PaginationContext } from '../../../context/PaginationContext';

const CardList = (props) => {

    const [ state ] = useContext( PaginationContext )
    const cards = splicer(props.cards, 1)
    voyeur(cards)
    return (
        <div className="mt-10 pb-12 px-3">
            <h2 className="text-4xl font-serif m-4">{props.title}</h2>
            {cards[state].map( 
                obj => <RecentCard 
                    key={obj.id}
                    id={obj.id}
                    date={obj.date} 
                    category={obj.category} 
                    title={obj.title} 
                    subtitle={obj.subtitle}
                    description={obj.description} 
                    imgSrc={obj.imgSrc} 
                    imgAlt={obj.imgAlt}
                />
            )}
            <Pagination length={cards.length}/>
        </div>
    );
};

export default CardList;
