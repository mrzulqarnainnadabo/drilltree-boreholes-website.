export const business = {
  name: 'Drilltree Boreholes Limited',
  locationLine: 'Kaduna, Kaduna State, Nigeria',
  phoneDisplay: '+234 703 594 0927',
  phoneHref: 'tel:+2347035940927',
  whatsappNumber: '2347035940927',
  address: '13 Yakubu Ave, City Centre, Kaduna 800001, Kaduna, Nigeria',
  mapsHref:
    'https://www.google.com/maps/search/?api=1&query=13%20Yakubu%20Ave%2C%20City%20Centre%2C%20Kaduna%20800001%2C%20Kaduna%2C%20Nigeria',
} as const;

export const primaryService = {
  title: 'Borehole drilling',
  summary:
    'Discuss a borehole project, the site location and intended water use with the business. Confirm the available scope and any related equipment or services directly before accepting a quotation.',
} as const;

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Services', href: '/services/' },
  { label: 'Our Process', href: '/process/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'FAQs', href: '/faqs/' },
  { label: 'Contact', href: '/contact/' },
] as const;

export const faqs = [
  {
    question: 'How do I request a borehole quotation?',
    answer:
      'Call or send a WhatsApp enquiry with the project location, intended water use and any details you already have about the property. The business can then discuss what information or assessment is needed before a scope and quotation can be prepared.',
  },
  {
    question: 'What affects the cost of drilling?',
    answer:
      'The site, ground conditions, access, project design and materials can all affect scope and cost. Ask for the quotation to state what work and materials are included, what is excluded, and what could change if site conditions differ from expectations. There is no fixed price shown here.',
  },
  {
    question: 'Does every site need a preliminary assessment?',
    answer:
      'The appropriate assessment depends on the location and project. Discuss the site and available information first, and confirm whether an assessment is needed and whether it is included in the quotation.',
  },
  {
    question: 'How is the appropriate drilling depth determined?',
    answer:
      'Depth depends on local ground and water conditions, the site and the project requirements. It should be assessed for the individual location; this website does not promise a fixed depth or guarantee that water will be found.',
  },
  {
    question: 'What information should I provide before requesting a quote?',
    answer:
      'Start with the site address or area, intended use, property type, access constraints and a short description of what you need. If you have a site plan or prior technical information, mention that during the discussion. Do not send sensitive personal documents.',
  },
  {
    question: 'Are pumps and water-storage systems included in every project?',
    answer:
      'Do not assume they are included. Confirm whether a pump, storage, distribution, electrical work, testing or other related item is available and included in the specific written scope before accepting a quotation.',
  },
  {
    question: 'What maintenance may a borehole require?',
    answer:
      'Maintenance depends on the borehole, installed equipment, usage and water conditions. Ask the supplier for the equipment instructions and any maintenance or aftercare that is available and included in the agreed scope.',
  },
] as const;
