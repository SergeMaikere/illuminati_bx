"use client"
import Pagination from '../pagination/Pagination';
import PostCard from '../postCard/PostCard';
import OupsNoContent from '../oupsNoContent/OupsNoContent';
import { getRecents } from '../../utils/getRecents';
import { splicer, voyeur } from '../../utils/Helper';
import { useContext } from 'react';
import { PaginationContext } from '../../../context/PaginationContext';

const CardList = (props) => {

    const [ state ] = useContext( PaginationContext )
    const decks = splicer(props.cards, 4)

    return (
        <div className="mt-10 pb-12 px-3">
            <h2 className="text-4xl font-serif m-4">{props.title}</h2>
            {
                decks.length === 0 ? <OupsNoContent/> :
                decks[state].map( 
                    obj => <PostCard 
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
                )
            }
            <Pagination length={decks.length}/>
        </div>
    );
};

export default CardList;
