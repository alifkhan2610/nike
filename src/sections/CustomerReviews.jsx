import { reviews } from "../constants";
import  ReviewCard  from "../components/ReviewCard";

function CustomerReviews() {
  return (
    <section className="max-container">
      <h3 className="font-palanquin font-bold text-center text-4xl">
        What our
        <span className="text-coral-red"> Customers</span> says?
      </h3>
      <p className="info-text mt-4 m-auto max-w-lg text-center">
        Nike shoes deliver unparalleled comfort and style. Perfect for any
        activity, a true blend of performance and fashion. Highly recommend!
        <div className="mt-24 flex flex-1 justify-evenly max-lg:flex-col items-center gap-14">
            {
              reviews.map((review)=>(
                <ReviewCard
                key = {review.customerName}
                imgURL = {review.imgURL}
                customerName = {review.customerName}
                rating = {review.rating}
                feedback = {review.feedback}
                
                />
              ))
            }
        </div>
      </p>
    </section>
  );
}

export default CustomerReviews;
