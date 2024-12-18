import Icon from "./assets/Icon.png";
import AngleBtn from "./components/AngleBtn";
import FAQCard from "./components/FAQCard";
import Pinkbtn from "./components/Pinkbtn";
import "./faqscreen.css";

export default function FAQScreen() {
  return (
    <div className="FAQIconMain-div">
      <img className="FAQIcon" src={Icon} alt="Icon" />
      <h1 className="FAQHeader">Frequently asked questions</h1>
      <p className="FAQText">Whats happening around the World</p>
      <div className="FAQView-div">
        <FAQCard
          que="What is the best way to create a saas business today?"
          ans="Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.

Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond."
        />
        <FAQCard
          que="What is the best way to create a saas business today?"
          ans="Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.

Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond."
        />
        <FAQCard
          que="What is the best way to create a saas business today?"
          ans="Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.

Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond."
        />
        <FAQCard
          que="What is the best way to create a saas business today?"
          ans="Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.

Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond."
        />
        <FAQCard
          que="What is the best way to create a saas business today?"
          ans="Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.

Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond."
        />
      </div>
      <div className="FAQbtnrow">
        <Pinkbtn text={"Contact"} height="50px" width="140px" />
        <AngleBtn />
        <p>Book a Demo Today</p>
      </div>
    </div>
  );
}
