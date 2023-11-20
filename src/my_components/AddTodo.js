import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be empty!!")
        } else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    };

    return (
        <>
            <div className='container'>
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" value={title} htmlFor="title" id="title" onChange={(e) => setTitle(e.target.value)} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
                        <input type="text" className="form-control" value={desc} htmlFor="desc" id="desc" onChange={(e) => setDesc(e.target.value)} />

                    </div>

                    <button type="submit" className="btn btn-sm btn-primary" >Add Task</button>
                </form>

            </div>
        </>
    )
}