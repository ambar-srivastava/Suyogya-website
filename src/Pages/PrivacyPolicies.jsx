const PrivacyPolicies = () => {
  const privacyData = [
    {
      id: 1,
      title: "Information We Collect",
      purposeText:
        "We may collect various types of information from you, including:",
      detailsObj: {
        a: " Personal Information: This includes your name, email address, postal address, phone number, and any other information you provide during account creation, registration, or while using our services.",
        b: "Payment Information: When you make a purchase, we may collect payment details, including credit/debit card information and billing addresses. However, we do not store this payment information; it is securely processed by our third-party payment processors.",
        c: "Usage Data: We collect information about your interactions with our website, such as the pages you visit, the features you use, and the time and date of your visits.",
        d: "Device Information: We may collect information about the device you use to access our website, including its type, operating system, browser type, and IP address.",
      },
    },
    {
      id: 2,
      title: "How We Use Your Information",
      purposeText: "We use your information for various purposes, including:",
      detailsObj: {
        a: "Providing Services: To offer and improve our services, personalize your experience, and respond to your requests and inquiries.",
        b: "Communication: To send you information about our services, updates, newsletters, and promotional offers. You can opt out of these communications at any time.",
        c: "Analytics: To analyze website usage patterns, track the effectiveness of our marketing efforts, and improve our services.",
        d: "Security: To protect our website and users against unauthorized access, fraud, and other unlawful activities.",
      },
    },
    {
      id: 3,
      title: "Information Sharing",
      purposeText:
        "We do not sell, trade, or rent your personal information to third parties. However, we may share your information with:",
      detailsObj: {
        a: "Service Providers: We may share your information with third-party service providers who assist us in operating our website and providing our services.",
        b: "Legal Compliance: We may share your information if required by law, regulation, or legal process.",
        c: "Business Transfers: In the event of a merger, acquisition, or sale of our assets, your information may be transferred as part of the transaction.",
      },
    },
    {
      id: 4,
      title: "Your Choices",
      purposeText: "You can:",
      detailsObj: {
        a: "Access and Update Your Information: You have the right to access, correct, or update your personal information by logging into your account.",
        b: "Opt-Out: You can opt out of receiving promotional emails by following the instructions provided in those emails or by contacting us.",
      },
    },
    {
      id: 5,
      title: "Security",
      purposeText:
        "We take reasonable measures to protect your personal information from unauthorized access and disclosure. However, no data transmission over the internet is entirely secure. We cannot guarantee the security of your information.",
    },
    {
      id: 6,
      title: "Children's Privacy",
      purposeText:
        "Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with information, please contact us.",
    },
    {
      id: 7,
      title: "Changes to this Privacy Policy",
      purposeText:
        "We may update this Privacy Policy from time to time to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes through our website",
    },
    {
      id: 8,
      title: "Contact Us",
      purposeText:
        "If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at [contact email].",
    },
  ];

  return (
    <div className="h-full w-full">
      <div className="h-20 bg-black/50" />
      <div className="h-full w-full flex flex-col items-center text-left md:p-10 p-5">
        <p className=" md:text-2xl text-black/80 font-medium lg:w-[70%] my-10">
          Welcome to SuYogya ! This Privacy Policy outlines how we collect, use,
          disclose, and protect your personal information when you use our
          website and services. By accessing or using our website, you consent
          to the practices described in this Privacy Policy.
        </p>
        {privacyData.map((data, index) => (
          <div
            key={index}
            className="h-full w-full lg:w-[80%] flex flex-col text-left"
          >
            <h2 className="text-2xl lg:text-3xl mt-10 mb-2 text-primary font-medium">
              {data.id}. {data.title}
            </h2>
            <p className="w-[70%] text-black/80 text-lg font-medium mb-2">
              {data.purposeText}
            </p>
            {data?.detailsObj?.a &&
            data?.detailsObj?.b &&
            data?.detailsObj?.c &&
            data?.detailsObj?.d ? (
              <ul>
                <li>a. {data?.detailsObj?.a}</li>
                <li>b. {data?.detailsObj?.b}</li>
                <li>c. {data?.detailsObj?.c}</li>
                <li>d. {data?.detailsObj?.d}</li>
              </ul>
            ) : data?.detailsObj?.a &&
              data?.detailsObj?.b &&
              data?.detailsObj?.c ? (
              <ul>
                <li>a. {data?.detailsObj?.a}</li>
                <li>b. {data?.detailsObj?.b}</li>
                <li>c. {data?.detailsObj?.b}</li>
              </ul>
            ) : data?.detailsObj?.a && data?.detailsObj?.b ? (
              <ul>
                <li>a. {data?.detailsObj?.a}</li>
                <li>b. {data?.detailsObj?.b}</li>
              </ul>
            ) : (
              ""
            )}
          </div>
        ))}
        <p className="pt-10 text-lg font-medium text-gray-600">
          By using our website, you agree to the terms of this Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicies;
