export const mapEventType = (
  type: string,
  option: "client-server" | "server-client"
): string => {
  if (option === "client-server") {
    switch (type) {
      case "Course":
        return "COURSE";

      case "Field Event":
        return "FIELD_EVENT";

      case "Online Event":
        return "ONLINE_EVENT";

      case "Workshop":
        return "WORKSHOP";

      default:
        return "";
    }
  } else {
    switch (type) {
      case "COURSE":
        return "Course";

      case "FIELD_EVENT":
        return "Field Event";

      case "ONLINE_EVENT":
        return "Online Event";

      case "WORKSHOP":
        return "Workshop";

      default:
        return "";
    }
  }
};

export const mapEventDuration = (
  type: string,
  option: "client-server" | "server-client"
) => {
  if (option === "client-server") {
    switch (type) {
      case "Less than a day":
        return "LESS_THAN_DAY";
      case "Less than a week":
        return "LESS_THAN_WEEK";
      case "Less than a month":
        return "LESS_THAN_MONTH";
      case "Less than a year":
        return "LESS_THAN_YEAR";
      default:
        return "";
    }
  } else {
    switch (type) {
      case "LESS_THAN_DAY":
        return "Less than a day";

      case "LESS_THAN_WEEK":
        return "Less than a week";

      case "LESS_THAN_MONTH":
        return "Less than a month";

      case "LESS_THAN_YEAR":
        return "Less than a year";

      default:
        return "";
    }
  }
};

export const mapCertificateType = (
  type: string,
  option: "client-server" | "server-client"
): string => {
  if (option === "client-server") {
    switch (type) {
      case "Achievement":
        return "ACHIEVEMENT";

      case "Appreciation":
        return "APPRECIATION";

      case "Participation":
        return "PARTICIPATION";

      default:
        return "";
    }
  } else {
    switch (type) {
      case "ACHIEVEMENT":
        return "Achievement";

      case "APPRECIATION":
        return "Appreciation";

      case "ONLINE_EVENT":
        return "Online Event";

      case "PARTICIPATION":
        return "Participation";

      default:
        return "";
    }
  }
};

export const mapBrandType = (
  type: string,
  option: "client-server" | "server-client"
): string => {
  if (option === "client-server") {
    switch (type) {
      case "Personal":
        return "PERSONAL";

      case "Organization":
        return "ORGANIZATION";

      case "Institute":
        return "INSTITUTE";

      case "Community":
        return "COMMUNITY";

      case "Company":
        return "COMPANY";

      default:
        return "";
    }
  } else {
    switch (type) {
      case "PERSONAL":
        return "Personal";

      case "ORGANIZATION":
        return "Organization";

      case "INSTITUTE":
        return "Institute";

      case "COMMUNITY":
        return "Community";

      case "COMPANY":
        return "Company";

      default:
        return "";
    }
  }
};

export const mapBrandIndustry = (
  type: string,
  option: "client-server" | "server-client"
) => {
  if (option === "client-server") {
    switch (type) {
      case "Education":
        return "EDUCATION";

      case "Health":
        return "HEALTH";

      case "Finance":
        return "FINANCE";

      case "Agriculture":
        return "AGRICULTURE";

      case "TECHNOLOGY":
        return "Technology";

      case "Transportation":
        return "TRANSPORTATION";

      case "Entertainment":
        return "ENTERTAINMENT";

      case "Media":
        return "MEDIA";

      case "Other":
        return "OTHER";

      default:
        return "";
    }
  } else {
    switch (type) {
      case "EDUCATION":
        return "Education";

      case "HEALTH":
        return "Health";

      case "FINANCE":
        return "Finance";

      case "AGRICULTURE":
        return "Agriculture";

      case "TECHNOLOGY":
        return "Technology";

      case "TRANSPORTATION":
        return "Transportation";

      case "ENTERTAINMENT":
        return "Entertainment";

      case "MEDIA":
        return "Media";

      case "OTHER":
        return "Other";

      default:
        return "";
    }
  }
};

export const mapBrandSize = (
  type: string,
  option: "client-server" | "server-client"
) => {
  if (option === "client-server") {
    switch (type) {
      case "1-10 employees":
        return "1-10";

      case "10-50 employees":
        return "10-50";

      case "50-100 employees":
        return "50-100";

      case "100-500 employees":
        return "100-500";

      case "500-1000 employees":
        return "500-1000";

      case "1000+ employees":
        return "1000+";

      default:
        return "";
    }
  } else {
    switch (type) {
      case "1-10":
        return "1-10 employees";

      case "10-50":
        return "10-50 employees";

      case "50-100":
        return "50-100 employees";

      case "100-500":
        return "100-500 employees";

      case "500-1000":
        return "500-1000 employees";

      case "1000+":
        return "1000+ employees";

      default:
        return "";
    }
  }
};
