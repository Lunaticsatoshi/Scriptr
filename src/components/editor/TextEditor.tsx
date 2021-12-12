import { useState, useCallback } from 'react';
import Quill from 'quill';
import "quill/dist/quill.snow.css";

const TextEditor = () => {
    const [quill, setQuill] = useState<Quill | null>(null);

    const wrapperRef = useCallback((wrapper: HTMLDivElement) => {
        if (wrapper === null) return;
        wrapper.innerHTML = "";
        const editor = document.createElement("div") as HTMLDivElement;
        wrapper.appendChild(editor);
        const quill = new Quill(editor, {
            theme: 'snow',
            modules: {
                toolbar: [
                    ['bold', 'italic', 'underline', 'strike'],
                    ['blockquote', 'code-block'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    [{ script: 'sub' }, { script: 'super' }],
                    [{ indent: '-1' }, { indent: '+1' }],
                    [{ direction: 'rtl' }],
                    [{ size: ['small', false, 'large', 'huge'] }],
                    [{ header: [1, 2, 3, 4, 5, 6, false] }],
                    [{ color: [] }, { background: [] }],
                    [{ font: [] }],
                    [{ align: [] }],
                    ['clean'],
                ],
            },
        });
        quill.disable();
        quill.setText("Hello, World!");
        setQuill(quill);
    } , []);

    return (
        <div className="container" ref={wrapperRef}>
        </div>
    )
}

export default TextEditor