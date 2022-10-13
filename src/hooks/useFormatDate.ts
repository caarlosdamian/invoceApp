export const useFormatDate = (paymentDue: any) => {
  const date = new Date(paymentDue);
  return date.toLocaleDateString("en-GB", {

    day: "numeric",
    month: "short",
    year: "numeric",
  });
};
