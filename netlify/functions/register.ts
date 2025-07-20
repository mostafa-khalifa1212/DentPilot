import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

function getGoogleCredentialsFromEnv() {
  return {
    type: process.env.GOOGLE_TYPE,
    project_id: process.env.GOOGLE_PROJECT_ID,
    private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    client_id: process.env.GOOGLE_CLIENT_ID,
    auth_uri: process.env.GOOGLE_AUTH_URI,
    token_uri: process.env.GOOGLE_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.GOOGLE_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.GOOGLE_CLIENT_X509_CERT_URL,
    universe_domain: process.env.GOOGLE_UNIVERSE_DOMAIN,
  };
}

async function appendDataToSheet(data: string[]) {
  const auth = new google.auth.GoogleAuth({
    credentials: getGoogleCredentialsFromEnv(),
    scopes: SCOPES,
  });

  const sheets = google.sheets({ version: 'v4', auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: '1D7kkuhX5ZAJ9GYU4-Y3BQhLKzVawVbMT8GQlBID9VNo',
    range: 'Sheet3!A:D',
    valueInputOption: 'RAW',
    requestBody: { values: [data] },
  });
}

async function isDuplicateEntry(name: string, clinicName: string) {
  const auth = new google.auth.GoogleAuth({
    credentials: getGoogleCredentialsFromEnv(),
    scopes: SCOPES,
  });

  const sheets = google.sheets({ version: 'v4', auth });

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: '1D7kkuhX5ZAJ9GYU4-Y3BQhLKzVawVbMT8GQlBID9VNo',
    range: 'Sheet3!A:D',
  });

  const rows = response.data.values || [];
  for (const row of rows.slice(1)) {
    const rowName = (row[1] || '').trim().toLowerCase();
    const rowClinic = (row[2] || '').trim().toLowerCase();
    if (rowName === name.trim().toLowerCase() && rowClinic === clinicName.trim().toLowerCase()) {
      return true;
    }
  }
  return false;
}

export const handler: Handler = async (
  event: HandlerEvent,
  _context: HandlerContext
) => {
  const headers = {
    'Access-Control-Allow-Origin': event.headers.origin || '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  try {
    const { name, clinicName, preferredDate, preferredTime } = JSON.parse(
      event.body || '{}'
    );
    const timestamp = new Date().toISOString();

    if (!name || !clinicName || !preferredDate || !preferredTime) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: 'All fields are required.' }),
      };
    }

    const duplicate = await isDuplicateEntry(name, clinicName);
    if (duplicate) {
      return {
        statusCode: 409,
        headers,
        body: JSON.stringify({ message: 'This entry already exists.' }),
      };
    }

    await appendDataToSheet([
      timestamp,
      name,
      clinicName,
      preferredDate,
      preferredTime,
    ]);

    return {
      statusCode: 201,
      headers,
      body: JSON.stringify({ message: 'Registration successful.' }),
    };
  } catch (err: any) {
    console.error('Function error:', err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Server error.', error: err.message }),
    };
  }
};
