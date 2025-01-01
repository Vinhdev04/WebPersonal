// TODO: Bắt đầu quá trình gọi API và render dữ liệu
export const render = async (apiKey) => {
  const respon = await fetch(apiKey);
  const result = await respon.json();
  return result;
};
