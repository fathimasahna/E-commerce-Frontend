// import { useLocation } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";


// function Navbar_ReviewProd() {
//   const location = useLocation();
//   const product_id = location.state?.productId;

//   const [review, setReview] = useState("");

//   const submitReview = () => {
//     axios
//       .post("https://e-commerce-application-fdjs.onrender.com/sample/reviewInsert/", {
//         product_id: product_id,
//         review: review,
//       })
//       .then((res) => {
//         alert("Review submitted!");
//         console.log(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <div >
//       <div >
//         <h2 >Add Your Review</h2>

//         <textarea
         
//           placeholder="Enter Review"
//           name="review"
//           value={review}
//           onChange={(e) => setReview(e.target.value)}
//         />

//         <button  onClick={submitReview}>
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Navbar_ReviewProd;


import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import styles from "./Navbar_ReviewProd.module.css";

function Navbar_ReviewProd() {
  const location = useLocation();
  const product_id = location.state?.productId;
  const [review, setReview] = useState("");

 const submitReview = () => {
    console.log("SUBMIT BUTTON CLICKED");
    
    axios
        .post("https://e-commerce-application-fdjs.onrender.com/sample/reviewInsert/", {
            product_id: product_id,
            review: review,
        })
        .then((response) => {
            console.log("SUCCESS:", response.data);
            alert("Review submitted successfully");
        })
        .catch((error) => {
            console.log("ERROR:", error);
            alert("Review submission failed");
        });
};

  return (
    <div className={styles.reviewPage}>
      <div className={styles.reviewBox}>
        <h2>Add Your Review</h2>
        <textarea
          className={styles.reviewTextarea}
          placeholder="Enter Review"
          name="review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <button className={styles.submitBtn} onClick={submitReview}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Navbar_ReviewProd;
