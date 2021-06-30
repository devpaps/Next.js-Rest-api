const https = require('https');
import Link from 'next/link';
import Head from 'next/head';
import RoverImages from '../../components/RoverImages';
import styles from '../../styles/Rovers.module.css';

export default function Rover({ data, nasaApi }) {
	const showPerseveranceInfo =
		data.roverName === 'Perseverance' ? (
			<p style={{ marginBottom: '1rem' }}>
				{data.roverName} anländer till Mars den 18 Februari 2021
			</p>
		) : (
			''
		);

	return (
		<>
			<Head>
				title={`Expedition Rymden - ${data.roverName}`}
				description="Här kommer bilder som NASA:s rovers har tagit."
			</Head>
			<h1>{data.roverName}</h1>
			<p>
				<strong>Uppskjuten: </strong>
				{data.launchDate.substring(0, 10)}
			</p>
			<p>
				<strong>Landning: </strong>
				{data.landingDate.substring(0, 10)}
			</p>
			<p>
				<strong>Datum för senaste tagna korten: </strong>
				{data.maxDate}
			</p>
			<p>
				<strong>Datum för senaste tagna korten (Mars tid): </strong>
				{data.maxSol} <strong>Sol</strong>
			</p>
			<p>
				<strong>Status: </strong>
				{data.status}
			</p>
			<p>
				<strong>Antal tagna kort: </strong>
				{data.totalofPhotos}
			</p>
			<p>
				<strong>Vikt: </strong>
				{data.roverWeight} kg
			</p>
			<p>
				<strong>Läs mer: </strong>
				<a href={data.roverUrl}>{data.roverUrl}</a>
			</p>
			<p>
				<strong>Information: </strong>
				{data.backgroundStory ? data.backgroundStory : ''}
			</p>

			{typeof nasaApi.latest_photos !== 'undefined' ? (
				<RoverImages nasaApi={nasaApi} />
			) : (
				<div className={styles.imageNotFound}>
					<h3>Inga bilder funna</h3>
				</div>
			)}
			{showPerseveranceInfo}

			<Link href='/gallery'>
				<a style={{ margin: '3rem 0', display: 'block' }}>
					Tillbaka till galleriet
				</a>
			</Link>
		</>
	);
}

// Serverside rendering, nodejs
export async function getStaticProps({ params }) {
	const options = {
		agent: new https.Agent({
			rejectUnauthorized: false,
		}),
	};
	try {
		const nasa = await fetch(
			`https://api.nasa.gov/mars-photos/api/v1/rovers/${params.roverName}/latest_photos?api_key=f5OaCRcGIZDTjZfBH3k3sIGRkb6h8nEyYcFfEQ54`
		);

		const res = await fetch(
			`https://localhost:5001/api/Rover/${params.roverName}`,
			options
		);
		const nasaApi = await nasa.json();

		const data = await res.json();

		return {
			props: {
				data,
				nasaApi,
			},
			// updates the cache every hour
			revalidate: 3600,
		};
	} catch (error) {
		console.log(`Ett fel har uppstått: ${error}`);
	}
}

export async function getStaticPaths() {
	const options = {
		agent: new https.Agent({
			rejectUnauthorized: false,
		}),
	};

	try {
		const res = await fetch(`https://localhost:5001/api/Rover/`, options);
		const datas = await res.json();

		const paths = datas.map((movie) => {
			return {
				params: { roverName: String(movie.roverName) },
			};
		});
		return { paths, fallback: false };
	} catch (error) {
		console.log(`Ett fel har uppstått: ${error}`);
	}
}
