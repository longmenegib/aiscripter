import { Configuration, OpenAIApi } from "openai";
import dbConnect from "../../../../lib/mongodb";
import authenticate from "../../../../middleware/authenticate";
import checkRequestLimit from "../../../../middleware/checkRequestLimit";
import User from "../../../../models/user";



const configuration = new Configuration({
    organization: "org-V5aBqqGFuhTfurCJCMW74MjY",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const handler = async(req, res) => {
  const requestMethod = req.method;
  res.setHeader('Content-Type', 'application/json');
  await authenticate(req, res);
  await dbConnect();
  const user = await User.findById(req.body.userid);
  await checkRequestLimit(user, res);

  switch (requestMethod) {
    case 'POST':
      if (req.body.prompt !== undefined) {
        // const completion = await openai.createCompletion({
        //   model: "text-davinci-003",
        //   prompt: `${req.body.prompt}`,
        //   temperature: .7,
        //   max_tokens: 2048,
        //   top_p: 1,
        //   frequency_penalty: 0,
        //   presence_penalty: 0,
        //   stop: ["{}"],
        // });

        // if(req.body.image !== 'No'){
          const response = await openai.createImage({
            prompt: `Please generate an image of a plan of a house, that has 3 bedrooms, one toilet in each room. each room has a bed, learning table. display them in a good way as an architecture `,
            n: 2,
            size: req.body.image,
          });
  
          let image_url = response.data.data;
          res.status(200).json({ thumbnail_url: image_url, success: true });
        // }else{
        //   res.status(200).json({ text: completion.data.choices[0].text, thumbnail_url: null, success: true });
        // }
        
      }
      else {
        res.status(400).json({ text: "No prompt provided.", success: false });
      }
      break;
    default:
      res.status(200).json({ message: 'Access accepted',  success: true})
  }
}

export default handler;