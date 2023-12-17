import { star } from "../assets/icons";

function ReviewCard({ imgURL, customerName, rating, feedback }) {
  return (
    <div className="flex justify-center items-center flex-col ">
      <img
        src={imgURL}
        alt="customers"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="mt-6 max-w-sm text-center ">{feedback}</p>
      <div className="mt-6 flex justify-center items-center gap-2.5">
        <img
          src={star}
          alt="icon"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">{rating}</p>
      </div>
      <h3 className="mt-1 font-palanquin font-bold text-3xl text-center">{customerName}</h3>
    </div>
  );
}

export default ReviewCard;
