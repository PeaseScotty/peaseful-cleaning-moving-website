/*
Optional Google Form settings.

Keep FORM_CONFIGURED false unless a real form exists under a business-controlled Google account
with matching questions, a published form URL, and a reliable response destination.
*/
window.GOOGLE_FORM_CONFIG = {
  FORM_CONFIGURED: false,
  GOOGLE_FORM_PUBLIC_URL: '',
  GOOGLE_FORM_ACTION_URL: '',
  ENTRY_IDS: {
    name: '',
    phone: '',
    email: '',
    preferredContactMethod: '',
    serviceType: '',
    generalLocation: '',
    preferredDate: '',
    jobSize: '',
    stairsElevator: '',
    heavyItems: '',
    transportationNeeded: '',
    accessibilityCommunication: '',
    affordableAssistance: '',
    additionalDetails: '',
    contactConsent: ''
  }
};
