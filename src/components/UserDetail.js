import React, {useState, useEffect} from 'react';
import {getUser} from "../services/userService";
import {Link} from "react-router-dom";

const UserDetail = ({userId}) => {
	const [userData, setUserData] = useState({})

	useEffect(() => {
		const fetchData = async () => {
			const res = await getUser(userId)
			setUserData(res)
		}
		fetchData().catch(console.error)
	}, [userId])

	if (!userData) return <div>Loading...</div>;

	return (
		<div className="bg-base-100 flex flex-col justify-center items-center p-10">
			<div>
				<div className="avatar online">
					<div className="w-36 rounded-full">
						<img src="https://placeimg.com/192/192/people" alt={userData.name}/>
					</div>
				</div>
			</div>
			<h3 className="text-3xl">{userData.name}</h3>
			<a className="link-hover text-secondary text-xl mb-4" href={`mailto:${userData.email}`}>{userData.email}</a>
			<Link to={'/' + userData.id} className="btn w-36 btn-primary">Ver más</Link>
		</div>
	)
		;
};

export default UserDetail;
