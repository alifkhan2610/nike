import Button from "../components/Button";
import {shoe8} from '../assets/images'

function SuperQuality() {
  return (
    <div>
      <section
        id="about-us"
        className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
      >
        <div className="flex flex-1 flex-col">
          <h2 className=" font-palanquin text-4xl capitalize font-bold">
            We Provide You
            <br />
            <span className="text-coral-red ">Super </span>
            <span className="text-coral-red ">Quality </span>
            Shoes
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            industry. Lorem Ipsum has been the industry standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Our dedication to detail and excelence ensure your satiesfection
          </p>

          <div className="mt-11">
            <Button label="View details" />
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img
            src={shoe8}
            alt="shoe8"
            width={570}
            height={522}
            className="object-contain"
          />
        </div>
      </section>
    </div>
  );
}

export default SuperQuality;
