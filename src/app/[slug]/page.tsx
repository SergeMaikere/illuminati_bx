import React, { PropTypes } from 'react';
import { getPostById } from '../utils/Posts';
import Menu from '../components/menu/Menu';
import Button from '../components/button/Button';

const getStaticProps = async (context) => {
    const postId = context.params.slug
    const post = await getPostById( postId )
}


const SinglePage = async (context) => {

    const post = await getStaticProps(context)

    return (
        <div className="p-3">
            <div className="mt-10 flex gap-2">
                <div className="flex-1">
                    <h1 className="text-6xl font-serif">{post.title}<span className="text-5xl text-gray-700">{` ${post.subtitle}`}</span></h1>
                    <div className="flex gap-2 h-10 mt-5">
                        <img className="rounded-full" src="./pr_strauss.png" alt={post.authorImgAlt}/>
                        <div>
                            <div className="font-bold">{post.author}</div>
                            <div className="text-sm">{post.date}</div>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <img className="" src={post.imgSrc} alt={post.imgAlt}/>
                </div>
            </div>
            <div className="grid grid-cols-3">
                <div className="mt-10 col-span-2 p-3">
                    <div>
                        <p><b>Lorem ipsum dolor sit</b>,<br/> amet consectetur adipisicing elit. Neque rerum exercitationem sed minus commodi. Aut labore modi nobis expedita nisi vel quaerat earum pariatur natus dolores! Nihil quo incidunt libero.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque rerum exercitationem sed minus commodi. Aut labore modi nobis expedita nisi vel quaerat earum pariatur natus dolores! Nihil quo incidunt libero.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque rerum exercitationem sed minus commodi. Aut labore modi nobis expedita nisi vel quaerat earum pariatur natus dolores! Nihil quo incidunt libero.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque rerum exercitationem sed minus commodi. Aut labore modi nobis expedita nisi vel quaerat earum pariatur natus dolores! Nihil quo incidunt libero.</p>
                        <p><b>Lorem ipsum dolor sit</b>,<br/> amet consectetur adipisicing elit. Neque rerum exercitationem sed minus commodi. Aut labore modi nobis expedita nisi vel quaerat earum pariatur natus dolores! Nihil quo incidunt libero.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque rerum exercitationem sed minus commodi. Aut labore modi nobis expedita nisi vel quaerat earum pariatur natus dolores! Nihil quo incidunt libero.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque rerum exercitationem sed minus commodi. Aut labore modi nobis expedita nisi vel quaerat earum pariatur natus dolores! Nihil quo incidunt libero.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque rerum exercitationem sed minus commodi. Aut labore modi nobis expedita nisi vel quaerat earum pariatur natus dolores! Nihil quo incidunt libero.</p>
                        <p><b>Lorem ipsum dolor sit</b>,<br/> amet consectetur adipisicing elit. Neque rerum exercitationem sed minus commodi. Aut labore modi nobis expedita nisi vel quaerat earum pariatur natus dolores! Nihil quo incidunt libero.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque rerum exercitationem sed minus commodi. Aut labore modi nobis expedita nisi vel quaerat earum pariatur natus dolores! Nihil quo incidunt libero.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque rerum exercitationem sed minus commodi. Aut labore modi nobis expedita nisi vel quaerat earum pariatur natus dolores! Nihil quo incidunt libero.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque rerum exercitationem sed minus commodi. Aut labore modi nobis expedita nisi vel quaerat earum pariatur natus dolores! Nihil quo incidunt libero.</p>
                    </div>
                    <div className="mt-10">
                        <h4 className="text-3xl">Comments</h4>
                        <form className="flex gap-5 py-10">
                            <input className="w-full px-2 border-b border-gray-300 shadow-xl focus:outline-none" name="post" type="text" placeholder="C'est une bonne position ça, complotiste ?" />
                            <Button buttonText="Poster" />
                        </form>
                        <div className="mt-10">
                            {
                                getCommentsByPostId(props.postId).map( 
                                    comm => <Comment date={comm.date} author={comm.user} msg={comm.msg}/> 
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <Menu/>
                </div>
            </div>
        </div>
    );
};

export default SinglePage;
