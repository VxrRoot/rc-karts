import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  const { SMTP_EMAIL } = process.env;

  const officeEmail = "office.rckart@gmail.com";

  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
    secure: true,
  });

  const { email, phone, message, consent } = body;

  try {
    const inside = await transporter.sendMail({
      from: SMTP_EMAIL,
      to: officeEmail,
      subject: `Nowa wiadomość od ${email} - rckart.pl`,
      html: `Email: ${email} Tel: ${phone} Wiadomość: ${message}`,
    });

    const outside = await transporter.sendMail({
      from: SMTP_EMAIL,
      to: email,
      subject: `Nowa wiadomość od Rckart`,
      html: `<html xmlns="http://www.w3.org/1999/xhtml">
      <head>
          <meta http-equiv="content-type" content="text/html; charset=utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0;">
          <meta name="format-detection" content="telephone=no"/>
      
      
          <style>
      /* Reset styles */ 
      body { margin: 0; padding: 0; min-width: 100%; width: 100% !important; height: 100% !important;}
      body, table, td, div, p, a { -webkit-font-smoothing: antialiased; text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; line-height: 100%; }
      table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse !important; border-spacing: 0; }
      img { border: 0; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }
      #outlook a { padding: 0; }
      .ReadMsgBody { width: 100%; } .ExternalClass { width: 100%; }
      .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100%; }
      
      /* Rounded corners for advanced mail clients only */ 
      @media all and (min-width: 560px) {
          .container { border-radius: 10px; -webkit-border-radius: 10px; -moz-border-radius: 10px; -khtml-border-radius: 10px;}
      }
      
      /* Set color for auto links (addresses, dates, etc.) */ 
      a, a:hover {
          color: #127DB3;
      }
      .footer a, .footer a:hover {
          color: #303030;
      }
      
          </style>
      
      
      </head>
      
      <!-- BODY -->
      <!-- Set message background color (twice) and text color (twice) -->
      <body topmargin="0" rightmargin="0" bottommargin="0" leftmargin="0" marginwidth="0" marginheight="0" width="100%" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; width: 100%; height: 100%; -webkit-font-smoothing: antialiased; text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; line-height: 100%;
          background-color: #f2f2f2;
          color: #fff;"
          bgcolor="#101010"
          text="#000000">
      
      <!-- SECTION / BACKGROUND -->
      <!-- Set message background color one again -->
      <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; width: 100%;" class="background"><tr><td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0;"
          bgcolor="#f2f2f2">
      
      
      <table border="0" cellpadding="0" cellspacing="0" align="center"
          width="560" style="border-collapse: collapse; border-spacing: 0; padding: 0; width: inherit;
          max-width: 560px;" class="wrapper">
      
          <tr>
              <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;
                  padding-top: 40px;
                  padding-bottom: 40px;">
      
      
                  
                  <a target="_blank" style="text-decoration: none;"
                      href="https://rc-karts.vercel.app"><img height="60px" width="auto" border="0" vspace="0" hspace="0"
                      src="https://www.rckart.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.576b67f6.png&w=640&q=75"
                      width="150" height="50"
                      alt="Logo" title="Logo" style="
                      color: #28b473;
                      font-size: 10px; margin: 0; padding: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; border: none; display: block;" /></a>
      
              </td>
          </tr>
      
      <!-- End of WRAPPER -->
      </table>
      
      <!-- WRAPPER / CONTEINER -->
      <!-- Set conteiner background color -->
      <table border="0" cellpadding="0" cellspacing="0" align="center"
          bgcolor="#58bb47"
          width="560" style="border-collapse: collapse; border-spacing: 0; padding: 0; width: inherit;
          max-width: 560px;" class="container">
      
          <!-- HEADER -->
          <!-- Set text color and font family ("sans-serif" or "Georgia, serif") -->
          <tr>
              <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 24px; font-weight: bold; line-height: 130%;
                  padding-top: 25px;
                  color: #f2f2f2;
                  font-family: sans-serif;" class="header">
                      Dziękujemy za twoją wiadomość:
              </td>
          </tr>
          
      
      
      
          <!-- PARAGRAPH -->
          <!-- Set text color and font family ("sans-serif" or "Georgia, serif"). Duplicate all text styles in links, including line-height -->
          <tr>
              <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 16px; font-weight: 400; line-height: 160%;
                  padding-top: 25px; 
                  color: #ffffff;
                  font-family: sans-serif;" class="paragraph">
                  ${message}
              </td>
          </tr>
      
              <!-- PARAGRAPH -->
          <!-- Set text color and font family ("sans-serif" or "Georgia, serif"). Duplicate all text styles in links, including line-height -->
          <tr>
              <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 16px; font-weight: 400; line-height: 160%;
                  padding-top: 25px; 
                  color: #ffffff;
                  font-family: sans-serif;" class="paragraph">
      
              </td>
          </tr>
          
                  <!-- LINE -->
          <!-- Set line color -->
          <tr>    
              <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;
                  padding-top: 25px;" class="line"><hr
                  color="#e0e6e8" align="center" width="100%" size="1" noshade style="margin: 0; padding: 0;" />
              </td>
          </tr>
                  <!-- PARAGRAPH -->
          <!-- Set text color and font family ("sans-serif" or "Georgia, serif"). Duplicate all text styles in links, including line-height -->
          <tr>
              <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 16px; font-weight: 400; line-height: 160%;
                  padding-top: 25px; 
                  color: #ffffff;
                  font-family: sans-serif;" class="paragraph">
              </td>
          </tr>
                    <tr>
              <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 16px; font-weight: bold; line-height: 130%;
                    ;padding-bottom:25px;
                  color: #f2f2f2;
                  font-family: sans-serif;" class="header">
                      Postaramy się odpowiedzieć tak najszybciej jak to możliwe
              </td>
          </tr>
      <!-- End of WRAPPER -->
      </table>
      
      
      <!-- End of SECTION / BACKGROUND -->
      </td></tr></table>
      
      </body>
      </html>`,
    });

    return new Response("OK");
  } catch (error) {
    return new Response("Błąd wysyłania wiadomości email", { status: 500 });
  }
}
