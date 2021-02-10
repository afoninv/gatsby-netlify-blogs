var _iub = _iub || [];
_iub.csConfiguration = {
  "consentOnContinuedBrowsing": false,
  "perPurposeConsent": true,
  "lang": "en",
  "siteId": 2095145,
  "cookiePolicyId": 42105568,
  "cookiePolicyUrl": "https://www.soveren.io/cookie-policy",
  "banner": {
    "acceptButtonDisplay": true,
    "customizeButtonDisplay": true,
    "acceptButtonColor": "#1656d9",
    "acceptButtonCaptionColor": "white",
    "customizeButtonColor": "#232c40",
    "customizeButtonCaptionColor": "white",
    "rejectButtonDisplay": true,
    "rejectButtonColor": "#f5f7f9",
    "rejectButtonCaptionColor": "#414d65",
    "position": "float-bottom-center",
    "backgroundOverlay": true,
    "textColor": "#54617B",
    "backgroundColor": "white",
    "fontSize": "12px",
    "cookiePolicyLinkCaption": "privacy policy",
    "content": "<div id=\"iubenda-cs-title\">Notice</div><div id=\"iubenda-cs-paragraph\">This website uses cookies to give you the best possible service. By clicking Accept, you agree to our <a href=\"soveren.io/privacy_policy\" class=\"iubenda-cs-cookie-policy-lnk\">privacy policy</a>.<br />You can learn more about how we use your data and customize the settings by clicking the button below.</div>"
  },
  "callback": {
    onPreferenceExpressedOrNotNeeded: function(preference) {
      dataLayer.push({
        iubenda_ccpa_opted_out: _iub.cs.api.isCcpaOptedOut()
      });
      if (!preference) {
        dataLayer.push({
          event: "iubenda_preference_not_needed"
        });
      } else {
        if (preference.consent === true) {
          dataLayer.push({
            event: "iubenda_consent_given"
          });
        } else if (preference.consent === false) {
          dataLayer.push({
            event: "iubenda_consent_rejected"
          });
        } else if (preference.purposes) {
          for (var purposeId in preference.purposes) {
            if (preference.purposes[purposeId]) {
              dataLayer.push({
                event: "iubenda_consent_given_purpose_" + purposeId
              });
            }
          }
        }
      }
    }
  }
};
