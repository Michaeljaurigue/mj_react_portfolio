import React from "react";
import CardItem from "../../CardItem/CardItem";
import "./DigitalMarketing.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Digital Marketing Certifications</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/cert (1).jpg"
              text="With this course, I learned how to effectively create and manage a social media presence for businesses, from building a brand and developing content strategies to running paid ads on platforms like Facebook and Instagram. Through hands-on experience with tools like ManyChat and AI-powered content creation platforms, I gained skills in designing graphics, writing compelling captions, and creating videos that resonate with audiences. By setting up a fake brand, I could practice leveraging multiple social networks and creating cohesive campaigns, helping me understand how to optimize social media for both business growth and marketing success."
              label="MJ"
              path=""
            />
            <CardItem
              src="images/cert.png"
              text="With this course, I learned how to effectively create and manage a social media presence for businesses, from building a brand and developing content strategies to running paid ads on platforms like Facebook and Instagram. Through hands-on experience with tools like ManyChat and AI-powered content creation platforms, I gained skills in designing graphics, writing compelling captions, and creating videos that resonate with audiences. By setting up a fake brand, I could practice leveraging multiple social networks and creating cohesive campaigns, helping me understand how to optimize social media for both business growth and marketing success."
              label="MJ"
              path=""
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/cert (2).jpg"
              text="With this course, I learned how to craft a powerful brand strategy by clearly defining my brand's purpose, vision, mission, and values. The course provided a proven framework for positioning a business effectively in the marketplace, as well as insights into building customer personas and understanding brand archetypes. I developed a strategic mindset essential for out-thinking competitors and implementing the five laws of brand building. The actionable templates and step-by-step guidance allowed me to verify my business idea and ensure it stands out with a strong, cohesive brand identity."
              label="MJ"
              path=""
            />
            <CardItem
              src="images/cert (3).jpg"
              text="With this course, I learned how to develop and execute comprehensive Google Ads strategies, from setting up search and shopping campaigns to leveraging AI-driven Performance Max campaigns. I gained hands-on experience in PPC tactics, keyword research, and conversion tracking, allowing me to drive targeted traffic and improve sales for any business. The course also taught me valuable insights into sales psychology and copywriting, which are crucial for creating ads that convert. The step-by-step, practical approach gave me the confidence to optimize ads and avoid costly mistakes, ensuring better campaign performance and ROI."
              label="MJ"
              path=""
            />
            <CardItem
              src="images/cert (6).jpg"
              text="With this course, I gained a deep understanding of how psychological principles and consumer behavior influence purchase decisions. By applying marketing psychology and behavioral economics, I learned how to develop highly effective and profitable strategies that increase sales and conversions. The course provided practical insights into consumer patterns, perception, and attitude, enabling me to adjust my content, pricing, and sales strategies for better results. Through clear examples and actionable methods, I now have the tools to craft creative marketing approaches that resonate with consumers and drive impactful outcomes."
              label="MJ"
              path=""
            />
          </ul>


          <ul className="cards__items">
            <CardItem
              src="images/baSE.gif"
              text="I earned my Bachelor's degree in Business Administration in Social Entrepreneurship from Roosevelt University in Chicago, where I developed a strong foundation in business strategy, ethical entrepreneurship, and innovative problem-solving. This education provided me with the tools to create purpose-driven business models and sustainable marketing strategies. By focusing on social impact, I learned how to align business goals with societal needs, a skill that has proven invaluable in both my entrepreneurial ventures and digital marketing career, allowing me to craft campaigns that resonate with modern, socially-conscious audiences."
              label="MJ"
              path=""
            />
            <CardItem
              src="images/mbaMarketing.png"
              text="I earned my MBA in Marketing from Columbia Southern University, where I deepened my expertise in strategic marketing, consumer behavior, and brand management. This advanced education honed my ability to craft targeted campaigns that resonate with audiences and drive growth. The program's focus on practical, real-world applications helped me sharpen my business acumen, allowing me to make data-driven decisions and implement effective marketing strategies. This MBA has empowered me to take my marketing knowledge to the next level, seamlessly blending creativity with business know-how to achieve tangible results."
              label="MJ"
              path=""
            />
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Cards;
