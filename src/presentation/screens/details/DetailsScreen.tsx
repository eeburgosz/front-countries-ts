import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { getCountryById } from "../../redux-toolkit/thunks";
import { useAppDispatch, useAppSelector } from "../../redux-toolkit/hooks";
import { Box, Container, Typography } from "@mui/material";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";

export const DetailsScreen: React.FC = () => {
	const { id } = useParams();
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (id) dispatch(getCountryById(id));
	}, [id, dispatch]);

	const country = useAppSelector((state) => state.countryById);

	//!------------
	const mapRef = useRef<HTMLDivElement | null>(null);
	const mapInstanceRef = useRef<L.Map | null>(null);

	useEffect(() => {
		if (mapRef.current && country.maps) {
			// Extraer el ID de la relación de la URL
			const relationId = country.maps.split("/").pop();

			//Limpiar el mapa anterior si existe
			if (mapInstanceRef.current) {
				mapInstanceRef.current.remove();
				mapInstanceRef.current = null;
			}
			mapRef.current.innerHTML = "";

			// Realizar una solicitud a la API de Overpass para obtener los límites de la relación
			const overpassUrl = `https://overpass-api.de/api/interpreter?data=[out:json];relation(${relationId});way(r);out geom;`;

			axios
				.get(overpassUrl)
				.then((response) => {
					const data = response.data;

					if (data && data.elements && data.elements.length > 0) {
						// Obtener las coordenadas de los límites del país
						const coordinates = data.elements.map((element: any) => {
							return element.geometry.map((point: any) => [
								point.lat,
								point.lon,
							]);
						});

						if (mapRef.current) {
							// Inicializa el mapa centrado en el primer punto de los límites
							const map = L.map(mapRef.current!).setView(coordinates[0][0], 6);
							mapInstanceRef.current = map;

							// Añade el tile layer de OpenStreetMap
							L.tileLayer(
								"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
								{
									attribution:
										'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
								}
							).addTo(map);

							// Añadir un marcador en la capital (opcional)
							// L.marker(coordinates[0][0]);
							// .addTo(map)
							// .bindPopup(`<b>${country.name}</b><br>Relation ID: ${relationId}`)
							// .openPopup();

							// Dibujar los límites del país
							coordinates.forEach((polygon: any) => {
								L.polygon(polygon, {
									color: "red",
									dashArray: [15],
								}).addTo(map);
							});
						}
					}
				})
				.catch((error) => {
					console.error("Error fetching data from Overpass API", error);
				});
		}
	}, [country, id]);

	return (
		<Container
			component="div"
			disableGutters
			sx={{ display: "flex", flexDirection: "column" }}
		>
			<Box
				component="section"
				sx={{
					mt: 8,
					display: "flex",
					gap: "1rem",
					"@media (max-width:768px)": {
						flexDirection: "column",
					},
				}}
			>
				<Box
					component="div"
					id="map"
					ref={mapRef}
					sx={{
						height: "500px",
						width: "50%",
						"@media (max-width:768px)": {
							width: "100%",
							height: "200px",
						},
					}}
				></Box>
				<Box
					component="img"
					src={country.flag}
					width="50%"
					maxHeight="500px"
					sx={{ objectFit: "contain" }}
				/>
			</Box>
			<Box
				component="section"
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-end",
				}}
			>
				<Typography variant="h2">{country.name}</Typography>
				<Typography variant="h4">{country.continent}</Typography>
				<Typography variant="h6">
					Population: {country.population.toLocaleString()}
				</Typography>
			</Box>
			<Box mb={10}>
				{country.Activities.length === 0 ? (
					<Typography variant="h5">No activities registered</Typography>
				) : (
					<>
						<Box display={"flex"} mt={5}>
							<Typography variant="body1" sx={{ flex: 1, textAlign: "center" }}>
								Activity name
							</Typography>
							<Typography variant="body1" sx={{ flex: 1, textAlign: "center" }}>
								Duration (months)
							</Typography>
							<Typography variant="body1" sx={{ flex: 1, textAlign: "center" }}>
								Difficulty
							</Typography>
							<Typography variant="body1" sx={{ flex: 1, textAlign: "center" }}>
								Seasons
							</Typography>
						</Box>
						<Box
							sx={{
								mt: 4,
								border: 1,
								borderColor: "divider",
								borderRadius: 1,
								overflow: "hidden",
							}}
						>
							{country.Activities.map((activity) => (
								<Box key={activity.id}>
									<Box
										sx={{
											display: "flex",
											borderBottom: 1,
											borderColor: "divider",
											p: 1,
											"&:last-child": {
												borderBottom: "none",
											},
										}}
									>
										<Typography
											variant="body1"
											sx={{ flex: 1, textAlign: "center" }}
										>
											{activity.activityName}
										</Typography>
										<Typography
											variant="body1"
											sx={{ flex: 1, textAlign: "center" }}
										>
											{activity.duration}
										</Typography>
										<Typography
											variant="body1"
											sx={{ flex: 1, textAlign: "center" }}
										>
											{activity.difficulty}
										</Typography>
										<Typography
											variant="body1"
											sx={{ flex: 1, textAlign: "center" }}
										>
											{activity.season}
										</Typography>
									</Box>
								</Box>
							))}
						</Box>
					</>
				)}
			</Box>
		</Container>
	);
};
