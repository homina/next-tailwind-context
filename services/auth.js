import config from "../config"

export async function login(data = {}) {
    data = {...data, device_id: "xxxx-xxxx-xxxx"}
    const response = await fetch(config.api + "auth/signin", {
		method: "POST",
		cache: "no-cache",
		headers: {
			"Content-Type": "application/json",
		},
		redirect: "follow",
		body: JSON.stringify(data),
	});
    return response.json();
}
