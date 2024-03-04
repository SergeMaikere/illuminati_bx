import React, { PropTypes } from 'react';
import { getPopular } from '../../utils/getPopular';
import Card from '../card/Card';

const Menu = ({ className }) => {
    return (
        <div className="">
            <div className="">
                <h3 className="font-serif">
                    <div className="font-extralight">Le Menu</div>
                    <div className="text-3xl">Populaires</div>
                </h3>
                <div>
                    {
                        getPopular().map(
                            obj => <Card
                                date={obj.date}
                                category={obj.category}
                                author={obj.author}
                                title={obj.title}
                                subtitle={obj.subtitle}
                                description={obj.description}
                            />
                        )
                    }
                </div>
            </div>
            <div className=""></div>
            <div className=""></div>
        </div>
    );
};

export default Menu;
