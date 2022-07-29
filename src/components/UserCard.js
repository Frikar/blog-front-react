import React from "react";
import { Link } from "react-router-dom";

/**
 * @description       Tarjeta para cada usuario de la lista
 * @param user        Props traídos desde la page
 * @param user._id    Parametro para key y routing
 * @param user.email  Parametro con el email del usuario
 * @param user.name   Parametro con el nombre completo
 */
const UserCard = ({ user }) => {
  return (
    <div
      className="card md:w-96 w-80 bg-base-200 shadow-xl p-4 max-h-52"
      data-testid="userListItem"
      key={user._id}
    >
      <div className="card-body">
        <h2 className="card-title justify-center text-secondary">
          {user.name}
        </h2>
        <p>{user.email}</p>
        <div className="card-actions justify-center">
          <Link
            className="btn btn-primary"
            to={`/${user._id}`}
            data-testid={`detail-${user._id}`}
          >
            Ver posts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
