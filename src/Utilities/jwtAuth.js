export const setJwtAuth = (user) => {
  const currentUser = {
    email: user.email,
  };
  fetch("https://lawhod-server.vercel.app/jwt", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("lawhod-token", data.token);
    });
};
