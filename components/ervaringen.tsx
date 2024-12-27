import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ElfsightWidget } from "react-elfsight-widget";
const Ervaringen = () => {
  return <ElfsightWidget widgetId="2ead2bec-131a-49cb-a564-90803e686bb5" />;
  // const reviews = [
  //   {
  //     name: "John Doe",
  //     text: "Geweldige rijschool! De instructeurs zijn zeer professioneel en geduldig. Ik voelde me altijd op mijn gemak tijdens de lessen.",
  //   },
  //   {
  //     name: "Jane Smith",
  //     text: "Ik heb veel geleerd en mijn rijvaardigheden zijn enorm verbeterd. De flexibele planningen waren perfect voor mijn drukke schema.",
  //   },
  //   {
  //     name: "Michael Brown",
  //     text: "De lessen waren altijd leuk en leerzaam. Ik heb mijn rijbewijs in één keer gehaald dankzij deze rijschool.",
  //   },
  //   {
  //     name: "Emily Davis",
  //     text: "Uitstekende rijschool met geweldige instructeurs. Ze hebben me echt geholpen om zelfverzekerd te worden achter het stuur.",
  //   },
  //   {
  //     name: "Chris Johnson",
  //     text: "De rijlessen waren altijd goed georganiseerd en de instructeurs waren erg behulpzaam.",
  //   },
  //   {
  //     name: "Patricia Williams",
  //     text: "Ik heb veel vertrouwen gekregen in mijn rijvaardigheden dankzij deze rijschool.",
  //   },
  //   {
  //     name: "Robert Jones",
  //     text: "De instructeurs zijn zeer geduldig en professioneel. Ik zou deze rijschool zeker aanbevelen.",
  //   },
  //   {
  //     name: "Linda Martinez",
  //     text: "Geweldige ervaring! De lessen waren altijd leuk en leerzaam.",
  //   },
  //   {
  //     name: "James Rodriguez",
  //     text: "Ik heb mijn rijbewijs in één keer gehaald dankzij de uitstekende instructeurs.",
  //   },
  //   {
  //     name: "Barbara Garcia",
  //     text: "Uitstekende rijschool met flexibele planningen die perfect waren voor mijn drukke schema.",
  //   },
  // ];

  // const [centerSlidePercentage, setCenterSlidePercentage] = useState(25);

  // useEffect(() => {
  //   const updateCenterSlidePercentage = () => {
  //     if (window.innerWidth >= 1400) {
  //       setCenterSlidePercentage(25); // 4 items per view
  //     } else if (window.innerWidth >= 700) {
  //       setCenterSlidePercentage(50); // 2 items per view
  //     } else {
  //       setCenterSlidePercentage(100); // 1 item per view
  //     }
  //   };

  //   updateCenterSlidePercentage();
  //   window.addEventListener("resize", updateCenterSlidePercentage);

  //   return () => {
  //     window.removeEventListener("resize", updateCenterSlidePercentage);
  //   };
  // }, []);

  // return (
  //   <div className="reviews-container">
  //     <h2 className="reviews-title">ERVARINGEN</h2>
  //     <Carousel
  //       className="carousel"
  //       renderArrowPrev={(onClickHandler, hasPrev, label) =>
  //         hasPrev && (
  //           <button
  //             type="button"
  //             onClick={onClickHandler}
  //             title={label}
  //             className="slider-arrow slider-prev"
  //           >
  //             &#10094;
  //           </button>
  //         )
  //       }
  //       renderArrowNext={(onClickHandler, hasNext, label) =>
  //           hasNext && (
  //             <button
  //               type="button"
  //               onClick={onClickHandler}
  //               title={label}
  //               className="slider-arrow slider-next"
  //             >
  //               &#10095;
  //             </button>
  //           )
  //         }
  //       showArrows={true}
  //       showThumbs={false}
  //       showStatus={false}
  //       infiniteLoop={true}
  //       autoPlay={true}
  //       interval={3000}
  //       centerMode={true}
  //       centerSlidePercentage={centerSlidePercentage}
  //     >
  //       {reviews.map((review, index) => (
  //         <div className="review-item" key={index}>
  //           <div className="stars">
  //             <FaStar />
  //             <FaStar />
  //             <FaStar />
  //             <FaStar />
  //             <FaStar />
  //           </div>
  //           <h3>{review.name}</h3>
  //           <p>{review.text}</p>
  //         </div>
  //       ))}
  //     </Carousel>
  //   </div>
  // );
};

export default Ervaringen;
