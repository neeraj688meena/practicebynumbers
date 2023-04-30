export const NOTIFICATIONS_PAGE_SIZE = 20;
export const REQUIRED_ACTIONS_PAGE_SIZE = 20;
export const DEFAULT_DATE_TIME_FORMAT = "MM/DD/YYYY hh:mm A";
export const DEFAULT_DATE_FORMAT = "MM/DD/YYYY";

export const filterActivityOptions = [
  { color: "#F39F39", name: "APPT_REQUEST", value: "APPT_REQUEST", label: "Appt Request" },
  { color: "#5961E6", name: "FORM", value: "FORM", label: "Form" },
  { color: "#59A93F", name: "APPOINTMENT", value: "APPOINTMENT", label: "Appointment" },
  { color: "#3B82B8", name: "PAYMENT", value: "PAYMENT", label: "Payment" },
  { color: "#2E2E2E", name: "REVIEW", value: "REVIEW", label: "Review" },
  { color: "#DC5E5D", name: "FEEDBACK", value: "FEEDBACK", label: "Feedback" }
];

export const actionFilterMap = {
  APPT_REQUEST: {color: "#F39F39", text: "Appt Request", filters: ["AR", "AC", "ASF"] },
  FORM: {color: "#5961E6", text: "Form", filters: ["UPFS", "FSRS", "FURAS", "FWAPS"] },
  APPOINTMENT: {color: "#59A93F", text: "Appointment", filters: ["CR", "UMR"] },
  PAYMENT: {color: "#3B82B8", text: "Payment", filters: ["PR"] },
  REVIEW: {color: "#2E2E2E", text: "Review", filters: ["URR"] },
  FEEDBACK: {color: "#DC5E5D", text: "Feedback", filters: ["FR"] }
};

export const actionEventTypeMap = {
  UNFAVORABLE_REVIEW_RECEIVED: "URR",
  UNCLASSIFIED_MESSAGE_RECEIVED: "UMR",
  CALLBACK_REQUESTED: "CR",
  FEEDBACK_RECEIVED: "FR",
  APPOINTMENT_REQUESTED: "AR",
  APPOINTMENT_SYNC_FAILED: "ASF",
  APPOINTMENT_CONFLICTED: "AC",
  PAYMENT_RECEIVED: "PR",
  GENERAL_FORM_SUBMISSION_PRACTICE_ALERT: "FWAPS",
  FORM_SUBMISSION_REQUIRE_STAFF_SIGNATURE: "FSRS",
  UNKNOWN_PATIENT_FORM_SUBMITTED: "UPFS",
  GENERAL_FORM_SUBMISSION_UNKNOWN_REFERRAL_ALERT: "FURAS",
  GENERAL_FORM_SUBMISSION_REQUIRE_DOCTOR_SIGNATURE: "FRDS"
};

export const actionStatus = {
  PENDING: "pending",
  IGNORED: "ignored",
  COMPLETED: "completed",
  ALL : "all"
};

export const actionDescriptionMap = {};

export const notificationFilterMap = {
  APPT_REQUEST: {color: "#F39F39", text: "Appt Request", filters: ["CA", "ARA"] },
  FORM: {color: "#5961E6", text: "Form", filters: ["FS"] },
  APPOINTMENT: {color: "#59A93F", text: "Appointment", filters: ["AC"] },
  PAYMENT: {color: "#3B82B8", text: "Payment", filters: ["PR"] },
  REVIEW: {color: "#2E2E2E", text: "Review", filters: ["RR"] },
  FEEDBACK: {color: "#DC5E5D", text: "Feedback", filters: [] }
};

export const notificationEventTypeMap = {
  REVIEW_RECEIVED: "RR",
  APPOINTMENT_CONFIRMED: "AC",
  APPOINTMENT_REQUEST_ACCEPTED: "ARA",
  CONFLICTED_APPOINTMENT: "CA",
  PAYMENT_RECEIVED: "PR",
  FORM_SUBMITTED: "FS"
};

export const notificationStatus = {
  UNREAD: "unread",
  MARKED_AS_READ: "read"
};

export const tableDataStatus = {
  PAYTYPE_ID: "Paytype Id",
  PROVIDER_ID: "Provider Id",
  EMPLOYEE_TYPE_ID: "Employee Type Id"
};

export const notificationDescriptionMap = {};
