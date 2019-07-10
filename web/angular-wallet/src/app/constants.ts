/**
 * Original work Copyright (c) 2018 PoC-Consortium
 * Modified work Copyright (c) 2019 Burst Apps Team
 */

export const constants = {
  connectionTimeout: 10000,
  currencies: [
    {code: 'AUD', symbol: '$'},
    {code: 'BRL', symbol: 'R$'},
    {code: 'CAD', symbol: '$'},
    {code: 'CLP', symbol: '$'},
    {code: 'CNY', symbol: '¥'},
    {code: 'CZK', symbol: 'Kč'},
    {code: 'DKK', symbol: 'kr'},
    {code: 'EUR', symbol: '€'},
    {code: 'GBP', symbol: '£'},
    {code: 'HKD', symbol: '$'},
    {code: 'HUF', symbol: 'Ft'},
    {code: 'IDR', symbol: 'Rp'},
    {code: 'ILS', symbol: '₪'},
    {code: 'INR', symbol: '₹'},
    {code: 'JPY', symbol: '¥'},
    {code: 'KRW', symbol: '₩'},
    {code: 'MXN', symbol: '$'},
    {code: 'MYR', symbol: 'RM'},
    {code: 'NOK', symbol: 'kr'},
    {code: 'NZD', symbol: '$'},
    {code: 'PHP', symbol: '₱'},
    {code: 'PKR', symbol: '₨'},
    {code: 'PLN', symbol: 'zł'},
    {code: 'RUB', symbol: '₽'},
    {code: 'SEK', symbol: 'kr'},
    {code: 'SGD', symbol: '$'},
    {code: 'THB', symbol: '฿'},
    {code: 'TRY', symbol: '₺'},
    {code: 'TWD', symbol: '$'},
    {code: 'USD', symbol: '$'},
    {code: 'ZAR', symbol: 'Rs'}
  ],
  database: 'loki.db',
  defaultCurrency: 'USD',
  defaultLanguage: 'en',
  defaultTheme: 'light',
  documentationUrl: '',
  donate: 'BURST-HT4V-8H5E-ESS5-223SB',
  languages: [
    {code: 'en', name: 'English'},
    {code: 'bg', name: 'Български'},
    {code: 'ca', name: 'Català'},
    {code: 'cs', name: 'Čeština'},
    {code: 'de-de', name: 'Deutsch'},
    {code: 'el', name: 'Ελληνικά'},
    {code: 'es-es', name: 'Español'},
    {code: 'fi', name: 'Suomi'},
    {code: 'fr', name: 'Français'},
    {code: 'gl', name: 'Galego'},
    {code: 'hi', name: 'हिंदी'},
    {code: 'hr', name: 'Hrvatski'},
    {code: 'id', name: 'Bahasa Indonesia'},
    {code: 'it', name: 'Italiano'},
    {code: 'ja', name: '日本語'},
    {code: 'lt', name: 'Lietuviškai'},
    {code: 'nl', name: 'Nederlands'},
    {code: 'sh', name: 'Hrvatski'},
    {code: 'sk', name: 'Slovensky'},
    {code: 'pt-pt', name: 'Português (Portugal)'},
    {code: 'pt-br', name: 'Português (Brazil)'},
    {code: 'sr', name: 'Српски'},
    {code: 'sr-cs', name: 'Srpski'},
    {code: 'tr', name: 'Türk'},
    {code: 'uk', name: 'Yкраiнска'},
    {code: 'ro', name: 'Român'},
    {code: 'ru', name: 'Русский'},
    {code: 'zh-cn', name: '中文 (simplified)'},
    {code: 'zh-tw', name: '中文 (traditional)'}
  ],
  nodes: [
    {
      name: 'burst-team.us',
      region: 'Global',
      location: 'USA',
      address: 'https://wallet1.burst-team.us',
      port: 2083,
      selected: true,
      ping: -1,
      version: '2.3.0'
    },
    {
      name: 'burst-alliance.org',
      region: 'Global',
      location: 'Europe',
      address: 'https://wallet.burst-alliance.org',
      port: 8125,
      selected: false,
      ping: -1,
      version: '2.4.0'
    },
    {
      name: 'burstcoin.ro #1',
      region: 'Global',
      location: 'Europe',
      address: 'https://wallet.burstcoin.ro',
      port: 443,
      selected: false,
      ping: -1,
      version: '2.3.0'
    },
    {
      name: 'burstcoin.ro #2',
      region: 'Global',
      location: 'Europe',
      address: 'https://wallet2.burstcoin.ro',
      port: 443,
      selected: false,
      ping: -1,
      version: '2.3.0'
    }
  ],
  supportUrl: 'https://github.com/burst-apps-team/phoenix/issues',
  transactionCount: '100'
};
