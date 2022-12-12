import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import BT from '../components/BasicTabs'

export let loader = () => {
	let data = [
		{id: 0, area: "Comercial", texto: "asdasd"},
		{id: 1, area: "Sanatorial", texto: "asdasd2"},
		{id: 2, area: "Contable", texto: "asdasd3"},
		{id: 3, area: "Administrativo", texto: "asdasd4"},
		{id: 4, area: "Juridico", texto: "asdasd5"},
		{id: 5, area: "Gestión", texto: "asdasd6"}
	];

	return json(data);
};

export default function Index() {
	return (
		<main>
			<BT/>
		</main>
	);
}