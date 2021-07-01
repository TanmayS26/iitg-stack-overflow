import React from "react";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import Navbar from "../../components/Navbar/Navbar";
import RightSideBar from "../../components/QuestionCard/RightSideBar";
import Alert from "../../components/Alert/Alert";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { setAlert } from "../../redux/alert/alert.actions";

const PostQuestion = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    dispatch(
      setAlert({
        message: "Please login to ask question",
        status: false,
      })
    );
    history.push("/login");
  }
  return (
    <>
      <Navbar />
      <Alert />
      <div className="pl-40">
        <div className="flex pt-4">
          <div className="pt-28 pb-12 text-2xl text-left mr-96">
            Ask a public question
          </div>
          <img
            src="https://cdn.sstatic.net/img/ask/background.svg?v=2e9a8205b368"
            className="w-1/2 mt-11 "
          ></img>
        </div>
        <div className="flex justify-start">
          <QuestionCard />
          <RightSideBar />
        </div>
      </div>
    </>
  );
};

export default PostQuestion;