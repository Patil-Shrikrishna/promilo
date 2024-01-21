export const login = async (payload) => {
  const entries = Object.entries(payload);
  const formData = new FormData();
  entries.forEach(([key, value]) => {
    formData.append(key, value);
  });
  try {
    const res = await fetch("https://apiv2stg.promilo.com/user/oauth/token", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: "Basic UHJvbWlsbzpxNCE1NkBaeSN4MiRHQg==",
      },
    });

    const resData = await res.json();

    console.log(resData);
    return resData.response;
  } catch (err) {
    console.log(err.message);
  }
};
