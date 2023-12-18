import React, { useState } from 'react';

const BlogForm = () => {
    const [postData, setPostData] = useState({
        title: '',
        image: '',
        content: '',
        category: '',
        tags: [],
        published: false,
    });

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;

        setPostData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? [...prevData[name], value] : value,
        }));

        if (type === 'checkbox' && !checked) {
            setPostData((prevData) => ({
                ...prevData,
                [name]: prevData[name].filter(tag => tag !== value),
            }));
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const { title, image, content, category, tags, published } = postData;

        // Esegui azioni con i dati del post (invio al backend, aggiunta alla lista, ecc.)
        console.log({
            title,
            image,
            content,
            category,
            tags,
            published,
        });

        // Aggiungi il post alla lista
        if (title.trim() !== '') {
            // Utilizza gli altri dati del post come preferisci
            setPostData({
                title: '',
                image: '',
                content: '',
                category: '',
                tags: [],
                published: false,
            });
        }
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Titolo dell'articolo:
                    <input
                        type="text"
                        name="title"
                        value={postData.title}
                        onChange={handleInputChange}
                    />
                </label>

                <label>
                    Immagine dell'articolo:
                    <input
                        type="text"
                        name="image"
                        value={postData.image}
                        onChange={handleInputChange}
                    />
                </label>

                <label>
                    Contenuto dell'articolo:
                    <textarea
                        name="content"
                        value={postData.content}
                        onChange={handleInputChange}
                    />
                </label>

                <label>
                    Categoria dell'articolo:
                    <input
                        type="text"
                        name="category"
                        value={postData.category}
                        onChange={handleInputChange}
                    />
                </label>

                <label>
                    Tags dell'articolo:
                    <div>
                        <input
                            type="checkbox"
                            name="tags"
                            value="Tecnologia"
                            checked={postData.tags.includes('Tecnologia')}
                            onChange={handleInputChange}
                        />
                        Tecnologia

                        <input
                            type="checkbox"
                            name="tags"
                            value="Viaggi"
                            checked={postData.tags.includes('Viaggi')}
                            onChange={handleInputChange}
                        />
                        Viaggi

                        {/* Aggiungi altri tag secondo necessità */}
                    </div>
                </label>

                <label>
                    Pubblicato:
                    <input
                        type="checkbox"
                        name="published"
                        checked={postData.published}
                        onChange={handleInputChange}
                    />
                </label>

                <button type="submit">Aggiungi articolo</button>
            </form>

            {/* <ul>
//                 {posts.map((post, index) => (
                <li key={index}>
                    {post}
                    <span
                        style={{ cursor: 'pointer', marginLeft: '10px' }}
                        onClick={() => handleDeleteArticle(index)}
                    >
                        <span className='icon'>&#10007;</span>
                    </span>
                </li>
            ))}
            </ul> */}
        </div>
    );
};

export default BlogForm;