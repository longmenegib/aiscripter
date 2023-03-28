import moment from "moment";
import getRequestLimitForPlan from "../helpers/getRequestLimitForPlan";

function checkRequestLimit(user, res) {
  const plan = user.subscription;
  const requestCount = user.requestsThisMonth;

  // Check if the user has exceeded their request limit for the month
  if (requestCount >= getRequestLimitForPlan(plan)) {
    return res.status(429).json({ message: 'You have exceeded your request limit for this month.', success: false });
  }

  // Check if the user's subscription has expired
  if (moment(user.subscriptionEndDate).isBefore(moment())) {
    return res.status(401).json({ message: 'Your subscription plan has expired.' });
  }

  // Increment the user's request count and save the updated user
  user.requestsThisMonth = requestCount + 1;
  user.save();
  return;
}


export default checkRequestLimit;