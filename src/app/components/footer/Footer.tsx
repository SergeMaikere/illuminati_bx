import React, { PropTypes } from 'react';

const Footer = ({ className }) => {
    return (
        <div className="flex bg-stone-200 p-3">
            <div className="flex-1 flex justify-around">
               <img className="w-40" src="./illuminati_bx.png" alt="logo"/>
               <div>Some Infos</div>
            </div>
            <div className="flex-1">
                <div>
                    <a href="https://www.freepik.com/free-vector/hand-drawn-illuminati-illustration_36865229.htm#fromView=search&page=1&position=21&uuid=331f0dff-92c5-46d6-bc36-8d8f9f907e08">Image by freepik</a>
                </div>
                <div>
                    Photo by <a href="https://unsplash.com/@mham3816?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Madie Hamilton</a> on <a href="https://unsplash.com/photos/person-holding-red-plastic-shovel-l9vXx8aEYJ8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
