import axios from 'axios';
import React, { useState } from 'react'

const Addfeature = () => {
    const [title,setTitle]=useState("");
    const[description,setDescription]=useState("");
    const addfeature=async(e)=>{
        e.preventDefault();
        try{
            const res = await axios.post("http://localhost:4000/feature",{ title,description})
            alert("feture  Added")
            
            setTitle("");
            setDescription("");
        }
        catch(err){
            alert("Fail to added data")
        }
    }
  return (
    <div>
     <section>
        <div className='container addoffer p-5'>
           <div className='row'>
            <div className='col-md-4 py-5'>
            <form onSubmit={addfeature}>
                                    <div className="mb-3">
                                        <input 
                                            type="text" 
                                            placeholder="tittle" 
                                            className="form-control p-3" 
                                            value={title} 
                                            onChange={(e) => setTitle(e.target.value)} 
                                        />
                                        </div>
                                        <div className="mb-3">
                                        <input 
                                            type="text" 
                                            placeholder="description" 
                                            className="form-control p-3" 
                                            value={description} 
                                            onChange={(e) => setDescription(e.target.value)} 
                                        />
                                        </div>
                                        <div className="mb-3">
                                        <input 
                                            type="submit" 
                                            placeholder="submit" 
                                            className='btn btn-primary'
                                        />
                                        </div>
                                        </form>
            </div>
           </div>
        </div>
     </section>
    </div>
  )
}

export default Addfeature
