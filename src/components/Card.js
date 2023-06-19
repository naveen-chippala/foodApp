import React from 'react'

export default function Card() {
    return (
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img className="card-img-top" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text.</p>
                        <div className='container w-100'>
                            <select className='m-2 h-100 bg-success text-white rounded'>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1} >{i + 1} </option>
                                    )
                                })}
                            </select>
                            <select className='m-2 h-100 bg-success text-white rounded'>
                                <option value="half">Half</option>
                                <option value="full">Full</option>
                                <div className="d-inline h-100 fs-5">
                                    Total Price
                                </div>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
