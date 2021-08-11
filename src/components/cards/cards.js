import { Link } from "gatsby";
import * as React from "react";
import CardsData from "./cardsData.js";
import "./cards.scss";

const Cards = () => {
	return (
		<article className={"cards--outer-container"}>
			{CardsData.map((el) => {
				const { title, description, buttonText } = el;
				return (
					<section className={"card--container"}>
						<h2 className={"card--title"}>{title}</h2>
						<div className={"card--description"}>
							<p>{description}</p>
						</div>
						<button className={"card--link"}>
							<Link>{buttonText}</Link>
						</button>
					</section>
				);
			})}
		</article>
	);
};

export default Cards;
