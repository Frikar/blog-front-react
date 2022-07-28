import React from 'react';
import {Link} from "react-router-dom";

const UserCard = ({user}) => {
	return (
		<div className="card md:w-96 w-80 bg-base-200 shadow-xl p-4" data-testid="userListItem" key={user.id}>
			<div className="card-body">
				<h2 className="card-title justify-center text-secondary">{user.name}</h2>
				<p>{user.email}</p>
				<div className="card-actions justify-center">
					<Link className="btn btn-primary" to={`/${user.id}`} data-testid={`detail-${user.id}`}>Ver posts</Link>
				</div>
			</div>
		</div>
	);
};

export default UserCard;
