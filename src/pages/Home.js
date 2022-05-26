import React, { useEffect, useReducer } from "react";
import { Helmet } from "react-helmet-async";
import Certificate from "../components/Certificate";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import data from "../data.js";

const reducer = (state, action) => {
  switch (action.type) {
    case "fetch_request":
      return { ...state, loading: true };
    case "fetch_success":
      return { ...state, certificates: action.payload, loading: false };
    case "fetch_fail":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const Home = () => {
  const [{ error, loading, certificates }, dispatch] = useReducer(reducer, {
    loading: true,
    error: "",
    certificates: [],
  });

  useEffect(() => {
    const fetchData = () => {
      dispatch({
        type: "fetch_request",
      });
      try {
        dispatch({
          type: "fetch_success",
          payload: data.certificates,
        });
      } catch (err) {
        dispatch({
          type: "fetch_fail",
          payload: err.message,
        });
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row">
          {certificates.map((c) => (
            <div key={c.slug} className="col-6 col-md-4 col-lg3 mb-3">
              <Certificate certificate={c} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
