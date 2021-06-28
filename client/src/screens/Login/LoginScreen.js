import React from "react";
import Card from "../../components/AuthCard/Card";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../assets/svg/Overflow";
import Alert from "../../components/Alert/Alert";
import { useSelector } from "react-redux";

const LoginScreen = () => {

  const history = useHistory();
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	if (isAuthenticated) {
		history.push("/");
	}

	return (
		<React.Fragment>
			<Alert />
			<div className="flex flex-col justify-center items-center h-screen">
				<a href="/">
					<Logo />
				</a>
				<Card type="Log in" />
				<span>
					Don’t have an account?
					<Link to="/register">
						<span className="text-blue-500"> Sign up</span>
					</Link>
				</span>
			</div>
		</React.Fragment>
	);
};

export default LoginScreen;
