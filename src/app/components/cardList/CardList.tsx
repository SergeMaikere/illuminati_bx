"use client"
import Pagination from '../pagination/Pagination';
import PostCard from '../postCard/PostCard';
import OupsNoContent from '../oupsNoContent/OupsNoContent';
import { splicer } from '../../../utils/Helper';
import { Post } from '../../../utils/Posts';
import { useSignals } from '@preact/signals-react/runtime';
import { usePage } from '../../../signals/pagination';

type P = {
    cards: Post[]
    title: string
}

const CardList = ({cards, title}: P) => {
    useSignals()
    const { page } = usePage()
    const decks = splicer(cards, 4)

    return (
        <div className="mt-10 pb-12 px-3">
            <div className="text-4xl font-serif m-4">{title}</div>
            {
                decks.length === 0 ? <OupsNoContent/> :
                decks[page.value].map( post => <PostCard key={post.id} post={post} /> )
            }
            <Pagination length={decks.length}/>
        </div>
    );
};

export default CardList;
