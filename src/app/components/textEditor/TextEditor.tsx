import React, { PropTypes } from 'react';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'
import { OtisMini } from '../../utils/Classics';

const modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
        ],
        ['link'],
        ['clean'],
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    },
}

const formats = ['header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link' ]

const TextEditor = (props) => {
    return (
        <ReactQuill theme="bubble" modules={modules} formats={formats} placeholder={OtisMini} value={props.value} onChange={props.handleChange} />
        
    );
};

export default TextEditor;
