import React from 'react'

export default function OrderCard({image,title, status,date}) {
    return (
        <div class="card mb-3" style={{ "max-width": "540px" }}>
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={image} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{status}</p>
                    </div>
                    <div>{date}</div>
                </div>
            </div>
        </div>
    )
}
