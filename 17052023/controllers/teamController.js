const { default: axios } = require("axios");

const options = {
  headers: {
    "X-RapidAPI-Key": process.env.X_RapidAPI_Key,
    "X-RapidAPI-Host": process.env.X_RapidAPI_Host,
  },
};

exports.fetchTeamDetails = async (req, res) => {
  try {
    const response = await axios.get(
      process.env.TEAM_API_URL,
      options
    );
    if (response.status === 200) {
      res.status(200);
      res.json({ result: response.data });
    } else {
      res.status(404);
      res.json({
        isSuccess: false,
        messaage: "Unable to fetch team details",
      });
    }
  } catch (error) {
    res.status(404);
    res.json({
      isSuccess: false,
      messaage: error.messaage,
    });
  }
};
