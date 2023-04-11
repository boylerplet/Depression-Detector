import React from 'react';
import '../style.css';
import data from '../assets/data.json';

const Results = ({ res }) => {
	let renderData = {};

	if (res > 0.0 && res <= 50.0) {
		renderData = data.mild;
	} else if (res > 50.0 && res < 80.0) {
		renderData = data.borderline;
	} else {
		renderData = data.severe;
	}

	return (
		<>
			<main>
				<div className="result-summary">
					<div className="results grid-flow" data-spacing="large">
						<h1 className="section-title">Your Result</h1>
						<p className="result-score">
							<span>{res.toFixed(1)}</span> of 100
						</p>
						<div className="grid-flow">
							<p className="result-rank">{renderData.rank}</p>
							<p>{renderData.description}</p>
						</div>
					</div>
					<div className="summary grid-flow" data-spacing="large">
						<h2 className="section-title">Summary</h2>
						<div className="grid-flow">
							{/* <div className="summary-item" data-item-type="accent-1">
								<div className="flex-group">
									<svg
										className="summary-icon"
										xmlns="http://www.w3.org/2000/svg"
										width={20}
										height={20}
										fill="none"
										viewBox="0 0 20 20"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.25"
											d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z"
										/>
									</svg>
									<h3 className="summary-item-title">Reaction</h3>
								</div>
								<p className="summary-score">
									<span>50</span> / 100
								</p>
							</div>
							<div className="summary-item" data-item-type="accent-2">
								<div className="flex-group">
									<svg
										className="summary-icon"
										xmlns="http://www.w3.org/2000/svg"
										width={20}
										height={20}
										fill="none"
										viewBox="0 0 20 20"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.25"
											d="M5.833 11.667a2.5 2.5 0 1 0 .834 4.858"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.25"
											d="M3.553 13.004a3.333 3.333 0 0 1-.728-5.53m.025-.067a2.083 2.083 0 0 1 2.983-2.824m.199.054A2.083 2.083 0 1 1 10 3.75v12.917a1.667 1.667 0 0 1-3.333 0M10 5.833a2.5 2.5 0 0 0 2.5 2.5m1.667 3.334a2.5 2.5 0 1 1-.834 4.858"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.25"
											d="M16.447 13.004a3.334 3.334 0 0 0 .728-5.53m-.025-.067a2.083 2.083 0 0 0-2.983-2.824M10 3.75a2.085 2.085 0 0 1 2.538-2.033 2.084 2.084 0 0 1 1.43 2.92m-.635 12.03a1.667 1.667 0 0 1-3.333 0"
										/>
									</svg>{' '}
									<h3 className="summary-item-title">Memory</h3>
								</div>
								<p className="summary-score">
									<span>92</span> / 100
								</p>
							</div>
							<div className="summary-item" data-item-type="accent-3">
								<div className="flex-group">
									<svg
										className="summary-icon"
										xmlns="http://www.w3.org/2000/svg"
										width={20}
										height={20}
										fill="none"
										viewBox="0 0 20 20"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.25"
											d="M7.5 10h5M10 18.333A8.333 8.333 0 1 0 1.667 10c0 1.518.406 2.942 1.115 4.167l-.699 3.75 3.75-.699A8.295 8.295 0 0 0 10 18.333Z"
										/>
									</svg>{' '}
									<h3 className="summary-item-title">Verbal</h3>
								</div>
								<p className="summary-score">
									<span>61</span> / 100
								</p>
							</div>
							<div className="summary-item" data-item-type="accent-4">
								<div className="flex-group">
									<svg
										className="summary-icon"
										xmlns="http://www.w3.org/2000/svg"
										width={20}
										height={20}
										fill="none"
										viewBox="0 0 20 20"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.25"
											d="M10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.25"
											d="M17.5 10c-1.574 2.492-4.402 5-7.5 5s-5.926-2.508-7.5-5C4.416 7.632 6.66 5 10 5s5.584 2.632 7.5 5Z"
										/>
									</svg>
									<h3 className="summary-item-title">Visual</h3>
								</div>
								<p className="summary-score">
									<span>72</span> / 100
								</p>
							</div> */}
							<p>{renderData.summary}</p>
						</div>
						<button className="button">Continue</button>
					</div>
				</div>
			</main>
		</>
	);
};

export default Results;
