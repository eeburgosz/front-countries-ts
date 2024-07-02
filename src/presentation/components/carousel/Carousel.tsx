import { Box, Container, Typography } from "@mui/material";
import Slider, { Settings } from "react-slick";
import "./carousel.css";

export const Carousel: React.FC = () => {
	const settings: Settings = {
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 500,
		autoplaySpeed: 4000,
		cssEase: "linear",
		fade: true,
	};

	const images = [
		require("../../../assets/africa.jpg"),
		require("../../../assets/asia.jpg"),
		require("../../../assets/americas.jpg"),
		require("../../../assets/antarctic.jpg"),
		require("../../../assets/europe.jpg"),
		require("../../../assets/oceania.jpg"),
	];

	const getContinentName = (path: string) => {
		const parts = path.split("/");
		const fileName = parts[parts.length - 1];
		const [name] = fileName.split(".");
		return name.toUpperCase();
	};

	return (
		<Container disableGutters>
			<Slider {...settings}>
				{images.map((image, index) => (
					<Box component="div" key={index}>
						<img
							style={{
								width: "100%",
							}}
							src={image}
							alt={`Slide ${index}`}
						/>
						<Typography
							variant="h1"
							color="white"
							position={"absolute"}
							top={0}
							right={5}
							fontFamily={"Anton"}
							sx={{ textShadow: "4px 4px 6px rgba(0, 0, 0, 0.5)" }}
						>
							{getContinentName(image)}
						</Typography>
					</Box>
				))}
			</Slider>
		</Container>
	);
};
