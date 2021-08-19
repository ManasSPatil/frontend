import axios from "axios";

const fetchProfile = async (email, id) => {
	const res = await axios.get(
		`https://test-fb-webhook1.herokuapp.com/api/user/${email}/profile/${id}`,
	);
	if (res) return res;
	else return {};
};

const getAccount = async (email) => {
	const res = await axios.get(
		`https://test-fb-webhook1.herokuapp.com/api/user/${email}/accounts`,
	);
	if (res) {
		return res;
	}
	return {};
};


const updateToken = async (email, accessToken) => {
	const res = await axios.put(
		`https://test-fb-webhook1.herokuapp.com/api/user/${email}/accesstoken`,
		{
			accessToken,
		},
	);
	if (res) {
		console.log("msg", res);
	}
};


export { updateToken, getAccount, fetchProfile, sendMessage };

export const getProfile = async (email) => {
	const res = await axios.get(`https://test-fb-webhook1.herokuapp.com/api/user/${email}/me`);
	if (res) {
		return res;
	}
	return {};
};

const sendMessage = async (email, message, recipientId) => {
	const res = await axios.post(
		`https://test-fb-webhook1.herokuapp.com/api/webhook/${email}/send_message`,
		{
			recipientId,
			message,
		},
	);
	if (res.status !== 200) {
		console.log("Some error occured");
	}
};


