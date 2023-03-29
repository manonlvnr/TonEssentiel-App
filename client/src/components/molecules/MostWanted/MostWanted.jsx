import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "./MostWanted.scss";

const mostWantedSymptoms = ["Mal de tête", "Boutons", "Lorem ispum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"];


function MostWanted() {
    const mostWantedElements = mostWantedSymptoms.map(symptom => {
        return (                
                <SwiperSlide>
                        <Link className="mostWanted__description">{symptom}</Link>
                </SwiperSlide>
        )
    });

    return (
        <div className="mostWanted__wrapper">
            <h2 className="mostWanted__title">Symptômes les + recherchés</h2>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={8}
            >
                {mostWantedElements}
            </Swiper>
        </div>
    )
}

export default MostWanted;