import {
  Body,
  Column,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface PlaidVerifyIdentityEmailProps {
  validationCode?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const LoginOtpEmail = ({
  validationCode,
}: PlaidVerifyIdentityEmailProps) => (
  <Html lang="en">
    <Head>
      <title>Monosend Verification Code</title>
      <Font
        fontFamily="Sora"
        fallbackFontFamily="sans-serif"
        webFont={{
          url: "https://fonts.gstatic.com/s/sora/v12/xMQOuFFYT72X5wkB_18qmnndmSdSnk-NKQI.woff2",
          format: "woff2",
        }}
        fontWeight={400}
        fontStyle="normal"
      />
      <Font
        fontFamily="Sora"
        fallbackFontFamily="sans-serif"
        webFont={{
          url: "https://fonts.gstatic.com/s/sora/v12/xMQOuFFYT72X5wkB_18qmnndmSe1mU-NKQI.woff2",
          format: "woff2",
        }}
        fontWeight={700}
        fontStyle="bold"
      />
    </Head>
    <Body style={main}>
      <Container style={container}>
        <Img
          src="https://pub-b2df118648294b0b83ff484b21bef19c.r2.dev/email-logo.png"
          width="185.35"
          height="36"
          alt="Monosend"
          style={logo}
        />
        <Hr style={line}></Hr>
        <Img
          src="https://pub-b2df118648294b0b83ff484b21bef19c.r2.dev/email-otp.png"
          width="135.68"
          height="58"
          alt="Otp"
          style={otp}
        />
        <Heading style={tertiary}>VERIFICATION CODE</Heading>
        <Text style={paragraph}>Dear Billy,</Text>
        <Text style={paragraph}>
          We noticed a login attempt and, for your security, a verification code
          has been sent to your email address.
        </Text>
        <Text style={paragraph}>
          Please enter the code bellow on the verification screen to complete
          the login.
        </Text>
        <Section style={codeContainer}>
          <Text style={code}>{validationCode}</Text>
        </Section>
        <Text style={paragraph}>
          If you didn't receive the code, you can resend it or try other
          verification options.
        </Text>
        <Text style={paragraph}>
          If you did not attempt to log in, please contact our support team
          immediately.
        </Text>
        <Container style={line2Container}>
          <Hr style={line2}></Hr>
        </Container>
        <Text style={paragraph}>
          If you experience any problems kindly contact us at{" "}
          <Link href="mailto:support@monosend.app" style={link}>
            support@monosend.app
          </Link>
        </Text>
        <Container style={footer}>
          <Text style={footerText}>Follow us on:</Text>
          <Row style={socials}>
            <Column>
              <Link href="http://instagram.com/monosend">
                <Img
                  src="https://pub-b2df118648294b0b83ff484b21bef19c.r2.dev/email-instagram.png"
                  width="28"
                  height="28"
                  alt="Instagram"
                />
              </Link>
            </Column>
            <Column>
              <Link href="http://x.com/monosend">
                <Img
                  src="https://pub-b2df118648294b0b83ff484b21bef19c.r2.dev/email-twitter.png"
                  width="28"
                  height="28"
                  alt="Twitter"
                />
              </Link>
            </Column>
            <Column>
              <Link href="http://linkedin.com/monosend">
                <Img
                  src="https://pub-b2df118648294b0b83ff484b21bef19c.r2.dev/email-linkedin.png"
                  width="28"
                  height="28"
                  alt="Linkedin"
                />
              </Link>
            </Column>
            <Column>
              <Link href="http://facebook.com/monosend">
                <Img
                  src="https://pub-b2df118648294b0b83ff484b21bef19c.r2.dev/email-facebook.png"
                  width="28"
                  height="28"
                  alt="facebook"
                />
              </Link>
            </Column>
          </Row>
        </Container>
      </Container>
    </Body>
  </Html>
);

LoginOtpEmail.PreviewProps = {
  validationCode: "144833",
} as PlaidVerifyIdentityEmailProps;

export default LoginOtpEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily: "Sora,sans-serif",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #eee",
  borderRadius: "5px",
  boxShadow: "0 5px 10px rgba(20,50,70,.2)",
  maxWidth: "360px",
};

const logo = {
  margin: "16px auto",
};

const otp = {
  margin: "32px auto 20px",
};

const line = {
  height: "2px",
  color: "#E6F2F9",
  backgroundColor: "#E6F2F9",
  border: "0 none",
};

const line2 = {
  height: "1px",
  color: "#E6F2F9",
  backgroundColor: "#E6F2F9",
  border: "0 none",
};

const line2Container = {
  padding: "6px 40px",
};

const tertiary = {
  fontSize: "24px",
  fontWeight: 700,
  fontFamily: "Sora,sans-serif",
  height: "16px",
  letterSpacing: "0",
  lineHeight: "100%",
  margin: "0 8px 24px 8px",
  textTransform: "uppercase" as const,
  textAlign: "center" as const,
};

const codeContainer = {
  borderRadius: "4px",
  margin: "16px auto 16px",
  verticalAlign: "middle",
  width: "280px",
};

const code = {
  display: "inline-block",
  fontFamily: "Sora,sans-serif",
  fontSize: "45.6px",
  fontWeight: 700,
  letterSpacing: "6px",
  lineHeight: "40px",
  paddingBottom: "8px",
  paddingTop: "8px",
  margin: "0 auto",
  width: "100%",
  textAlign: "center" as const,
};

const paragraph = {
  color: "#444",
  fontSize: "14px",
  fontFamily: "Sora,sans-serif",
  letterSpacing: "0",
  lineHeight: "22px",
  padding: "6px 40px",
  margin: "0",
  textAlign: "left" as const,
};

const link = {
  color: "#1254DE",
  textDecoration: "underline",
};

const socials = {
  maxWidth: "138.5px",
};

const footer = {
  color: "#FFFFFF",
  backgroundColor: "#091032",
  fontSize: "14px",
  fontWeight: 700,
  letterSpacing: "0",
  lineHeight: "100%",
  margin: "0",
  marginTop: "20px",
  padding: "24px 0",
  fontFamily: "Sora,sans-serif",
  textAlign: "center" as const,
  textTransform: "uppercase" as const,
};

const footerText = {
  margin: "0 0 20px",
  fontSize: "14px",
  fontWeight: 700,
  letterSpacing: "0",
  lineHeight: "100%",
};
