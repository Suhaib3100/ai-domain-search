import axios from "axios";
import {
  setAllExt,
  setDnsInfo,
  setDomains,
  setGodaddyAuction,
  setGodaddyDomains,
  setHostingLocation,
  setInputValue,
  setLoading,
  setPrefix,
  setSedoPremium,
  setShowCard,
  setSuffix,
  setSuggestedDomains,
  setWhois,
  setWhoisHostingInfo,
} from "../../../../Redux/reducer";
export const submitFunction = ({
  dispatch,
  homePage,
  aiGenerator,
  whois,
  dnsChecker,
  hostingLocation,
  reverseIP,
  whoisHosting,
  value,
  showSedoDomain,
}) => {
  dispatch(setShowCard(true));
  dispatch(setInputValue(true));
  dispatch(setDomains(""));
  dispatch(setPrefix(""));
  dispatch(setSuffix(""));
  dispatch(setSuggestedDomains([]));
  dispatch(setAllExt(""));
  dispatch(setGodaddyDomains(""));
  dispatch(setGodaddyAuction([]));
  dispatch(setSedoPremium([]));
  dispatch(setLoading(true));

  const params = {
    name: value,
    "max-results": 100,
    // tlds: req.body.tld,
    "sensitive-content-filter": true,
    "include-registered": true,
  };

  const results = (rs) =>
    rs.map((x) => ({
      domain: x?.name,
      availability: x?.availability,
    }));

  if (homePage) {
    axios.post("/api/domain-check", { value }).then((res) => {
      dispatch(setDomains(res.data));
    });
    axios.post("/api/domain-check/all-ext", { value }).then((res) => {
      dispatch(setAllExt(res.data));
    });
    axios.post("/api/domain-check/popular-domains", { value }).then((res) => {
      dispatch(setGodaddyDomains(res.data));
    });
    // Godaddy Auctions
    axios
      .get(
        `https://auctions.godaddy.com/beta/findApiProxy/v4/aftermarket/find/auction/recommend?paginationSize=100&paginationStart=0&query=${value}&useExtRanker=true&useSemanticSearch=true`
      )
      .then((res) => {
        dispatch(setGodaddyAuction(res.data?.results));
        // console.log(res.data);
      });

    // Sedo Premium
    if (showSedoDomain) {
      axios.post("/api/domain-check/sedo", { value }).then((res) => {
        dispatch(setSedoPremium(res.data));
        // console.log(res.data);
      });
    }

    // Suggest
    setTimeout(() => {
      axios
        .get("https://sugapi.verisign-grs.com/ns-api/2.0/suggest?", {
          params,
        })
        .then((res) =>
          dispatch(setSuggestedDomains(results(res.data?.results)))
        );
    }, 400);
    // prefix
    setTimeout(() => {
      axios
        .get("https://sugapi.verisign-grs.com/ns-api/2.0/add-prefix?", {
          params,
        })
        .then((res) => dispatch(setPrefix(results(res.data?.results))));
    }, 800);
    // Suffix
    setTimeout(() => {
      axios
        .get("https://sugapi.verisign-grs.com/ns-api/2.0/add-suffix?", {
          params,
        })
        .then((res) => dispatch(setSuffix(results(res.data?.results))));
    }, 1200);
  } else if (aiGenerator) {
    // Suggest
    setTimeout(() => {
      axios
        .get("https://sugapi.verisign-grs.com/ns-api/2.0/suggest?", {
          params,
        })
        .then((res) =>
          dispatch(setSuggestedDomains(results(res.data?.results)))
        );
    }, 400);
    // prefix
    setTimeout(() => {
      axios
        .get("https://sugapi.verisign-grs.com/ns-api/2.0/add-prefix?", {
          params,
        })
        .then((res) => dispatch(setPrefix(results(res.data?.results))));
    }, 800);
    // Suffix
    setTimeout(() => {
      axios
        .get("https://sugapi.verisign-grs.com/ns-api/2.0/add-suffix?", {
          params,
        })
        .then((res) => dispatch(setSuffix(results(res.data?.results))));
    }, 1200);
  } else if (whois) {
    axios.post("/api/whois/who-is", { value }).then((res) => {
      dispatch(setLoading(false));
      dispatch(setWhois(Object.entries(res.data)));
    });
  } else if (dnsChecker) {
    axios.post("/api/dns-checker/get-dns", { value }).then((res) => {
      // dispatch(setInputValue(false));
      dispatch(setLoading(false));
      dispatch(setDnsInfo(res.data));
    });
  } else if (hostingLocation) {
    axios.post("/api/hosting-location/get-location", { value }).then((res) => {
      // dispatch(setInputValue(false));
      dispatch(setLoading(false));
      dispatch(setHostingLocation(res.data?.data));
    });
  } else if (reverseIP) {
    axios.post("/api/reverse-ip/get-ip", { value }).then((res) => {
      // dispatch(setInputValue(false));
      dispatch(setLoading(false));
      dispatch(setHostingLocation(res.data?.data));
    });
  } else if (whoisHosting) {
    axios.post("/api/who-is-hosting/check-hosting", { value }).then((res) => {
      dispatch(setWhoisHostingInfo(res.data));
      dispatch(setLoading(false));
    });
  }
};
