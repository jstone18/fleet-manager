import React, { useState, useEffect } from "react";

const IssueLogs = () => {
	const [issues, setIssues] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getIssues();
	}, []);

	const getIssues = async () => {
		setLoading(true);
		const res = await fetch("/issues");
		const data = await res.json();

		setIssues(data);
		setLoading(false);
	};

	if (loading) {
		return <h4>Loading...</h4>;
	}
	return (
		<ul className="collection-with-header">
			<li className="collection-header">
				<h4 className="center">Issue Logs</h4>
			</li>
			{!loading && issues.length === 0 ? (
				<p className="center">No issues to show...</p>
			) : (
				issues.map(issue => <li>{issue.description}</li>)
			)}
		</ul>
	);
};

export default IssueLogs;
