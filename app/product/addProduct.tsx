'use client'

import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react"

export default function addProduct() {
    const [title, setTitle]=useState("");
    const [price, setPrice]=useState("");
    const [modal, setModal]=useState(false);
    const [mutating, setMutating]=useState(false);

    const router=useRouter();

    async function handleSubmit(e:SyntheticEvent) {
        e.preventDefault();

        setMutating(true);
            await fetch('http://localhost:5000/products',{
            method:'POST',
            headers:{
                'Content-type':'application/json',
            },
            body: JSON.stringify({
                title,
                price,
            })
        });
        
        setMutating(false);

        setTitle("");
        setPrice("");
        router.refresh();
        setModal(false);
    }

    function handleChange(){
        setModal(!modal);
    }
  return (
    <div>
        <button className="btn" onClick={handleChange}>Add new</button>
        <input type="checkbox" checked={modal} onChange={handleChange} className="modal-toggle" />
        <div className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Add New Product</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="" className="label font-bold">Title</label>
                        <input type="text"
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                         className="input w-full input-bordered"
                          placeholder="Title" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="" className="label font-bold">Title</label>
                        <input type="text" 
                        value={price}
                        onChange={(e)=>setPrice(e.target.value)}
                        className="input w-full input-bordered" placeholder="Title" />
                    </div>
                    <div className="modal-action">
                        <button type="reset" onClick={handleChange} className="btn">Cancel</button>
                        {!mutating?(
                        <button type="submit" className="btn btn-primary">Save</button>
                        ):(
                        <button type="button" className="btn loading">Saving....</button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
