import axios from "axios";

const register_visit = async () => {
  await axios({
    method: "post",
    url: process.env.REACT_APP_VISITOR_API_URL,
  })
    .then((response) => {
      return response;
    })
    .catch(() => {
      return { status: "Bad Request", status_code: 400 };
    });
};

export { register_visit };
