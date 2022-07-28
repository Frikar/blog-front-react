import React, {useEffect} from 'react';
import {useStateContext} from "../context/ContexProvider";
import {getUsers} from "../services/userService";
import {DataHero, UserCard} from "../components";

const Users = ({userId}) => {
	const {setUserList, userList} = useStateContext()

	useEffect(() => {
		const fetchData = async () => {
			const users = await getUsers()
			setUserList(users)
		}
		fetchData().catch(console.error)
	}, [])

	return (
		<div className="flex flex-wrap justify-center gap-6">
			<div className="flex flex-wrap justify-center w-full mb-4">
				<h1 className="md:text-4xl text-2xl text-primary-content font-bold mt-4">Listado de
					<span className="link-hover text-secondary"> usuarios</span></h1>
			</div>
			{userList.length === 0 && (
				<DataHero title={"usuarios"}/>
			)
			}
			<div className="flex flex-wrap mx-auto gap-6 justify-center mb-10">
				{userList.map((user) => (
					<UserCard user={user} key={user.id}/>
				))}
			</div>
		</div>
	);
};

export default Users;
