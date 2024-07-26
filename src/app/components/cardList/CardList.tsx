"use client"
import Pagination from '../pagination/Pagination';
import PostCard from '../postCard/PostCard';
import OupsNoContent from '../oupsNoContent/OupsNoContent';
import { splicer } from '../../utils/Helper';
import { useContext } from 'react';
import { PaginationContext } from '../../../context/PaginationContext';

const CardList = (props) => {

    const [ page ] = useContext( PaginationContext )
    const decks = splicer(props.cards, 4)

    return (
        <div className="mt-10 pb-12 px-3">
            <div className="text-4xl font-serif m-4">{props.title}</div>
            {
                decks.length === 0 ? <OupsNoContent/> :
                decks[page].map( post => <PostCard key={post.id} post={post} /> )
            }
            <Pagination length={decks.length}/>
        </div>
    );
};

export default CardList;
