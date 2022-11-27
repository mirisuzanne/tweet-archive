let data = {
	username: "terribleMia", // No leading @ here
	homeLabel: "miriamsuzanne.com",
	homeUrl: "https://www.miriamsuzanne.com/",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(data.homeUrl)}/`;

module.exports = data;
