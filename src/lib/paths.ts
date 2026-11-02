const configuredBase = import.meta.env.BASE_URL;

export const basePath = configuredBase.endsWith("/")
  ? configuredBase
  : `${configuredBase}/`;

// The CV page holds my phone number, so it only builds when PUBLIC_SHOW_CV=true.
export const showCv = import.meta.env.PUBLIC_SHOW_CV === "true";
