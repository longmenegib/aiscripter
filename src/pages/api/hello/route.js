import { Configuration, OpenAIApi } from "openai";
import authenticate from "../../../../middleware/authenticate";
import generateJWT from "../token/generatetoken";
const configuration = new Configuration({
    organization: "org-V5aBqqGFuhTfurCJCMW74MjY",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

const handler = async(req, res) => {
  const requestMethod = req.method;
  
  switch (requestMethod) {
    case 'POST':
      await authenticate(req, res);
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

        // res.status(200).json({ text: completion.data.choices[0].text, success: true });
        res.status(200).json({ message: 'post eee',  success: true})
      }
      else {
        res.status(400).json({ text: "No prompt provided.", success: false });
      }
    default:
      // let token = generateJWT();
      res.status(200).json({ message: 'token',  success: true})
  }
}

export default handler;