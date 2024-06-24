import {
  Body,
  Column,
  Container,
  Font,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Row,
  Text,
} from "@react-email/components";
import * as React from "react";

interface NotificationEmailProps {
  message?: string;
}

export const NotificationEmail = ({ message }: NotificationEmailProps) => (
  <Html lang="en">
    <Head>
      <title>Monosend Notification</title>
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
        <Container style={messageContainer}>
          <p dangerouslySetInnerHTML={{ __html: message ?? "" }}></p>
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

NotificationEmail.PreviewProps = {
  message: `<div id=":mh" class="ii gt" jslog="20277; u014N:xr6bB; 1:WyIjdGhyZWFkLWY6MTgwMjcyNTQwNDg3NzA3NzAzMSJd; 4:WyIjbXNnLWY6MTgwMjcyNTQwNDg3NzA3NzAzMSJd"><div id=":mg" class="a3s aiL "><div class="adM">
</div><h2>Dear valued Monosend user,</h2>
<p>Your transfer has been confirmed.</p>
<p><strong>Transfer amount:</strong> 100.00 NGN</p>
<p><strong>Transfer account:</strong> 0088100851(STERLING BANK) SYLVESTER CHARLIE OKON</p>
<p><strong>Timestamp:</strong> 2024-06-24 07:08:31</p><div class="yj6qo"></div><div class="adL">
</div></div></div>`,
} as NotificationEmailProps;

export default NotificationEmail;

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
  marginTop: "24px",
  marginBottom: "24px",
};

const logo = {
  margin: "16px auto",
};

const line = {
  height: "2px",
  color: "#E6F2F9",
  backgroundColor: "#E6F2F9",
  border: "0 none",
};

const messageContainer = {
  padding: "6px 40px",
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
