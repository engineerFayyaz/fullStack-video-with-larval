import React from "react";

import { Button, Img, Text } from "components";
import Header from "components/Header";

const TermsConditionsPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col items-center justify-start mx-auto p-2 shadow-bs1 w-full">
        <Header className="flex md:flex-col flex-row font-opensans md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col font-opensans items-center justify-start mt-[53px] md:px-5 ">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100"
            size="txtOpenSansRomanBold32"
          >
            Terms & Conditions
          </Text>
        </div>
        <Text
          className="mb-[49px] mt-8 pl-5 pr-5 text-white-A700 text-md"
          size="txtPoppinsRegular20WhiteA700"
        >
          <>
            <div style={{ color: "#888888", fontSize: "14px", fontWeight: "bold", letterSpacing: "1px", fontFamily: "roboto", marginBottom: "20px" }}>
              <b className="text-lg mb-2">Community Guidelines</b>
              <p>At Our Brand TV our mission is to provide the best creator videos created by our growing community where creators and communities can showcase talent nationally and affordably. To achieve this goal, we ask that all producers  participate in such a way that promotes a friendly, positive experience for our global community.</p><br />
              <p>In addition to our <a href="#">Terms of Service</a>, we provide the following guidelines for our community. These guidelines fall under a common sense philosophy and apply to all user generated content and activity on our services. This is considered a living document that we regularly update based on the evolution of the Outbrandtv community and service. Additional guidelines or specific exceptions may be applicable for certain services or properties under OurBrandTV</p><br />
              <p>To protect the integrity of our community, as the provider of the service, we at OurBrandTV reserve the right to suspend any account at any time for any conduct that we determine to be inappropriate or harmful. Such actions may include: removal of content, a strike on the account, and/or suspension of account(s).</p>
            </div>

            <div style={{ color: "#888888", fontSize: "14px", fontWeight: "bold", letterSpacing: "1px", fontFamily: "roboto", marginBottom: "20px" }} >
              <b className="text-lg mb-2">Breaking the Law</b>
              <p>You must respect all applicable local, national, and international laws while using our services. Any content or activity featuring, encouraging, offering, or soliciting illegal activity is prohibited. This includes committing or aiding in the malicious destruction, defacement, or theft of public or another person’s private property without permission on stream.</p><br />
            </div>

            <div style={{ color: "#888888", fontSize: "14px", fontWeight: "bold", letterSpacing: "1px", fontFamily: "roboto", marginBottom: "20px" }}>
              <b className="text-lg mb-2">Suspension Evasion</b>
              <p>All suspensions are binding until expiration or removal upon successful appeal. Any attempt to circumvent an account suspension or chat ban by using other accounts, identities, or by appearing on another user’s account will also result in an additional enforcement against your accounts, up to an indefinite suspension. </p><br />
              <p>In addition, it is prohibited to use your channel to knowingly feature or advertise a suspended user. We understand that there may be instances where suspended users may appear on your stream due to circumstances beyond your control, such as through third-party gaming tournaments, but we expect that you make a good faith effort to remove them from your broadcast, mute them, or otherwise limit their interactions with your stream.</p>
            </div>

            <div style={{ color: "#888888", fontSize: "14px", fontWeight: "bold", letterSpacing: "1px", fontFamily: "roboto", marginBottom: "20px" }} >
              <b className="text-lg mb-2">Self-Destructive Behavior</b>
              <p>Activity that may endanger your life, lead to your physical harm, or encourage others to engage in physically harmful behavior is prohibited.  This includes, but is not limited to: suicide threats, glorification or encouragement of self-harm, intentional physical trauma, illegal use of drugs, illegal or dangerous consumption of alcohol, and dangerous or distracted driving.</p><br />
            </div>

            <div style={{ color: "#888888", fontSize: "14px", fontWeight: "bold", letterSpacing: "1px", fontFamily: "roboto", marginBottom: "20px" }} >
              <b className="text-lg mb-2">Violence and Threats</b>
              <p>Acts and threats of violence will be taken seriously and are considered zero-tolerance violations and all accounts associated with such activities will be indefinitely suspended. This includes, but is not limited to:</p><br />
              <ul style={{ listStyle: "inside" }}>
                <li>Attempts or threats to physically harm or kill others</li>
                <li>Attempts or threats to hack, DDOS, or SWAT others</li>
                <li>Use of weapons to physically threaten, intimidate, harm, or kill others</li>
              </ul><br />
              <p>
                Twitch does not allow content that depicts, glorifies, encourages, or supports terrorism, or violent extremist actors or acts. This includes threatening to or encouraging others to commit acts that would result in serious physical harm to groups of people or significant property destruction. You may not display or link terrorist or extremist propaganda, including graphic pictures or footage of terrorist or extremist violence, even for the purposes of denouncing such content. <br /><br />

                In situations where a user has lost control of their broadcast due to severe injury, medical emergency, police action, or being targeted with serious violence, we will temporarily remove the channel and associated content. <br /><br />

                In exceptional circumstances, we may preemptively suspend accounts when we believe an individual’s use of Twitch poses a high likelihood of inciting violence. In weighing the risk of harm, we consider an individual’s influence, the level of recklessness in their past behaviors (regardless of whether any past behavior occurred on Twitch), whether or not there continues to be a risk of harm, and the scale of ongoing threats.
              </p>
            </div>
          </>
        </Text>
      </div>
    </>
  );
};

export default TermsConditionsPage;
