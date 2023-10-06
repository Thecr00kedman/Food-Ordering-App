import { Box, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BannerData } from "../../assets/data";


export const Banner = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 2 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 769 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <Carousel
    swipeable={false}
    draggable={true}
    showDots={true}
    infinite={true}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    autoPlaySpeed={1000}
    keyBoardControl={true}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
  >
    {
        BannerData.map((item)=>(
            <Box key={item.id} className="Items" sx={{width:"100%",height:'100%',padding:'1rem'}}>
               <Box><img style={{width:"100%",height:"100%",objectFit:'cover'}} src={item.Url} alt="This is a banner" /></Box>
            </Box>
        ))
      }
  </Carousel>
  )
}

export default Banner;
