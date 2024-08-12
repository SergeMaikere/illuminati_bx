import React from 'react';
import ReactQuill, { UnprivilegedEditor } from 'react-quill'
import 'react-quill/dist/quill.bubble.css'
import { OtisMini } from '../../../utils/Classics';
import { DeltaStatic, Sources } from 'quill';

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

type T = {
    value: string
    handleChange(value: string, delta: DeltaStatic, source: Sources, editor: UnprivilegedEditor): void
}

const TextEditor = ( {value, handleChange}: T ) => {
    return (
        <ReactQuill theme="bubble" modules={modules} formats={formats} placeholder={OtisMini} value={value} onChange={handleChange} />
        
    );
};

export default TextEditor;
