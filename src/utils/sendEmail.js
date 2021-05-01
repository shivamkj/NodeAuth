import { SendTemplatedEmailCommand, SESClient } from "@aws-sdk/client-ses";

const REGION = "ap-south-1";
process.env.AWS_PROFILE = "SES";

const ses = new SESClient({ region: REGION });

const sendEmail = async (email, data, template = "OTPTemplate") => {
  const params = {
    Destination: {
      CcAddresses: [],
      ToAddresses: [email],
    },
    Source: "shivamkj360@gmail.com",
    Template: template,
    TemplateData: JSON.stringify(data),
    ReplyToAddresses: [],
  };

  const sentResponse = await ses.send(new SendTemplatedEmailCommand(params));
  if (sentResponse.MessageId) return true;
  else {
    console.log(sentResponse);
    return false;
  }
};

export default sendEmail;

// Command for creating email Template
// aws ses create-template --cli-input-json file://otpEmail.json --region ap-south-1 --profile ses

// For testing
// sendEmail(
//   "shivamkj360@gmail.com",
//   {
//     name: "Shivam",
//     otp: 12459,
//   },
//   "OTPTemplate"
// );
