import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const AdminReviewList = () => {

    const location = useLocation();

    const productId = location.state?.productId;
    const productName = location.state?.productName;

    const [reviews, setReviews] = useState([]);

    useEffect(() => {

        if (!productId) return;

        axios
            .get(
                `https://e-commerce-application-fdjs.onrender.com/sample/reviewGetByProduct/${productId}/`
            )
            .then((res) => {
                setReviews(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

    }, [productId]);

    return (
        <div>

            <h2>Reviews for {productName}</h2>

            {reviews.length === 0 ? (
                <p>No reviews yet.</p>
            ) : (
                reviews.map((item) => (
                    <div key={item.review_id}>

                        <h3>{item.product_name}</h3>

                        <p>
                            {item.review}
                        </p>

                        <small>
                            {item.review_date}
                        </small>

                    </div>
                ))
            )}

        </div>
    );
};

export default AdminReviewList;